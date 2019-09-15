<?php

namespace FL\Assistant\RestApi\Controllers;

use FL\Assistant\Pagination\CommentsPaginator;
use FL\Assistant\System\Contracts\ControllerAbstract;
use WP_REST_Server;

/**
 * REST API logic for comments.
 */
class CommentsController extends ControllerAbstract {

	/**
	 * Register routes.
	 */
	public function register_routes() {
		$this->route(
			'/comments', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'comments' ],
					'permission_callback' => function () {
						return current_user_can( 'moderate_comments' );
					},
				],
			]
		);

		$this->route(
			'/comments/count', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'comments_count' ],
					'permission_callback' => function () {
						return current_user_can( 'moderate_comments' );
					},
				],
			]
		);

		$this->route(
			'/comments/(?P<id>\d+)', [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'comment' ],
					'args'                => [
						'id' => [
							'required' => true,
							'type'     => 'number',
						],
					],
					'permission_callback' => function () {
						return current_user_can( 'moderate_comments' );
					},
				],
				[
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => [ $this, 'update_comment' ],
					'args'                => [
						'id'     => [
							'required' => true,
							'type'     => 'number',
						],
						'action' => [
							'required' => true,
							'type'     => 'string',
						],
					],
					'permission_callback' => function () {
						return current_user_can( 'moderate_comments' );
					},
				],
			]
		);
	}

	/**
	 * Returns an array of comments and related data.
	 */
	public function comments( $request ) {
		$params     = $request->get_params();
		$posts      = $this->container()->service( 'posts' );
		$post_types = array_keys( $posts->get_types() );
		$args       = array_merge( [ 'post_type' => $post_types ], $params );

		$paginator = new CommentsPaginator();
		$pager     = $paginator->query( $args, [ $this, 'get_comment_response_data' ] );

		return rest_ensure_response( $pager->to_array() );
	}

	/**
	 * Returns the number of comments found given
	 * the current args.
	 */
	public function comments_count( $request ) {
		$counts = wp_count_comments();

		return rest_ensure_response(
			[
				'approved' => $counts->approved,
				'pending'  => $counts->moderated,
				'spam'     => $counts->spam,
				'trash'    => $counts->trash,
				'total'    => $counts->total_comments,
			]
		);
	}

	/**
	 * Returns data for a single comment.
	 */
	public function comment( $request ) {
		$id       = $request->get_param( 'id' );
		$comment  = get_comment( $id );
		$response = $this->get_comment_response_data( $comment );

		return rest_ensure_response( $response );
	}

	/**
	 * Returns an array of response data for a single comment.
	 */
	public function get_comment_response_data( $comment ) {
		$post = get_post( $comment->comment_post_ID );
		$date = mysql2date( get_option( 'date_format' ), $comment->comment_date );
		$time = mysql2date( get_option( 'time_format' ), $comment->comment_date );

		return [
			'approved'    => $comment->comment_approved ? true : false,
			'author'      => $comment->comment_author,
			'authorEmail' => $comment->comment_author_email,
			'authorIP'    => $comment->comment_author_IP,
			'content'     => $comment->comment_content,
			'date'        => $date,
			'editUrl'     => admin_url( 'comment.php?action=editcomment&c=' ) . $comment->comment_ID,
			'id'          => $comment->comment_ID,
			'meta'        => $comment->comment_author . ' - ' . $date,
			'postId'      => $post->ID,
			'postTitle'   => $post->post_title,
			'spam'        => 'spam' === $comment->comment_approved,
			'time'        => $time,
			'thumbnail'   => get_avatar_url( $comment->comment_author_email ),
			'title'       => strip_tags( $comment->comment_content ),
			'trash'       => 'trash' === $comment->comment_approved,
			'url'         => get_comment_link( $comment ),
		];
	}

	/**
	 * Updates a single comment based on the specified action.
	 */
	public function update_comment( $request ) {
		$id      = $request->get_param( 'id' );
		$action  = $request->get_param( 'action' );
		$comment = get_comment( $id );

		switch ( $action ) {
			case 'approve':
				wp_set_comment_status( $comment, 'approve' );
				break;
			case 'unapprove':
				wp_set_comment_status( $comment, 'hold' );
				break;
			case 'spam':
				wp_spam_comment( $comment );
				break;
			case 'unspam':
				wp_unspam_comment( $comment );
				break;
			case 'trash':
				if ( ! EMPTY_TRASH_DAYS ) {
					wp_delete_comment( $comment );
				} else {
					wp_trash_comment( $comment );
				}
				break;
			case 'untrash':
				wp_untrash_comment( $comment );
				break;
			case 'content':
				wp_update_comment(
					[
						'comment_ID'      => $id,
						'comment_content' => $request->get_param( 'content' ),
					]
				);
				break;
		}

		return rest_ensure_response(
			[
				'success' => true,
			]
		);
	}
}

