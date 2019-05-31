import React, { useState } from 'react'
import classname from 'classnames'
import './style.scss'

export const ToggleControl = props => {
	const {
		className,
		value: initialValue = false,
		onChange = () => {},
		label = '',
	} = props
	const [ value, setValue ] = useState( initialValue )

	const classes = classname( {
		'fl-asst-button': true,
		'fl-asst-form-control-toggle': true,
	}, className )

	const mergedProps = Object.assign( {}, props, {
		className: classes,
		type: 'button',
		onClick: e => {
			setValue( ! value )
			onChange( ! value, e )
		},
		role: 'switch',
		'aria-checked': value ? 'true' : 'false',
		'aria-label': label
	} )
	delete mergedProps.value

	const style = {
		transform: value ? 'translateX(30px)' : 'translateX(0px)',
		background: value ? 'var(--fl-asst-surface-color)' : 'transparent',
		borderColor: value ? 'transparent' : '',
	}

	return (
		<button {...mergedProps}>
			<div className="fl-asst-form-control-toggle-thumb" style={style} />
		</button>
	)
}
