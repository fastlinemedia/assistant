<?php


namespace FL\Assistant\Providers;


use FL\Assistant\Hooks\Actions\OnEditUserProfile;
use FL\Assistant\Hooks\Actions\OnEnqueueScripts;
use FL\Assistant\Hooks\Actions\OnPersonalOptionsUpdate;
use FL\Assistant\Hooks\Actions\OnWPBeforeAdminBarRender;
use FL\Assistant\Hooks\Actions\OnBeforeDeletePost;
use FL\Assistant\Hooks\Actions\OnDeleteTerm;
use FL\Assistant\Hooks\Filters\OnHeartbeatReceived;
use FL\Assistant\System\Contracts\ServiceProviderAbstract;

class HooksServiceProvider extends ServiceProviderAbstract {

	/**
	 * @throws \FL\Assistant\System\Container\InjectionException
	 */
	public function bootstrap() {

		register_activation_hook(
			FL_ASSISTANT_FILE, function () {
				do_action( 'fl_assistant_activate' );
			}
		);

		$this->actions();
		$this->filters();
	}

	public function actions() {

		// Enqueue Assistant frontend
		$enqueue_scripts = $this->injector->make( OnEnqueueScripts::class );
		add_action( 'wp_enqueue_scripts', $enqueue_scripts );
		add_action( 'admin_enqueue_scripts', $enqueue_scripts );

		// setup user profile meta fields - shows on YOUR profile, not on others.
		add_action( 'show_user_profile', $this->injector->make( OnEditUserProfile::class ) );
		add_action( 'personal_options_update', $this->injector->make( OnPersonalOptionsUpdate::class ) );

		// Add Assistant Toolbar Item
		add_action( 'wp_before_admin_bar_render', $this->injector->make( OnWPBeforeAdminBarRender::class ) );

		// post actions
		add_action( 'before_delete_post', $this->injector->make( OnBeforeDeletePost::class ) );

		// taxonomy actions
		add_action( 'delete_term', $this->injector->make( OnDeleteTerm::class ) );

	}

	public function filters() {

		// setup heartbeat
		add_filter( 'heartbeat_received', $this->injector->make( OnHeartbeatReceived::class ), 11, 2 );
	}
}
