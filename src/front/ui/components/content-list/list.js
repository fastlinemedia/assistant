import React, { cloneElement } from 'react'
import classname from 'classnames'
import { Icon, EmptyMessage } from 'components'
import { ContentListLoading } from './loading'
import { ContentListContainer, ContentListItem } from './parts'
import './style.scss'

export const ContentList = ( {
	data = null,
	container = <ContentListContainer />,
	containerClass = '',
	item = <ContentListItem />,
	itemClass = '',
	itemThumb = true,
	itemMeta = true,
	itemActions = true,
} ) => {

	if ( ! data ) {
		return <ContentListLoading />
	} else if ( ! data.length ) {
		return <EmptyMessage>No Results Found</EmptyMessage>
	}

	return cloneElement(
		container,
		{
			className: classname( containerClass, 'fl-asst-list' ),
		},

		/* Children */
		data.map( ( props, key ) => {
			return cloneElement( item, {
				className: classname( itemClass, 'fl-asst-list-item' ),
				key,
				itemThumb,
				itemMeta,
				itemActions,
				...props,
			} )
		} )
	)
}
