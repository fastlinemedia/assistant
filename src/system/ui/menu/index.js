import React, { cloneElement } from 'react'
import { ToggleLayer } from 'react-laag'
import classname from 'classnames'
import { Button } from 'ui'
import './style.scss'

const Menu = ( {
	children,
	content,
	isShowing,
	onOutsideClick = () => {},
	className,
	style,
	...rest
} ) => {
	return (
		<ToggleLayer
			isOpen={ isShowing }
			closeOnOutsideClick={ true }
			onOutsideClick = { onOutsideClick }
			placement={ {
				anchor: 'BOTTOM_RIGHT',
				possibleAnchors: [ 'BOTTOM_LEFT', 'BOTTOM_CENTER', 'BOTTOM_RIGHT' ]
			} }
			renderLayer={ ( { layerProps, isOpen } ) => {
				return isOpen && (
					<div
						{ ...rest }
						{ ...layerProps }
						style={ {
							...style,
							...layerProps.style,
						} }
						className={ classname( 'fl-asst-menu', layerProps.className, className ) }
					>
						{content}
					</div>

				)
			} }
		>
			{( { triggerRef } ) => cloneElement( children, { ref: triggerRef } ) }
		</ToggleLayer>
	)
}

const Item = ( { className, ...rest } ) => {
	const classes = classname( 'fl-asst-menu-item', className )
	return (
		<Button
			className={ classes }
			appearance="transparent"
			{ ...rest }
		/>
	)
}
Menu.Item = Item
Menu.Item.displayName = 'Menu.Item'

export default Menu
