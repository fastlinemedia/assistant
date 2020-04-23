export const apps = ( state = {}, action ) => {

	const defaults = {
		app: null,
		label: null,
		isEnabled: true,
		icon: null,
		appearance: 'normal',
	}

	switch ( action.type ) {
	case 'REGISTER_APP':
		if ( false === action.config.enabled ) {
			return state
		}
		return {
			[action.key]: {
				...defaults,
				app: action.key,
				label: action.key,
				shouldShowInAppList: true,
				...action.config,
			},
			...state,
		}
	default:
		return state
	}
}

export const appOrder = ( state = [], action ) => {
	switch ( action.type ) {
	case 'REGISTER_APP':
	case 'SET_APP_POSITION': {
		const { key, position = null } = action

		if ( action.config && false === action.config.enabled ) {
			return state
		} else if ( null === position ) {
			const newState = Array.from( state )
			if ( -1 === newState.indexOf( key ) ) {
				newState.push( key )
			}
			return newState

		} else if ( false === position ) {

			const index = state.indexOf( key )
			if ( index ) {
				const newState = Array.from( state )
				delete newState[index]
				return newState
			}

		} else {
			const from = state.indexOf( key )
			const to = position

			const move = function( arr, from, to ) {
				arr.splice( to, 0, arr.splice( from, 1 )[0] )
				return arr
			}

			const newState = Array.from( move( state, from, to ) )
			return newState
		}
		break
	}
	default:
		return state
	}
}

export const counts = ( state = {}, action ) => {
	switch ( action.type ) {
	case 'SET_COUNTS':
		Object.entries( action.counts ).map( ( [ key, value ] ) => {
			state[ key ] = parseInt( value )
		} )
		return { ...state }
	case 'SET_COUNT':
		return {
			...state,
			[action.key]: parseInt( action.count )
		}
	case 'INCREMENT_COUNT':
		return {
			...state,
			[action.key]: state[action.key] + 1
		}
	case 'DECREMENT_COUNT':
		return {
			...state,
			[action.key]: state[action.key] ? state[action.key] - 1 : 0
		}
	default:
		return state
	}
}

export const labels = ( state = [], action ) => {
	switch ( action.type ) {
	case 'SET_LABELS':
		return action.labels
	default:
		return state
	}
}


// New UI
const windowDefaults = {
	origin: [ 1, 0 ], /* top right */
	size: 'normal', /* full sidebar */
	isHidden: false,
	hiddenAppearance: '',
	overlayToolbar: false,
}
export const window = ( state = windowDefaults, action ) => {
	switch ( action.type ) {
	case 'SET_WINDOW':
		return {
			origin: state.origin,
			size: state.size,
			isHidden: state.isHidden,
			hiddenAppearance: state.hiddenAppearance,
			overlayToolbar: state.overlayToolbar,
			...action.config,
		}
	case 'TOGGLE_IS_SHOWING_UI':
		return {
			...state,
			isHidden: ! state.isHidden,
		}
	case 'SET_OVERLAY_TOOLBAR':
		return {
			...state,
			overlayToolbar: action.value ? true : false
		}
	default:
		return state
	}
}

const defaultAppearance = {
	brightness: 'light',
}

export const appearance = ( state = defaultAppearance, action ) => {
	switch ( action.type ) {
	case 'SET_BRIGHTNESS':
		return {
			...state,
			brightness: action.brightness,
		}
	default:
		return state
	}
}

export const shouldShowLabels = ( state = true, action ) => {
	switch ( action.type ) {
	case 'SET_SHOULD_SHOW_LABELS':
		return false /* Temporarily Disable */
	default:
		return state ? true : false
	}
}

// Navigation History
const defaultHistory = { index: 0, entries: [] }

export const history = ( state = defaultHistory, action ) => {
	switch ( action.type ) {
	case 'SET_HISTORY':
		return {
			index: action.index,
			entries: action.entries,
		}
	case 'SET_CURRENT_HISTORY_STATE':
		state.entries[ state.index ].state = action.state
		return state
	default:
		return state
	}
}

export const searchHistory = ( state = [], action ) => {
	switch ( action.type ) {
	case 'SET_SEARCH_HISTORY':
		state.splice( 7, state.length - 7 )
		return [ action.keyword, ...state.filter( item => item !== action.keyword ) ]
	default:
		return state
	}
}

export const shouldReduceMotion = () => false


// Page Sections
export const sections = ( state = {}, action ) => {

	const defaultSection = {
		label: '',
		order: 10,
		location: {},
		render: () => {},
		isEnabled: true,
	}
	const defaultLocation = {
		type: '',
		tab: '',
	}

	switch ( action.type ) {
	case 'REGISTER_SECTION':

		const section = { // eslint-disable-line
			...defaultSection,
			...action.config,
			location: { ...defaultLocation, ...action.config.location },
			handle: action.handle,
		}
		const { handle, location } = section // eslint-disable-line

		// abort
		if ( '' === location ) {
			return state
		}

		return {
			...state,
			[handle]: section,
		}
	default:
		return state
	}
}

export const isAppHidden = ( state = true, action ) => {
	switch ( action.type ) {
	case 'SET_IS_APP_HIDDEN':
		return action.value ? true : false
	default:
		return state
	}
}
