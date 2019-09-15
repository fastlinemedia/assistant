<?php

namespace FL\Assistant\RestApi\Controllers;

use Exception;
use FL\Assistant\Data\UserState;
use FL\Assistant\System\Contracts\ControllerAbstract;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

/**
 * REST API logic for users.
 */
final class UsersController extends ControllerAbstract {

	/**
	 * Register routes.
	 */
	public function register_routes() {
		$this->route(
			'/users', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'users' ],
					'permission_callback' => function () {
						return current_user_can( 'list_users' );
					},
				],
			]
		);

		$this->route(
			'/users/count', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'users_count' ],
					'permission_callback' => function () {
						return current_user_can( 'list_users' );
					},
				],
			]
		);

		$this->route(
			'/users/(?P<id>\d+)', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'user' ],
					'args'                => [
						'id' => [
							'required' => true,
							'type'     => 'number',
						],
					],
					'permission_callback' => function () {
						return current_user_can( 'list_users' );
					},
				],
			]
		);

		$this->route(
			'/current-user/state', [
				[
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => [ $this, 'update_user_state' ],
					'args'                => [
						'state' => [
							'required' => true,
							'type'     => 'json',
						],
					],
					'permission_callback' => function () {
						return ! ! wp_get_current_user()->ID;
					},
				],
			]
		);
	}

	/**
	 * Returns an array of users and related data.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return mixed|WP_REST_Response
	 */
	public function users( WP_REST_Request $request ) {

		$params = $request->get_params();
		$pager  = $this->service( 'users' )->paginate( $params );

		return rest_ensure_response( $pager->to_array() );
	}

	/**
	 * Returns an array of counts by user role.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return mixed|WP_REST_Response
	 * @throws Exception
	 */
	public function users_count( WP_REST_Request $request ) {

		$response = $this->service( 'users' )->counts_by_user_role();

		return rest_ensure_response( $response );
	}

	/**
	 * Returns data for a single user.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return mixed|WP_REST_Response
	 * @throws Exception
	 */
	public function user( WP_REST_Request $request ) {
		$id   = $request->get_param( 'id' );
		$user = $this->service( 'users' )->find( $id );

		return rest_ensure_response( $user->to_array() );
	}

	/**
	 * Updates the saved state for a user.
	 */
	public function update_user_state( WP_REST_Request $request ) {

		$state = $request->get_param( 'state' );
		UserState::update( $state );

		return rest_ensure_response( UserState::get() );
	}
}
