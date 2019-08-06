import React, { useState, createRef, createContext, useContext } from 'fl-react'
import { __ } from '@wordpress/i18n'
import classname from 'classnames'
import { Flipped, Flipper } from 'react-flip-toolkit'
import { Icon, Nav } from 'lib'
import { useSystemState, getSystemActions } from 'store'
import './style.scss'

const transition = {
	stiffness: 500,
	damping: 30,
}

const adminBarSize = () => {
	const mobile = window.matchMedia( 'screen and (max-width: 782px)' )
	if ( mobile.matches ) {
		return 46
	}
	return 32
}

export const Window = ( {
	children,
	icon,
	size = 'mini',
	isHidden = false,
	shouldShowLabels = true,
	position = [ 1, 1 ],
	onChange = () => {},
	toolbar: topbar,
	...rest
} ) => {

	const handleChange = config => {
		const state = {
			isHidden,
			size,
			origin: position,
		}
		onChange( { ...state, ...config } )
	}

	// Is Hidden
	const toggleIsHidden = () => {
		handleChange( { isHidden: ! isHidden } )
		requestAnimate()
	}

	// Size
	const toggleSize = () => {
		handleChange( {
			size: 'mini' === size ? 'normal' : 'mini'
		} )
		requestAnimate()
	}

	// Origin
	const setPosition = pos => {
		handleChange( { origin: pos } )
	}

	// Animation
	const shouldAnimate = true
	const [ needsAnimate, setNeedsAnimate ] = useState( 0 )
	const requestAnimate = () => {
		if ( shouldAnimate ) {
			setNeedsAnimate( needsAnimate + 1 )
		}
	}

	const context = {
		isHidden,
		toggleIsHidden,

		size,
		toggleSize,

		position,
		setPosition,

		requestAnimate,
		shouldShowLabels,
	}
	return (
		<Flipper flipKey={needsAnimate}>
			<Window.Context.Provider value={context}>
				<WindowLayer onChange={handleChange} {...rest}>
					{ ! isHidden && <WindowPanel topbar={topbar}>{children}</WindowPanel> }
					{ isHidden && <WindowButton>{icon}</WindowButton> }
				</WindowLayer>
			</Window.Context.Provider>
		</Flipper>
	)
}

Window.defaults = {
	isHidden: false,
	size: 'mini',
	position: [ 1, 1 ],
	shouldShowLabels: true,
}

Window.Context = createContext( Window.defaults )
Window.Context.displayName = 'Window.Context'

const WindowLayer = ( {
	className,
	children,
	onChange = () => {},
	...rest
} ) => {
	const { requestAnimate, size, isHidden, position, setPosition } = useContext( Window.Context )
	const ref = createRef()
	const posRef = createRef()

	// Window Movement
	const [ isDragging, setIsDragging ] = useState( false )
	const [ initialPos, setInitialPos ] = useState( { x: null, y: null } )
	const [ currentPos, setCurrentPos ] = useState( { x: null, y: null } )
	const [ offset, setOffset ] = useState( { x: 0, y: 0 } )

	const dragStart = e => {

		if ( 'touchstart' === e.type ) {
			setInitialPos( {
				x: e.nativeEvent.touches[0].clientX - offset.x,
				y: e.nativeEvent.touches[0].clientY - offset.y
			} )
		} else {
			setInitialPos( {
				x: e.nativeEvent.clientX - offset.x,
				y: e.nativeEvent.clientY - offset.y
			} )
		}

		if ( e.target.classList.contains( 'fl-asst-window-drag-handle' ) ) {
			setIsDragging( true )
		}
	}

	const drag = e => {
		if ( isDragging ) {
			e.preventDefault()

			let ev = e.nativeEvent
			if ( 'touchmove' === e.type ) {
				ev = ev.touches[0]
			}

			const x = ev.clientX - initialPos.x
			const y = ev.clientY - initialPos.y

			requestAnimationFrame( () => {
				if ( 'undefined' !== typeof posRef.current && null !== posRef.current ) {
					posRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
				}
			} )
		}
	}

	const dragEnd = e => {
		if ( ! e.currentTarget || ! isDragging ) {
			return false
		}

		let point = e.nativeEvent
		if ( 'touchend' === e.type ) {
			point = e.nativeEvent.changedTouches[0]
		}
		const x = point.clientX > ( ref.current.clientWidth / 2 ) ? 1 : 0
		const y = point.clientY > ( ref.current.clientHeight / 2 ) ? 1 : 0

		const reset = { x: 0, y: 0 }
		setInitialPos( reset )
		setCurrentPos( reset )
		setOffset( reset )
		setIsDragging( false )

		setPosition( [ x, y ] )
		onChange( { origin: [ x, y ] } )
		requestAnimate()
		return false
	}

	const classes = classname( {
		'fl-asst-window-layer': true,
		'fl-asst-window-layer-is-dragging': isDragging,
	}, className )

	// Layer Props
	const props = {
		...rest,
		ref,
		className: classes,

		onTouchStart: dragStart,
		onTouchEnd: dragEnd,
		onTouchMove: drag,

		onMouseDown: dragStart,
		onMouseUp: dragEnd,
		onMouseMove: drag,
	}

	// Positioner
	const { x: xPos, y: yPos } = currentPos
	const transform = isDragging ? 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)' : ''
	const [ windowX, windowY ] = position
	const pad = 15

	let positionerStyles = {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: adminBarSize() + pad,
		bottom: windowY ? pad : pad,
		right: windowX ? pad : 'auto',
		left: windowX ? 'auto' : pad,
		justifyContent: windowY ? 'flex-end' : 'flex-start',
		maxHeight: '100vh',
		willChange: 'transform',
		pointerEvents: 'none',
		transform,
	}
	if ( 'normal' === size && ! isHidden ) {
		positionerStyles = {
			display: 'flex',
			flexDirection: 'column',
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: windowX ? 0 : 'auto',
			left: windowX ? 'auto' : 0,
			willChange: 'transform',
			pointerEvents: 'none',
			transform,
		}
	}

	return (
		<div id="canvas" {...props}>
			<div className="fl-asst-window-positioner" ref={posRef} style={positionerStyles}>{children}</div>
		</div>
	)
}

const WindowPanel = ( { className, children, style, topbar: TopBar,  ...rest } ) => {
	const { toggleIsHidden, toggleSize, size, shouldShowLabels } = useContext( Window.Context )
	const { isRoot } = useContext( Nav.Context )

	const { appearance } = useSystemState()
	const { setBrightness } = getSystemActions()
	const toggleBrightness = () => 'light' === appearance.brightness ? setBrightness( 'dark' ) : setBrightness( 'light' )


	const classes = classname( {
		'fl-asst-window': true,
		[`fl-asst-window-${size}`]: size,
		'fl-asst-primary-content': isRoot,
		'fl-asst-secondary-content': ! isRoot,
	}, className )

	const stopProp = e => e.stopPropagation()

	const stopEvts = {
		onMouseMove: stopProp,
		onTouchStart: stopProp,
	}

	const styles = {
		...style,
		display: 'flex',
		flexDirection: 'column',
	}

	const labelStyle = { marginLeft: 'var(--fl-asst-tiny-space)' }

	return (
		<Flipped flipId="window" spring={transition}>
			<div className={classes} style={styles} {...rest}>

				{ /* Toolbar */ }
				<div className="fl-asst-window-toolbar fl-asst-window-drag-handle">

					<span className="fl-asst-window-drag-handle" style={{ display: 'inline-flex', pointerEvents: 'none' }}>
						<Icon.DragHandle />
						{ shouldShowLabels && <span style={labelStyle}>{__( 'Move' )}</span> }
					</span>

					{ 'function' === typeof TopBar && <TopBar /> }

					<span
						{...stopEvts}
						style={{ marginLeft: 'auto' }}
					>

						{ /* Brightness */ }
						<button onClick={toggleBrightness}>
							<Icon.Brightness />
							{ shouldShowLabels && <span style={labelStyle}>{__( 'Brightness' )}</span> }
						</button>

						{ /* Window Size */ }
						<button onClick={toggleSize}>
							{ 'mini' === size && <Icon.Expand /> }
							{ 'normal' === size && <Icon.Collapse /> }
							{ shouldShowLabels && <span style={labelStyle}>{
								'mini' === size ?
									__( 'Expand' ) : __( 'Compact' )
							}</span> }
						</button>

						{ /* Hide Window */ }
						<button onClick={toggleIsHidden}>
							<Icon.Close />
							{ shouldShowLabels && <span style={labelStyle}>{__( 'Hide' )}</span> }
						</button>
					</span>
				</div>


				<div
					className="fl-asst-window-content"
					{...stopEvts}
				>{children}</div>
			</div>
		</Flipped>
	)
}

const WindowButton = ( { children, ...rest } ) => {
	const { toggleIsHidden } = useContext( Window.Context )
	return (
		<Flipped flipId="window" spring={transition}>
			<button className="fl-asst-window-button fl-asst-window-drag-handle" onClick={toggleIsHidden} {...rest}>
				<Flipped inverseFlipId="window">{children}</Flipped>
			</button>
		</Flipped>
	)
}