import React, { useContext } from 'react'
import {
	Button,
	Icon,
	Separator,
	Tab,
	PanelFrame,
	Stack,
	AppContext,
	AppTabButton,
	UIContext,
} from 'components'
import { NotificationsTabButton } from 'apps/fl-notifications'
import { useStore, useDispatch } from 'store'
import './style.scss'

/**
 * Main UI Controller
 */
export const UI = () => {
	const { apps, activeApp } = useStore()
	const { setActiveApp } = useDispatch()
	const { toggleIsShowingUI, renderModals } = useContext( UIContext )

	return (
		<PanelFrame>
			<div className="fl-asst-panel-wrap">

				{ /* Toolbar */ }
				<div className="fl-asst-panel-chrome">
					<div className="fl-asst-panel-chrome-area">
						<NotificationsTabButton />
					</div>
					<div className="fl-asst-app-tabs-wrap">
						<div className="fl-asst-app-tabs-area">
							{ Object.keys( apps ).map( key => {
								const tab = apps[key]
								const isSelected = ( key === activeApp ) ? true : false

								if ( false === tab.enabled || false === tab.showTabIcon ) {
									return null
								}

								if ( 'function' !== typeof tab.icon ) {
									tab.icon = props => <Icon name="default-app" {...props} />
								}

								return (
									<AppTabButton key={key} isSelected={isSelected} onClick={() => setActiveApp( key )} tooltip={tab.label}>
										{tab.icon( { key, isSelected } )}
									</AppTabButton>
								)
							} ) }
						</div>
					</div>
					<div className="fl-asst-panel-chrome-area">
						<Button onClick={toggleIsShowingUI} appearance="icon">
							<Icon name="close" />
						</Button>
					</div>
				</div>

				<Separator isSlim={true} />

				{ /* Screens */ }
				<div className="fl-asst-panel-contents">
					{Object.keys( apps ).map( key => {
						const app = Object.assign( {}, apps[ key ] )
						return ! app.enabled ? null : (
							<AppContext.Provider key={key} value={app}>
								<Tab name={key} isSelected={app.app === activeApp}>
									<Stack>
										{ app.content() }
									</Stack>
								</Tab>
							</AppContext.Provider>
						)
					} )}
				</div>
			</div>

			{ renderModals() }
		</PanelFrame>
	)
}

/**
 * Button To Show/Hide The UI
 */
export const ShowUITrigger = () => {
	const { toggleIsShowingUI } = useContext( UIContext )

	const styles = {
		position: 'fixed',
		right: 0,
		bottom: 0,
		padding: 10,
		zIndex: 999,
	}
	const buttonStyles = {
		borderRadius: '8px'
	}
	return (
		<div style={styles}>
			<Button className="fl-asst-outline-button" onClick={toggleIsShowingUI} style={buttonStyles} isSelected={true}>
				<Icon name="trigger-button"/>
			</Button>
		</div>
	)
}
