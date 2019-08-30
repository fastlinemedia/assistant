export const reducers = {
	updateQueue( state = {}, action ) {
		switch ( action.type ) {
		case 'SET_UPDATE_QUEUE':
			return { ...action.queue }
		case 'SET_UPDATE_QUEUE_ITEM':
			return { ...state, [ action.item.key ]: action.item }
		case 'SET_UPDATE_QUEUE_ITEMS':
			action.items.map( item => state[ item.key ] = item )
			return state
		default:
			return state
		}
	}
}