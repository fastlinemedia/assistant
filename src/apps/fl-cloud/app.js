import React from 'react'
import { Nav } from 'assistant/ui'
import { useCloudState } from 'assistant/data'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgot-password'

import Dashboard from './pages/dashboard'
import Sites from './pages/sites'
import Profile from './pages/profile/index.js'
import Subscription from './pages/subscription'

export default ( { match, history } ) => {
	const { isCloudConnected } = useCloudState()
	const { pathname } = history.location

	if ( ! isCloudConnected && ! pathname.includes( '/auth/' ) ) {
		history.replace( '/fl-cloud/auth/login' )
		return null
	}

	return (
		<Nav.Switch>
			<Nav.Route exact path={ `${match.url}` } component={ Dashboard } />
			<Nav.Route path={ `${match.url}/auth/login` } component={ Login } />
			<Nav.Route path={ `${match.url}/auth/register` } component={ Register } />
			<Nav.Route path={ `${match.url}/auth/forgot-password` } component={ ForgotPassword } />
			<Nav.Route path={ `${match.url}/sites` } component={ Sites } />
			<Nav.Route path={ `${match.url}/profile` } component={ Profile } />
			<Nav.Route path={ `${match.url}/subscription` } component={ Subscription } />
		</Nav.Switch>
	)
}
