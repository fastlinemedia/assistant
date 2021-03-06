import React from 'react'
import { Button, Layout } from 'assistant/ui'
import { __ } from '@wordpress/i18n'
import { Well } from '../well'
import './profile-card.scss'

export const ProfileCard = ( props ) => {
	const { user } = props

	const to = {
		pathname: `/fl-users/user/${user.id}`,
		state: { item: user }
	}

	return (
		<div className="fl-asst-users-profile">
			<Well className="card">
				<div className="avatar-row">
					<div className="avatar">
						<img src={ user.thumbnail }/>
					</div>
					<div className="info">
						<div>
							<div className="username">{user.displayName}</div>
							<div className="email">{user.email}</div>
						</div>
					</div>
				</div>

				<Layout.Row style={ { padding: 'var(--fl-asst-inner-space) 0 0', justifyContent: 'flex-start' } }>
					<Button to={ to }>{__( 'Edit' )}</Button>
					<Button href={ user.url }>{__( 'Author Page' )}</Button>
					<Button href={ user.editUrl }>{__( 'Edit in Admin' )}</Button>
				</Layout.Row>
			</Well>
		</div>
	)
}
