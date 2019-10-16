import React from 'fl-react'
import { __ } from '@wordpress/i18n'
import { getSystemActions } from 'store'
import { Form, Button } from 'lib'

const { registerSection } = getSystemActions()

registerSection( 'fl-screen-labels', {
	location: {
		type: [ 'post' ],
	},
	render: ( { useForm } ) => {
		const { labels } = useForm()
		return (
			<Form.LabelsItem { ...labels } />
		)
	},
} )

registerSection( 'fl-screen-actions', {
	label: __( 'Actions' ),
	location: {
		type: [ 'post', 'attachment' ],
	},
	render: ( { useForm } ) => {

		if ( 'undefined' === typeof useForm ) {
			return null
		}

		const { actions } = useForm()

		if ( 'undefined' === typeof actions || 1 > actions.length ) {
			return (
				<div>{__( 'No Actions Found' )}</div>
			)
		}

		return (
			<>
				<Form.Item label={ actions.label }>
					<Button.Group appearance="grid">
						{ Button.renderActions( actions.value ) }
					</Button.Group>
				</Form.Item>
			</>
		)
	},
} )
