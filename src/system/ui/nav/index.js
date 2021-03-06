import React, { useContext } from 'react'
import { Nav as FLUID_Nav } from 'fluid/ui'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from 'ui'
import './style.scss'

const Nav = { ...FLUID_Nav }

Nav.Tabs = ( { tabs = [], ...rest } ) => {
	const { location, history } = useContext( Nav.Context )
	return (
		<>
			<Button.Group
				appearance="tabs"
				shouldHandleOverflow={ true }
				role="tablist"
				{ ...rest }
			>
				{ tabs.map( ( tab, i ) => {
					const { showButton = true, path, label, ...rest } = tab
					delete rest.component
					delete rest.exact
					return showButton && (
						<Button
							key={ i }
							isSelected={ location.pathname === path }
							onClick={ () => history.replace( path, {} ) }
							{ ...rest }
						>
							{ label }
						</Button>
					)
				} ) }
			</Button.Group>
		</>
	)
}
Nav.Tabs.displayName = 'Nav.Tabs'

Nav.TabsToolbar = ( { tabs } ) => {
	const history = useHistory()
	const location = useLocation()
	return (
		<div className="fl-asst-tabs-toolbar">
			<Button.Group
				appearance="tabs"
				shouldHandleOverflow={ true }
				role="tablist"
			>
				<Nav.BackButton excludeFromMenu={ true } />

				{ Object.entries( tabs ).map( ( [ , tab ], i ) => {
					const { isVisible, label, path } = tab
					if ( undefined !== isVisible && ! isVisible ) {
						return
					}
					return (
						<Button key={ i }
							onClick={ () => history.replace( path, location.state ) }
							isSelected={ path === location.pathname }
						>
							{ label }
						</Button>
					)
				} ) }
			</Button.Group>
		</div>
	)
}

Nav.CurrentTab = ( { tabs = [] } ) => {
	return (
		<Nav.Switch>
			{ tabs.map( ( tab, i ) => {
				const { exact = false, path, component } = tab
				return (
					<Nav.Route key={ i } exact={ exact } path={ path } component={ component }  />
				)
			} )}
		</Nav.Switch>
	)
}
Nav.CurrentTab.displayName = 'Nav.CurrentTab'

export { Nav }

export default Nav
