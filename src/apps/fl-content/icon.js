import React from 'react'

const ContentIcon = ( { context } ) => {

	if ( 'sidebar' === context ) {
		return (
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14 19H6C4.34315 19 3 17.6569 3 16V4C3 2.34315 4.34315 1 6 1H10.1716C10.4368 1 10.6911 1.10536 10.8787 1.29289L16.7071 7.12132C16.8946 7.30886 17 7.56321 17 7.82843V16C17 17.6569 15.6569 19 14 19Z" stroke="currentColor" strokeWidth="2"/>
				<path d="M10 1V7C10 7.55228 10.4477 8 11 8H17" stroke="currentColor" strokeWidth="2"/>
			</svg>
		)
	}

	return (
		<svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.0575 1.1579C24.868 1.1579 25.645 1.47074 26.2161 2.02701L37.94 13.4461C38.5059 13.9973 38.8235 14.7426 38.8235 15.5194V36.2217C38.8235 39.878 35.759 42.8421 31.9786 42.8421H8.0214C4.24106 42.8421 1.17648 39.878 1.17648 36.2217V7.77833C1.17648 4.12197 4.24106 1.1579 8.0214 1.1579H24.0575ZM23.5294 2.62842L8.0214 2.62911C5.08113 2.62911 2.69758 4.93449 2.69758 7.77833V36.2217C2.69758 39.0655 5.08113 41.3709 8.0214 41.3709H31.9786C34.9189 41.3709 37.3024 39.0655 37.3024 36.2217V15.5194C37.3024 15.3595 37.2755 15.2022 37.2241 15.0533L26.7059 15.0526C24.9516 15.0526 23.5294 13.6529 23.5294 11.9263V2.62842Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
		</svg>
	)
}

export default ContentIcon
