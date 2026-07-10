<?php
/**
 * O template para exibir resultados de busca
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-8 text-center">
		<h1 class="page-title text-4xl font-bold tracking-tight text-text-dark dark:text-text-light mb-2">
			<?php
			/* translators: %s: query de busca. */
			printf( esc_html__( 'Resultados de busca para: %s', 'silencios-da-saude' ), '<span>' . get_search_query() . '</span>' );
			?>
		</h1>
		<p class="text-lg text-text-muted dark:text-text-light/70">
			<?php esc_html_e( 'Confira os artigos e páginas encontrados correspondentes aos termos digitados.', 'silencios-da-saude' ); ?>
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<!-- Listagem de Resultados (Esquerda) -->
		<div class="md:col-span-2">
			<?php if ( have_posts() ) : ?>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<?php
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', 'search' );
					endwhile;
					?>
				</div>

				<div class="pagination mt-8 flex justify-center gap-4">
					<?php
					the_posts_pagination( array(
						'prev_text' => '&larr; ' . __( 'Anterior', 'silencios-da-saude' ),
						'next_text' => __( 'Próximo', 'silencios-da-saude' ) . ' &rarr;',
					) );
					?>
				</div>

			<?php else : ?>
				<div class="no-posts-found py-12 text-center bg-card dark:bg-card-dark rounded-2xl border border-white/10 p-8 glassmorphism shadow-sm" style="max-width: 500px; margin: 0 auto;">
					<div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
					<h3 class="text-xl font-semibold mb-2"><?php esc_html_e( 'Nenhum resultado encontrado', 'silencios-da-saude' ); ?></h3>
					<p class="mb-6"><?php esc_html_e( 'Desculpe, mas não encontramos nenhuma página correspondente ao termo digitado. Tente pesquisar novamente por outras palavras.', 'silencios-da-saude' ); ?></p>
					<?php get_search_form(); ?>
				</div>
			<?php endif; ?>
		</div>

		<!-- Sidebar (Direita) -->
		<aside class="md:col-span-1">
			<?php get_sidebar(); ?>
		</aside>
	</div>
</main>

<?php
get_footer();
