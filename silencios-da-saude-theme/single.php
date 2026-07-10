<?php
/**
 * O template para exibir posts individuais
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<?php
	while ( have_posts() ) :
		the_post();
		?>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Artigo Principal (Esquerda) -->
			<div class="md:col-span-2 card glassmorphism" style="padding: 2.5rem;">
				
				<!-- Metadados -->
				<header class="entry-header mb-6">
					<div style="display: flex; gap: 8px; align-items: center; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">
						<span><?php echo get_the_date(); ?></span>
						<span>&bull;</span>
						<span>Por: <?php the_author(); ?></span>
						<span>&bull;</span>
						<span style="font-weight: 700; text-transform: uppercase; color: var(--accent);">
							<?php the_category( ', ' ); ?>
						</span>
					</div>
					
					<h1 class="entry-title text-3xl font-extrabold tracking-tight mb-4" style="line-height: 1.2;">
						<?php the_title(); ?>
					</h1>
				</header>

				<!-- Imagem de Destaque -->
				<?php if ( has_post_thumbnail() ) : ?>
					<div class="post-thumbnail-wrapper mb-6" style="border-radius: 16px; overflow: hidden; width: 100%; max-height: 350px;">
						<?php the_post_thumbnail( 'large', array( 'style' => 'width: 100%; height: auto; object-fit: cover;' ) ); ?>
					</div>
				<?php endif; ?>

				<!-- Conteúdo do Artigo -->
				<div class="entry-content text-text-color dark:text-text-light/90 leading-relaxed" style="font-size: 1.05rem;">
					<?php
					the_content();
					
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Páginas:', 'silencios-da-saude' ),
						'after'  => '</div>',
					) );
					?>
				</div>

				<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

				<!-- BOTÕES DE COMPARTILHAMENTO SOCIAL -->
				<div class="social-share-box" style="margin-top: 2rem;">
					<h4 class="font-bold mb-3" style="font-size: 0.95rem;">Compartilhar este artigo:</h4>
					<div style="display: flex; gap: 10px; flex-wrap: wrap;">
						<!-- WhatsApp -->
						<a href="https://api.whatsapp.com/send?text=<?php echo rawurlencode( get_the_title() . ' ' . get_permalink() ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.8rem; background: rgba(37, 211, 102, 0.1); border-color: rgba(37, 211, 102, 0.2);">
							🟢 WhatsApp
						</a>
						<!-- Twitter / X -->
						<a href="https://twitter.com/intent/tweet?text=<?php echo rawurlencode( get_the_title() ); ?>&url=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.8rem; background: rgba(0, 0, 0, 0.1); border-color: rgba(0, 0, 0, 0.2);">
							⚫ Twitter (X)
						</a>
						<!-- Facebook -->
						<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.8rem; background: rgba(24, 119, 242, 0.1); border-color: rgba(24, 119, 242, 0.2);">
							🔵 Facebook
						</a>
					</div>
				</div>

				<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

				<!-- SEÇÃO DE COMENTÁRIOS NATIVOS -->
				<div class="comments-section" style="margin-top: 2rem;">
					<?php
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
					?>
				</div>

			</div>

			<!-- Sidebar (Direita) -->
			<aside class="md:col-span-1">
				<?php get_sidebar(); ?>
			</aside>
		</div>

		<?php
	endwhile;
	?>
</main>

<?php
get_footer();
