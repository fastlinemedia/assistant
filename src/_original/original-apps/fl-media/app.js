import React from 'react'
import { useAppState } from 'store'
import {
	MediaList,
	MediaDropUploader,
	Scroller,
} from 'components'
import { MediaListFilter } from './filter'

export const App = () => {
	const { query } = useAppState()

	const scroller = {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	}

	return (
		<MediaDropUploader>
			<Scroller style={ scroller }>
				<MediaListFilter />
				<MediaList
					query={ query }
					pagination={ true }
				/>
			</Scroller>
		</MediaDropUploader>
	)
}

export const AppIcon = () => {
	return (
		<svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g fill="currentColor" fillRule="nonzero" stroke="none">
				<path d="M26.25,0 L1.75,0 C0.7826875,0 0,0.7826875 0,1.75 L0,26.25 C0,27.2173125 0.7826875,28 1.75,28 L26.25,28 C27.2173125,28 28,27.2173125 28,26.25 L28,1.75 C28,0.7826875 27.2173125,0 26.25,0 Z M1.75,25.375 C1.75,25.6178125 1.8493125,25.8365625 2.008125,25.995375 C1.8484375,25.8365625 1.75,25.6178125 1.75,25.375 Z M26.25,25.375 C26.25,25.8584375 25.8584375,26.25 25.375,26.25 L2.625,26.25 C2.3839375,26.25 2.1660625,26.1524375 2.008125,25.995375 L8.134,19.8695 C8.4756875,19.5278125 9.0295625,19.5278125 9.37125,19.8695 C9.37125,19.8695 10.098375,20.596625 11.015375,21.5145 C11.932375,22.430625 12.5593125,22.4441875 13.489875,21.5145 C14.4204375,20.5830625 18.634,16.3695 18.634,16.3695 C18.9756875,16.0278125 19.5295625,16.0278125 19.87125,16.3695 L26.25,22.74825 L26.25,25.375 Z M26.25,20.27375 L20.489875,14.5145 C19.8065,13.829375 18.69875,13.829375 18.015375,14.5145 L12.252625,20.276375 L9.989875,18.0145 C9.3065,17.329375 8.19875,17.329375 7.515375,18.0145 L1.75,23.779 L1.75,2.625 C1.75,2.1415625 2.1415625,1.75 2.625,1.75 L25.375,1.75 C25.8584375,1.75 26.25,2.1415625 26.25,2.625 L26.25,20.27375 Z"></path>
				<path d="M8.75,5.25 C6.817125,5.25 5.25,6.817125 5.25,8.75 C5.25,10.682875 6.817125,12.25 8.75,12.25 C10.682875,12.25 12.25,10.682875 12.25,8.75 C12.25,6.817125 10.682875,5.25 8.75,5.25 Z M8.75,10.5 C7.7835625,10.5 7,9.7164375 7,8.75 C7,7.7835625 7.7835625,7 8.75,7 C9.7164375,7 10.5,7.7835625 10.5,8.75 C10.5,9.7164375 9.7164375,10.5 8.75,10.5 Z"></path>
			</g>
		</svg>
	)
}

export const PrevIcon = () => {
	return (
		<svg width="29px" height="24px" viewBox="0 0 29 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-187.000000, -145.000000)" fillRule="nonzero" fill="transparent" strokeWidth="2" stroke="currentColor">
				<path d="M214.014075,161 L214.014075,148 C214.014075,146.895431 213.118644,146 212.014075,146 L190,146 C188.895431,146 188,146.895431 188,148 L188,165.010842 C188,166.115411 188.895431,167.010842 190,167.010842 L214.014075,167.010842 L205,158 L201.5,161 L195,154.5 L191.5,157.5" strokeLinecap="round" strokeLinejoin="round"></path>
				<circle cx="207" cy="152" r="3"></circle>
			</g>
		</svg>
	)
}
