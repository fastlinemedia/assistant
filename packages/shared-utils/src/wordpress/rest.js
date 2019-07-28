import Promise from 'promise'
import localforage from 'localforage'
import {setup} from 'axios-cache-adapter'

const {apiRoot, nonce} = FL_ASSISTANT_CONFIG


/**
 * Create `axios` instance
 * with pre-configured `axios-cache-adapter`
 * using a `localforage` store
 *
 * @type {AxiosInstance}
 */
const http = setup({
    baseURL: apiRoot,
    headers: {
        common: {
            'X-WP-Nonce': nonce.api
        }
    },
    cache: {
        // Changing this to true will send alot of output to the console
        debug: false,
        // Set cache timeout
        maxAge: 5 * 60 * 1000,
        // DO NOT exclude cache requests with query params.
        exclude: {query: false},
        // Setup localForage store.
        store: localforage.createInstance({
            // Attempt IndexDB then fall back to LocalStorage
            driver: [
                localforage.INDEXEDDB,
                localforage.LOCALSTORAGE,
            ],
            // Prefix all storage keys to prevent conflicts
            name: 'fl-assistant-cache-rest'
        })
    },
})

export const getWpRest = () => {
    return {
        posts,
        terms,
        users,
        attachments,
        comments,
        updates,
        search,
        getPagedContent,
        getContent
    }
}

/**
 * Posts
 * @type {{findWhere(*=): *, findById(*): *, create(*=): *, update(*, *, *=): *}}
 */
const posts = () => {
    return {
        /**
         * Get hierarchical posts by query
         * @param params
         * @param config
         * @returns {Promise<AxiosResponse<T>>}
         */
        hierarchical(params, config = {}) {
            config.params = params;
            return http.get('fl-assistant/v1/posts/hierarchical', config)
        },
        /**
         * Find post by ID
         * @param id
         * @param config
         * @returns {Promise<*>}
         */
        findById(id, config = {}) {
            return http.get(`fl-assistant/v1/post/${id}`, config);
        },
        /**
         * Find posts by query
         * @param params
         * @param config
         */
        findWhere(params, config = {}) {
            config.params = params
            return http.get('fl-assistant/v1/posts', config)
        },
        /**
         * Create a new post
         * @param data
         * @param config
         */
        create(data = {}, config = {}) {
            return http.post('fl-assistant/v1/post', data, config)
        },
        /**
         * Update a post
         * @param id
         * @param action
         * @param data
         * @param config
         */
        update(id, action, data = {}, config = {}) {
            data.action = action
            return http.post(`fl-assistant/v1/post/${id}`, data, config)
        }
    }
}

/**
 *
 */
const users = () => {
    return {
        /**
         * Find WordPress user by ID
         * @param id
         * @param config
         */
        findById(id, config = {}) {
            return http.get(`fl-assistant/v1/user/${id}`, config)
        },
        /**
         * Find WordPress users by query
         * @param params
         * @param config
         */
        findWhere(params, config = {}) {
            config.params = params
            return http.get('fl-assistant/v1/users', config)
        },
        /**
         * Update current WordPress user state.
         * @param state
         * @param config
         */
        updateState(state, config = {}) {
            return http.post('fl-assistant/v1/current-user/state', {state}, config = {})
        }
    }
}

/**
 * Methods related to terms
 */
const terms = () => {
    return {
        /**
         * Get hierarchical list of terms by query
         * @param params
         * @param config
         */
        hierarchical(params, config = {}) {
            config.params = params
            return http.get('fl-assistant/v1/terms/hierarchical', config)
        },
        /**
         * Find term by ID
         * @param id
         * @returns {Promise<AxiosResponse<T>>}
         */
        findById(id) {
            return http.get(`fl-assistant/v1/term/${id}`);
        },
        /**
         * Create a new term
         * @param data
         * @returns {Promise<AxiosResponse<T>>}
         */
        create(data = {}) {
            return http.post('fl-assistant/v1/term', data)
        },
        /**
         * Update a term
         * @param id
         * @param action
         * @param data
         * @returns {Promise<AxiosResponse<T>>}
         */
        update(id, action, data = {}) {
            return http.post(`fl-assistant/v1/term/${id}`, {
                action,
                data,
            });
        }
    }
}

/**
 * Methods related to comments
 * @type {{findWhere(*=): *, findById(*): *, update(*, *, *=): *}}
 */
const comments = () => {

    return {
        /**
         * Find comment by ID
         * @param id
         * @returns {Promise<AxiosResponse<T>>}
         */
        findById(id) {
            return http.get(`fl-assistant/v1/comment/${id}`)
        },
        /**
         * Find comment by query
         * @param params
         * @returns {Promise<AxiosResponse<T>>}
         */
        findWhere(params) {
            return http.get('fl-assistant/v1/comments', {params});
        },
        /**
         * Update a comment
         *
         * @param id
         * @param action
         * @param data
         * @returns {Promise<AxiosResponse<T>>}
         */
        update(id, action, data = {}) {
            return http.post(`fl-assistant/v1/comment/${id}`, {
                action,
                ...data,
            });
        }
    }
}

/**
 *
 * @type {{findWhere(*=): *, findById(*): *, update(*, *, *=): *}}
 */
const attachments = () => {
    return {
        /**
         * Returns data for a single attachment.
         */
        findById(id) {
            return http.get(`fl-assistant/v1/attachment/${id}`)
        },
        /**
         * Returns an array of attachments.
         */
        findWhere(params) {
            return http.get('fl-assistant/v1/attachments', {params})
        },
        /**
         * Updates a single attachment. See the update_attachment
         * REST method for a list of supported actions.
         */
        update(id, action, data = {}) {
            return http.post(`fl-assistant/v1/attachment/${id}`, {
                action,
                data,
            })
        }
    }
}

/**
 * Methods related to updates
 * @returns {Promise<AxiosResponse<T>>|{findWhere(*): *}}
 */
const updates = () => {
    return {
        /**
         * Find updates based on query params
         *
         * @param params
         * @returns {Promise<AxiosResponse<T>>}
         */
        findWhere(params) {
            return http.get('fl-assistant/v1/updates', {params})
        }
    }
}

/**
 * Returns any array of content for the given type such as posts or terms.
 *
 * @param type
 * @param params
 * @param config
 * @returns {*|Promise<*>|*|Promise<*>|Promise<*>|*}
 */
const getContent = (type, params, config = {}) => {
    switch (type) {
        case 'posts':
            return posts().findWhere(params, config)
        case 'terms':
            return terms().findWhere(params, config)
        case 'attachments':
            return attachments().findWhere(params, config)
        case 'comments':
            return comments().findWhere(params, config)
        case 'users':
            return users().findWhere(params, config)
        case 'updates':
            return updates().findWhere(params, config)
    }
}

/**
 * Returns any array of paginated content.
 *
 * @param type
 * @param params
 * @param offset
 * @param config
 */
const getPagedContent = (type, params, offset = 0, config = {}) => {
    let paged = Object.assign({offset}, params)
    let perPage = 20

    switch (type) {
        case 'posts':
        case 'attachments':
            paged.posts_per_page = paged.posts_per_page ? paged.posts_per_page : perPage
            perPage = paged.posts_per_page
            break
        default:
            paged.number = paged.number ? paged.number : perPage
            perPage = paged.number
            break
    }

    return new Promise((resolve, reject) => {
        getContent(type, paged, config)
            .then((response) => {
                const data = response.data;
                const hasMore = data.length && data.length === perPage ? true : false
                resolve({data, hasMore})
            }).catch(reject)
    });
}

/**
 * Search for pages, posts, users, or comments.
 *
 * Note that because search issues a POST request to the API, it will not be cached in the browser.
 *
 * @param keyword
 * @param routes
 * @param config
 * @returns {Promise<AxiosResponse<T>>}
 */
const search = (keyword, routes, config = {}) => {
    return http.post('fl-assistant/v1/search', {
        keyword,
        routes
    }, config)
}


