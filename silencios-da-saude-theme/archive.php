<?php
/**
 * O template para exibir páginas de arquivos (categorias, tags, datas, etc.)
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-8 text-center">
		<?php
		the_archive_title( '<h1 class="page-title text-4xl font-bold tracking-tight text-text-dark dark:text-text-light mb-2">', '</h1>' );
		the_archive_description( '<div class="archive-description text-lg text-text-muted dark:text-text-light/70 max-w-2xl mx-auto">', '</div>' );
		?>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<!-- Listagem de Posts (Esquerda) -->
		<div class="md:col-span-2">
			<?php if ( have_posts() ) : ?>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<?php
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', get_post_format() );
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
				<div class="no-posts-found py-12 text-center bg-card dark:bg-card-dark rounded-2xl border border-white/10 p-8 glassmorphism shadow-sm">
					<h3 class="text-xl font-semibold mb-2"><?php esc_html_e( 'Nenhum post encontrado', 'silencios-da-saude' ); ?></h3>
					<p><?php esc_html_e( 'Desculpe, mas não encontramos posts nesta categoria.', 'silencios-da-saude' ); ?></p>
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
