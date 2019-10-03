import React, { useContext } from 'fl-react'
import { __ } from '@wordpress/i18n'
import { Page, Button, Form } from 'lib'
import { getSystemConfig } from 'store'
import { getWpRest } from 'shared-utils/wordpress'
import { createSlug } from 'shared-utils/url'

export const CreatePost = ( { history, location } ) => {
	const state = location.state ? location.state : {}
	const { detailBaseUrl } = state
	const { contentTypes } = getSystemConfig()

	const defaults = {
		type: 'post',
		title: '',
		slug: '',
		parent: 0,
	}

	const getTypeOptions = () => {
		const options = {}
		Object.keys( contentTypes ).map( ( key ) => {
			options[ key ] = contentTypes[ key ].labels.singular
		} )
		return options
	}

	const {
		form,
		useFormContext,
		submitForm,
		isSubmitting,
		setIsSubmitting,
	} = Form.useForm( {
		type: {
			label: __( 'Type' ),
			options: getTypeOptions(),
			id: 'post_type',
		},
		title: {
			label: __( 'Title' ),
			placeholder: __( 'TItle' ),
			id: 'post_title',
			onChange: ({ value, setValue }) => {
				setValue( 'slug', value )
			}
		},
		slug: {
			label: __( 'Slug' ),
			placeholder: __( 'my-post-slug' ),
			sanitize: createSlug,
			id: 'post_name',
		},
		parent: {
			label: __( 'Parent' ),
			options: {
				'0': __( 'None' ),
			},
		},
	}, {
		onSubmit: args => {
			const { values, ids } = args
			const data = {}
			const wpRest = getWpRest()

			for ( let key in values ) {
				if ( ids[ key ] ) {
					data[ ids[ key ] ] = values[ key ]
				}
			}

			const handleError = error => {
				setIsSubmitting( false )
				alert( __( 'Error: Post not created! Please try again.' ) );
				if ( error ) {
					console.log( error ) // eslint-disable-line no-console
				}
			}

			wpRest.posts().create( data ).then( response => {
				const { data } = response
				if ( data.error ) {
					handleError()
				} else if ( detailBaseUrl ) {
					history.replace( `${ detailBaseUrl }/:${ data.id }`, { item: data } )
				} else {
					setIsSubmitting( false )
					alert( __( 'Post not created!' ) );
				}
			} ).catch( error => {
				handleError( error )
			} )
		}
	}, defaults )

	const Footer = () => {
		return (
            <>
				<Page.Toolbar>
					{ isSubmitting && <Button.Loading>{__( 'Creating' )}</Button.Loading> }
					{ ! isSubmitting && <Button type="submit" onClick={ submitForm } >{__( 'Create Draft' )}</Button> }
				</Page.Toolbar>
            </>
		)
	}

	return (
		<Page title={ __( 'Create New' ) } shouldPadSides={ false } footer={ <Footer /> }>
			<Form { ...form }>
				<Page.RegisteredSections
					location={ { type: 'create-post' } }
					data={ {
						useForm: useFormContext
					} }
				/>
			</Form>
		</Page>
	)
}