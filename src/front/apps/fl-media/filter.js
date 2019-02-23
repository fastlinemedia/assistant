import React, { useEffect } from 'react'
import { useAppState, getAppActions, useSystemState } from 'store'
import { TagGroupControl } from 'components'

export const MediaListFilter = () => {
	const { typeTags, setType, type } = getFilterData()

	return (
		<TagGroupControl
			appearance="vibrant"
			tags={ typeTags }
			value={ type }
			onChange={ setType }
		/>
	)
}

export const getFilterData = () => {
	const { filter } = useAppState()
	const { setQuery, setFilter } = getAppActions()
	const { type } = filter
	const { counts } = useSystemState()

	const typeTags = [
		{
			label: 'Images',
			value: 'image',
			count: counts[ 'media/images' ] || '0',
		},
		{
			label: 'Videos',
			value: 'video',
			count: counts[ 'media/video' ] || '0',
		},
		{
			label: 'Audio',
			value: 'audio',
			count: counts[ 'media/audio' ] || '0',
		},
		{
			label: 'Documents',
			value: 'application',
			count: counts[ 'media/documents' ] || '0',
		}
	]

	const setType = type => {
		setFilter( { ...filter, type } )
	}

	useEffect( () => {
		setQuery( {
			posts_per_page: 20,
			post_type: 'attachment',
			post_mime_type: type,
		} )
	}, [ type ] )

	return { typeTags, setType, type }
}
