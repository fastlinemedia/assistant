import React, { useContext } from 'react'
import { __ } from '@wordpress/i18n'
import { List, App, Page, Layout, Filter, Nav } from 'assistant/ui'
import { useAppState, getAppActions, useSystemState, getSystemConfig } from 'assistant/data'
import { defaultQuery } from '../'

export const SummaryTab = () => {
	const { handle } = useContext( App.Context )
	const { counts } = useSystemState()
	const { contentTypes } = getSystemConfig()
	return (
		<>
			<Page.Section>

				<div style={ {
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 5
				} }>
					{ Object.entries( contentTypes ).map( ( [ key, item ], i ) => {
						const { labels } = item
						return (
							<div key={ i } style={ {
								display: 'flex',
								flexDirection: 'column',
								background: 'var(--fluid-primary-background)',
								color: 'var(--fluid-primary-color)',
								borderRadius: 'var(--fluid-sm-space)',
								padding: 'var(--fluid-med-space)'
							} }>
								{labels.plural}
								<span style={ { fontSize: 24, marginTop: 5, lineHeight: 1 } }>{counts[`content/${key}`]}</span>
							</div>
						)
					} )}
				</div>

			</Page.Section>

			<Page.Section label={ __( 'Latest Posts' ) } padX={ false }>
				<List.Posts
					query={ {
						post_type: 'post',
						posts_per_page: 5
					} }
					paginate={ false }
					getItemProps={ ( item, defaultProps ) => {
						if ( item.id ) {
							return {
								...defaultProps,
								description: null,
								thumbnailSize: 'sm',
								to: {
									pathname: `/${handle}/post/${item.id}`,
									state: { item }
								},
							}
						}
						return defaultProps
					} }
				/>
			</Page.Section>
		</>
	)
}

export const PostTypeTab = ( { type = 'post' } ) => {
	const { handle } = useContext( App.Context )
	const { history, location } = useContext( Nav.Context )
	const { query } = useAppState( 'fl-content' )
	const { setQuery } = getAppActions( 'fl-content' )
	const { contentTypes } = getSystemConfig()

	const style = {
		maxHeight: '100%',
		minHeight: 0,
		flex: '1 1 auto',
	}

	const goToTab = type => history.replace( `/${handle}/tab/${type}`, location.state )

	const PostFilter = () => {

		const postTypes = {}
		for ( let key in contentTypes ) {
			const { labels } = contentTypes[key]
			postTypes[key] = labels.plural
		}

		const sorts = {
			title: __( 'Title' ),
			author: __( 'Author' ),
			ID: __( 'Post ID' ),
			date: __( 'Date Created' ),
			modified: __( 'Date Modified' )
		}

		const statuses = {
			any: __( 'Any' ),
			publish: __( 'Published' ),
			draft: __( 'Drafted' ),
			pending: __( 'Pending' ),
			future: __( 'Scheduled' ),
			private: __( 'Private' ),
			trash: __( 'Trashed' ),
		}

		return (
			<Filter>
				<Filter.RadioGroupItem
					title={ __( 'Post Type' ) }
					items={ postTypes }
					value={ type }
					onChange={ value => goToTab( value ) }
				/>
				<Filter.RadioGroupItem
					title={ __( 'Status' ) }
					items={ statuses }
					value={ query.post_status }
					defaultValue={ defaultQuery.post_status }
					onChange={ value => setQuery( { ...query, post_status: value } ) }
				/>
				<Filter.RadioGroupItem
					title={ __( 'Sort By' ) }
					items={ sorts }
					value={ query.orderby }
					defaultValue={ defaultQuery.orderby }
					onChange={ value => setQuery( { ...query, orderby: value } ) }
				/>
				<Filter.Button onClick={ () => setQuery( defaultQuery ) }>{__( 'Reset Filter' )}</Filter.Button>
			</Filter>
		)
	}

	return (
		<Layout.Box outset={ true } padY={ false } style={ style }>
			<List.Posts
				query={ { ...query, post_type: type } }
				getItemProps={ ( item, defaultProps ) => {
					if ( item.id ) {
						return {
							...defaultProps,
							to: {
								pathname: `/${handle}/post/${item.id}`,
								state: { item }
							},
						}
					}
					return defaultProps
				} }
				before={ <PostFilter /> }
			/>
		</Layout.Box>
	)
}

export const FavoritesTab = () => {
	const { handle } = useContext( App.Context )
	const style = {
		maxHeight: '100%',
		minHeight: 0,
		flex: '1 1 auto',
	}
	return (
		<Layout.Box outset={ true } padY={ false } style={ style }>
			<List.Posts
				query={ { ...defaultQuery } }
				getItemProps={ ( item, defaultProps ) => {
					if ( item.id ) {
						return {
							...defaultProps,
							to: {
								pathname: `/${handle}/post/${item.id}`,
								state: { item }
							},
						}
					}
					return defaultProps
				} }
			/>
		</Layout.Box>
	)
}
