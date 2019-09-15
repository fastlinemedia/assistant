<?php

namespace FL\Assistant\Hooks\Actions;

use FL\Assistant\Data\UserState;


/**
 * Class OnWPBeforeAdminBarRender
 * @package FL\Assistant\Hooks\Actions
 *
 */
class OnWPBeforeAdminBarRender {


	public function __invoke() {
		global $wp_admin_bar;

		$state             = UserState::get();

		$show_toolbar_item = false;
		if ( isset( $state['window'] ) && isset( $state['window']['hiddenAppearance'] ) ) {
			$show_toolbar_item = 'admin_bar' === $state['window']['hiddenAppearance'];
		}

		if ( is_admin() && ! $state['shouldShowInAdmin'] ) {
			return;
		}

		if ( $show_toolbar_item ) {
			$args = [
				'id'    => 'fl_assistant_toggle_ui',
				'title' => __( 'Assistant', 'fl-assistant' ),
			];
			$wp_admin_bar->add_menu( $args );
		}
	}
}
