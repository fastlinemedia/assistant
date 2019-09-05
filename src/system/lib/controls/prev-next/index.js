import React from 'fl-react'
import classname from 'fl-classnames'
import { Button, Icon } from 'lib'

export const NextPrev = ( {
	className,
	onPrev = () => {},
	onNext = () => {},
	...rest
} ) => {
	const classes = classname( {
		'fl-asst-control-next-prev': true,
	}, className )

	return (
		<div className={ classes } { ...rest }>
			<Button appearance="transparent" onClick={ e => onPrev( e ) }>
				<Icon.LeftCaret />
			</Button>
			<Button appearance="transparent" onClick={ e => onNext( e ) }>
				<Icon.RightCaret />
			</Button>
		</div>
	)
}