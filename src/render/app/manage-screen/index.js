import React from 'react'
import { __ } from '@wordpress/i18n'
import { useHistory } from 'react-router-dom'
import { Page, Icon, Button, Form, Layout, Env } from 'assistant/ui'
import { useAppList, useSystemState, getSystemActions } from 'assistant/data'
import './style.scss'

const ManageScreen = () => {
	const apps = useAppList()
	const history = useHistory()
	const goToRoot = () => history.go( -history.length )

	return (
		<Page
			title={ __( 'Apps' ) }
			shouldShowBackButton={ false }
			icon={ <Icon.Apps context="sidebar" /> }
		>
			<Form>
				<Page.Section>

					<p style={ { marginTop: 0 } }>{__( 'You can reorder the apps below. The top 5 will appear in the sidebar for quick access.' )}</p>

					<ul className="fl-asst-manage-app-order-list">
						<li>
							<Button appearance="transparent" onClick={ goToRoot } style={ { justifyContent: 'flex-start' } }>
								<span className="fl-asst-item-icon">
									<Icon.Home />
								</span>
								{__( 'Home' )}
							</Button>
							<span className="fl-asst-item-reorder-buttons" />
						</li>
						{ apps.map( app => {
							const {
								handle,
								label,
								icon,
								isFirst,
								isLast,
								moveUp,
								moveDown,
							} = app
							const location = {
								pathname: `/${handle}`,
								state: app,
							}

							return (
								<li key={ handle }>
									<Button
										to={ location }
										appearance="transparent"
										style={ {
											flex: '1 1 auto',
											marginRight: 'auto',
											justifyContent: 'flex-start',
										} }
									>
										<span className="fl-asst-item-icon">
											{ icon ? icon( { context: 'sidebar' } ) : <Icon.Placeholder /> }
										</span>
										{label}
									</Button>

									<span className="fl-asst-item-reorder-buttons">
										<span className="fl-asst-button-space">
											{ ! isFirst && (
												<Button
													onClick={ moveUp }
													appearance="transparent"
													title={ __( 'Move Up' ) }
												>
													<Icon.UpCaret />
												</Button>
											)}
										</span>
										<span className="fl-asst-button-space">
											{ ! isLast && (
												<Button
													onClick={ moveDown }
													appearance="transparent"
													title={ __( 'Move Down' ) }
												>
													<Icon.DownCaret />
												</Button>
											)}
										</span>
									</span>
								</li>
							)
						} )}
					</ul>
				</Page.Section>

				<UIColorPreferences />
			</Form>

		</Page>
	)
}

const UIColorPreferences = () => {
	const { application } = Env.useEnvironment()
	const { appearance, window } = useSystemState()
	const { setBrightness, setWindow } = getSystemActions()
	const { origin } = window

	const origins = {
		'0-0': __( 'Top Left' ),
		'0-1': __( 'Bottom Left' ),
		'1-0': __( 'Top Right' ),
		'1-1': __( 'Bottom Right' )
	}
	const onChangeOrigin = value => {
		const v = value.split( '-' )
		setWindow( {
			...window,
			origin: [ parseInt( v[0] ), parseInt( v[1] ) ]
		} )
	}
	return (
		<Form.Section label={ __( 'Preferences' ) }>
			{ 'beaver-builder' !== application && (
				<Form.Item label={ __( 'UI Brightness' ) } labelPlacement="beside">

					<Layout.Row gap={ 5 }>
						<Button
							isSelected={ 'light' === appearance.brightness }
							onClick={ () => setBrightness( 'light' ) }
						>
							<Icon.Brightness />&nbsp;&nbsp;{__( 'Light' )}
						</Button>

						<Button
							isSelected={ 'dark' === appearance.brightness }
							onClick={ () => setBrightness( 'dark' ) }
						>
							<Icon.Moon />&nbsp;&nbsp;{__( 'Dark' )}
						</Button>
					</Layout.Row>
				</Form.Item>
			)}

			<Form.Item label={ __( 'Anchor Pane To' ) } labelPlacement="beside">
				<Form.SelectItem value={ origin.join( '-' ) } options={ origins } onChange={ onChangeOrigin } />
			</Form.Item>
		</Form.Section>
	)
}

export default ManageScreen
