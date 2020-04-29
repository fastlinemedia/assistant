import { __ } from '@wordpress/i18n'
import { createSlug } from 'utils/url'
import mockup from './mockup'

export default {
	...mockup.teams,

	create: ( data ) => {
		return new Promise( ( resolve, reject ) => {
			const teams = mockup.teams.getData().filter(
				team => createSlug( team.name ) === createSlug( data.name )
			)

			if ( teams.length ) {
				reject( {
					errors: {
						name: __( 'That name already exists.' )
					}
				} )
				return
			}

			mockup.teams.create( data ).then( response => resolve( response ) )
		} )
	},

	nameExists: ( name ) => {
		return mockup.teams.getAll( { name } ).then( response => {
			return !! response.data.teams.length
		} )
	}
}
