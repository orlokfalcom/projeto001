<?php
/**
 * O template da barra lateral (Sidebar)
 *
 * @package Silêncios_da_Saúde
 */

?>

<div id="secondary" class="widget-area" style="display: flex; flex-direction: column; gap: 28px;">
	
	<!-- Widget de Busca -->
	<section class="widget widget_search card glassmorphism" style="padding: 1.5rem;">
		<h3 class="widget-title text-lg font-bold mb-4">Pesquisa de Notícias</h3>
		<?php get_search_form(); ?>
	</section>

	<!-- Widget Recentes -->
	<section class="widget widget_recent_entries card glassmorphism" style="padding: 1.5rem;">
		<h3 class="widget-title text-lg font-bold mb-4">Posts Recentes</h3>
		<ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
			<?php
			$recent_posts = wp_get_recent_posts( array(
				'numberposts' => 5,
				'post_status' => 'publish',
			) );
			
			if ( ! empty( $recent_posts ) ) {
				foreach ( $recent_posts as $post ) {
					echo '<li>';
					echo '<a href="' . esc_url( get_permalink( $post['ID'] ) ) . '" style="line-height:1.4; display:block;">' . esc_html( $post['post_title'] ) . '</a>';
					echo '<span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:2px;">' . get_the_date( '', $post['ID'] ) . '</span>';
					echo '</li>';
				}
			} else {
				echo '<li>Nenhum post recente.</li>';
			}
			?>
		</ul>
	</section>

	<!-- Widget Categorias -->
	<section class="widget widget_categories card glassmorphism" style="padding: 1.5rem;">
		<h3 class="widget-title text-lg font-bold mb-4">Categorias</h3>
		<ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
			<?php
			wp_list_categories( array(
				'title_li' => '',
				'show_count' => true,
			) );
			?>
		</ul>
	</section>

</div>
