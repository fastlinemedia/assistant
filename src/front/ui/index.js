import React, { useContext } from 'react'
import {
	Button,
	Icon,
	Separator,
	AppTabButton,
	UIContext,
} from 'components'
import { NotificationsAppButton } from 'apps/fl-notifications/button'
import { App, useAppsMenu, AppFrame, FrameSizeButton } from 'system'
import { useWindowSize } from 'utils/window'
import { render } from 'utils/react'
import { useSystemState } from 'store'
import './style.scss'

/**
 * Main UI Controller
 */
export const UI = () => {
	const { order, apps } = useSystemState()
	const {
		activeApp,
		activeAppName,
		setActiveApp,
		setIsShowingUI,
		renderModals,
	} = useContext( UIContext )
	const { width } = useWindowSize()

	const { isShowingAppsMenu, toggleIsShowingAppsMenu } = useAppsMenu()

	const excludedApps = [ 'fl-notifications', 'fl-settings' ]
	const maxTabCount = 400 < width ? 4 : 2
	let count = 0

	return (
		<AppFrame>
			<div className="fl-asst-panel-wrap">

				{ /* Toolbar */ }
				<div className="fl-asst-panel-chrome">
					<div className="fl-asst-panel-chrome-area">
						<NotificationsAppButton isShowingAppsMenu={isShowingAppsMenu} />
					</div>
					<div className="fl-asst-app-tabs-wrap">
						<div className="fl-asst-app-tabs-area">
							{ order.map( key => {
								const app = apps[key]

								if ( 'undefined' === typeof app ) {
									return null
								} else if ( excludedApps.includes( key ) ) {
									return null
								} else if ( count >= maxTabCount ) {
									return null
								} else if ( false === app.enabled ) {
									return null
								}
								count++

								const isSelected = ( key === activeAppName && ! isShowingAppsMenu )

								// Render if it's a JSX literal or function (else null)
								let icon = render( app.icon )
								if ( ! icon ) {
									icon = <Icon name="default-app" />
								}

								return (
									<AppTabButton
										key={key}
										isSelected={isSelected}
										onClick={ () => setActiveApp( key ) }
										tooltip={app.label}
									>{ icon }</AppTabButton>
								)
							} ) }

							<AppTabButton
								appearance="icon"
								isSelected={isShowingAppsMenu}
								onClick={toggleIsShowingAppsMenu}
								tooltip="Apps"
							>
								<Icon name="apps-app" />
							</AppTabButton>
						</div>
					</div>
					<div className="fl-asst-panel-chrome-area">
						<Button onClick={ () => setIsShowingUI( false ) } appearance="icon">
							<Icon name="close" />
						</Button>
					</div>
				</div>

				<Separator isSlim={true} />

				<div className="fl-asst-panel-contents">
					<App key={activeAppName} { ...activeApp } />
				</div>
			</div>

			{ renderModals() }
		</AppFrame>
	)
}
