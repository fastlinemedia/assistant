import { clearCache, getRequest, postRequest } from 'utils/request'
import { addQueryArgs } from 'utils/url'

/**
 * Returns any array of content for the given type
 * such as posts or terms.
 *
 * @param {String}
 * @param {Object}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getContent = ( type, query, onSuccess, onError ) => {
	switch ( type ) {
	case 'posts':
		return getPosts( query, onSuccess, onError )
	case 'terms':
		return getTerms( query, onSuccess, onError )
	case 'comments':
		return getComments( query, onSuccess, onError )
	case 'users':
		return getUsers( query, onSuccess, onError )
	case 'updates':
		return getUpdates( onSuccess, onError )
	}
}

/**
 * Returns any array of paginated content.
 *
 * @param {String}
 * @param {Object}
 * @param {Number}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getPagedContent = ( type, query, offset = 0, onSuccess, onError ) => {
	let paged = Object.assign( { offset }, query )
	let perPage = 20

	switch ( type ) {
	case 'posts':
		paged.posts_per_page = paged.posts_per_page ? paged.posts_per_page : perPage
		perPage = paged.posts_per_page
		break
	default:
		paged.number = paged.number ? paged.number : perPage
		perPage = paged.number
		break
	}

	return getContent( type, paged, data => {
		const hasMore = data.length && data.length === perPage ? true : false
		onSuccess && onSuccess( data, hasMore )
	}, onError )
}

/**
 * Returns any array of posts.
 *
 * @param {Object}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getPosts = ( query, onSuccess, onError ) => {
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/posts', query ),
		cacheKey: 'posts',
		onSuccess,
		onError,
	} )
}

/**
 * Returns data for a single post.
 *
 * @param {Number}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getPost = ( id, onSuccess, onError ) => {
	return getRequest( {
		route: `fl-assistant/v1/post/${ id }`,
		cacheKey: 'posts',
		onSuccess,
		onError,
	} )
}

/**
 * Returns any array of post terms.
 *
 * @param {Object}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getTerms = ( query, onSuccess, onError ) => {
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/terms', query ),
		cacheKey: 'terms',
		onSuccess,
		onError,
	} )
}

/**
 * Returns data for a single term.
 *
 * @param {Number}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getTerm = ( id, onSuccess, onError ) => {
	return getRequest( {
		route: `fl-assistant/v1/term/${ id }`,
		cacheKey: 'terms',
		onSuccess,
		onError,
	} )
}

/**
 * Returns any array of comments.
 *
 * @param {Object}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getComments = ( query, onSuccess, onError ) => {
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/comments', query ),
		cacheKey: 'comments',
		onSuccess,
		onError,
	} )
}

/**
 * Returns data for a single comment.
 *
 * @param {Number}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getComment = ( id, onSuccess, onError ) => {
	return getRequest( {
		route: `fl-assistant/v1/comment/${ id }`,
		cacheKey: 'comments',
		onSuccess,
		onError,
	} )
}

/**
 * Returns any array of users.
 *
 * @param {Object}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getUsers = ( query, onSuccess, onError ) => {
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/users', query ),
		cacheKey: 'users',
		onSuccess,
		onError,
	} )
}

/**
 * Returns data for a single user.
 *
 * @param {Number}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getUser = ( id, onSuccess, onError ) => {
	return getRequest( {
		route: `fl-assistant/v1/user/${ id }`,
		cacheKey: 'users',
		onSuccess,
		onError,
	} )
}

/**
 * Updates the saved state for the current user.
 *
 * @param {Object}
 * @return {Object}
 */
export const updateUserState = ( state ) => {
	return postRequest( {
		route: 'fl-assistant/v1/current-user/state',
		args: {
			state: JSON.stringify( state ),
		}
	} )
}

/**
 * Returns any array of updates.
 *
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getUpdates = ( onSuccess, onError ) => {
	return getRequest( {
		route: 'fl-assistant/v1/updates',
		cacheKey: 'updates',
		onSuccess,
		onError,
	} )
}

/**
 * Updates a single plugin.
 *
 * @param {String}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const updatePlugin = ( plugin, onSuccess, onError ) => {
	const t = new Date().getTime()
	clearCache( 'updates' )
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/updates/update-plugin', { plugin, t } ),
		cached: false,
		onSuccess,
		onError,
	} )
}

/**
 * Updates a single theme.
 *
 * @param {String}
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const updateTheme = ( theme, onSuccess, onError ) => {
	const t = new Date().getTime()
	clearCache( 'updates' )
	return getRequest( {
		route: addQueryArgs( 'fl-assistant/v1/updates/update-theme', { theme, t } ),
		cached: false,
		onSuccess,
		onError,
	} )
}

/**
 * Returns the number of notifications.
 *
 * @param {Function}
 * @param {Function}
 * @return {Object}
 */
export const getNotificationsCount = ( onSuccess, onError ) => {
	return getRequest( {
		route: 'fl-assistant/v1/notifications/count',
		cached: false,
		onSuccess,
		onError,
	} )
}
