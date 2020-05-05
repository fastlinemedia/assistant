import React, { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Config from './config'

export const App = ( { children, ...rest } ) => {
	return (
		<div className="fl-asst-app-root" { ...rest }>
			{children}
		</div>
	)
}

App.defaults = {
	app: null,
	handle: null,
	isAppRoot: false
}

/**
 * Context
 */
App.Context = createContext( App.defaults )
App.Context.displayName = 'App.Context'

/**
 * Provider
 */
App.Provider = ( { children } ) => {
	const location = useLocation()
	const parts = location.pathname.split( '/' )
	const name = parts[1]
	const isAppRoot = 2 >= parts.length

	const context = {
		...App.defaults,
		handle: name,
		app: name,
		isAppRoot
	}

	return (
		<App.Context.Provider value={ context }>
			{children}
		</App.Context.Provider>
	)
}
App.Provider.displayName = 'App.Provider'

App.useApp = () => useContext( App.Context )

App.Config = Config
App.Config.displayName = 'App.Config'
