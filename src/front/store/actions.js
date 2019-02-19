export const registerApp = ( key, config ) => {
	return {
		type: 'REGISTER_APP',
		key,
		config,
	}
}

export const setActiveApp = ( key ) => {
	return {
		type: 'SET_ACTIVE_APP',
		key,
	}
}

export const hydrateAppState = ( app, state ) => {
	return {
		type: 'HYDRATE_APP_STATE',
		app,
		state,
	}
}

export const clearAppState = ( app ) => {
	return {
		type: 'CLEAR_APP_STATE',
		app,
	}
}

export const setAppState = ( app, key, value ) => {
	return {
		type: 'SET_APP_STATE',
		app,
		key,
		value,
	}
}

export const setIsShowingUI = ( show ) => {
	return {
		type: 'SET_SHOW_UI',
		show,
	}
}

export const setPanelPosition = position => {
	return {
		type: 'SET_PANEL_POSITION',
		position,
	}
}

export const togglePanelPosition = () => {
	return {
		type: 'TOGGLE_PANEL_POSITION'
	}
}

export const setAppFrameSize = size => {
	return {
		type: 'SET_APP_FRAME_SIZE',
		size
	}
}

export const setShouldReduceMotion = shouldReduce => {
	return {
		type: 'SET_SHOULD_REDUCE_MOTION',
		shouldReduce,
	}
}

export const setIsShowingAppsMenu = isShowing => {
	return {
		type: 'SET_IS_SHOWING_APPS_MENU',
		isShowing,
	}
}

export const hideAppsMenu = () => {
	return {
		type: 'SET_IS_SHOWING_APPS_MENU',
		isShowing: false
	}
}
