import React, { useState } from 'fl-react'
import { __ } from '@wordpress/i18n'
import { getWpRest } from 'shared-utils/wordpress'
import { getSystemActions, getSystemConfig } from 'store'
import { Form, Control, List } from 'lib'

const { registerSection } = getSystemActions()

registerSection( 'fl-post-title', {
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { title, slug, url } = useForm()

		return (
			<>
				<Form.TextItem { ...title } />
				<Form.TextItem { ...slug } />
				<Form.Item label={ url.label }>
					<Control.URL
						id={ url.id }
						value={ url.value }
					/>
				</Form.Item>
			</>
		)
	},
} )

registerSection( 'fl-post-publish', {
	label: __( 'Publish Settings' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { status, visibility, password, date } = useForm()
		return (
			<>
				<Form.PlainTextItem { ...status } />
				<Form.SelectItem { ...visibility } />
				<Form.TextItem { ...password } />
				<Form.PlainTextItem { ...date } />
			</>
		)
	},
} )

registerSection( 'fl-post-taxonomies', {
	label: __( 'Taxonomies' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const [ options, setOptions ] = useState( {} )
		const { taxonomies } = getSystemConfig()
		const { terms } = useForm()
		const wpRest = getWpRest()

		const getHierarchicalOptions = ( options, terms, depth = 0 ) => {
			terms.map( term => {
				options[ `term:${ term.id }` ] = depth ? '-'.repeat( depth ) + ' ' + term.title : term.title
				if ( term.children ) {
					options = {
						...options,
						...getHierarchicalOptions( options, term.children, depth + 1 ),
					}
				}
			} )
			return options
		}

		const fields = Object.keys( terms.value ).map( ( slug, key ) => {
			const tax = taxonomies[ slug ]

			if ( tax.isHierarchical ) {
				if ( ! ( slug in options ) ) {
					options[ slug ] = {}
					setOptions( { ...options } )
					wpRest.terms().hierarchical( {
						taxonomy: slug,
						hide_empty: 0,
						orderby: 'name',
						order: 'ASC',
					} ).then( response => {
						options[ slug ] = getHierarchicalOptions( options[ slug ], response.data )
						setOptions( { ...options } )
					} )
				}
				return (
					<Form.SelectItem
						key={ key }
						label={ tax.labels.plural }
						selectMultiple={ true }
						options={ options[ slug ] }
						value={ terms.value[ slug ].map( v => `term:${ v }` ) }
						onChange={ values => {
							terms.value[ slug ] = values.map( v => parseInt( v.replace( 'term:', '' ) ) )
							terms.onChange( { ...terms.value } )
						} }
					/>
				)
			} else {
				const val = [
					{ id: 4, label: __( 'WordPress' ), onRemove: () => {} },
					{ id: 5, label: __( 'Best Posts' ), onRemove: () => {} },
					{ id: 6, label: __( 'Hot Dogs' ), onRemove: () => {} },
				]
				return (
					<Form.Item
						key={ key }
						label={ tax.labels.plural }
						labelForm={ `taxonomy-${ slug }` }
					>
						<Control.TagGroup value={ val } />
					</Form.Item>
				)
			}
		} )

		return fields
	},
} )

registerSection( 'fl-post-excerpt', {
	label: __( 'Excerpt' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { excerpt } = useForm()
		return (
			<>
				<Form.TextItem { ...excerpt } />
			</>
		)
	},
} )

registerSection( 'fl-post-attributes', {
	label: __( 'Attributes' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { parent, template, order } = useForm()
		return (
			<>
				<Form.SelectItem { ...template } />
				<Form.SelectItem { ...parent } />
				<Form.TextItem { ...order } />
			</>
		)
	},
} )

registerSection( 'fl-post-discussion', {
	label: __( 'Discussion' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { commentsAllowed, pingbacksAllowed } = useForm()
		return (
			<>
				<Form.CheckboxItem { ...commentsAllowed } />
				<Form.CheckboxItem { ...pingbacksAllowed } />
			</>
		)
	},
} )

registerSection( 'fl-post-comments', {
	label: 'Comments',
	location: {
		type: 'post',
		tab: 'comments',
	},
	contentStyle: { padding: 0 },
	render: ( { post } ) => {
		return (
			<List.Comments
				query={ { post__in: [ post.id ] } }
				getItemProps={ ( item, defaultProps ) => ( {
					...defaultProps,
					to: {
						pathname: `/fl-comments/comment/${item.id}`,
						state: { item }
					},
				} ) }
			/>
		)
	},
} )


// Create Post Screen
registerSection( 'fl-new-post-title', {
	label: 'Basic Info',
	location: {
		type: 'create-post',
	},
	render: ( { useForm } ) => {
		const { type, title, slug, parent } = useForm()
		return (
			<>
				<Form.SelectItem { ...type } />
				<Form.TextItem { ...title } />
				<Form.TextItem { ...slug } />
				<Form.SelectItem { ...parent } />
			</>
		)
	},
} )
