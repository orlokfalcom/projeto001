<?php
/**
 * Template part para exibir posts em grades e listas
 *
 * @package Silêncios_da_Saúde
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'card glassmorphism library-card' ); ?> style="display: flex; flex-direction: column; justify-content: space-between; min-height: 380px;">
	<div>
		<!-- Thumbnail do post ou Gradiente premium de Fallback -->
		<div style="width: 100%; height: 160px; border-radius: 12px; overflow: hidden; margin-bottom: 16px; background: linear-gradient(135deg, var(--pink-light) 0%, var(--purple-light) 100%);">
			<?php if ( has_post_thumbnail() ) : ?>
				<?php the_post_thumbnail( 'medium_large', array( 'style' => 'width: 100%; height: 100%; object-fit: cover;' ) ); ?>
			<?php endif; ?>
		</div>

		<!-- Metadados / Categoria -->
		<div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px; font-size: 0.8rem; color: var(--text-muted);">
			<span><?php echo get_the_date(); ?></span>
			<span>&bull;</span>
			<span style="font-weight: 700; text-transform: uppercase; color: var(--accent);">
				<?php the_category( ', ' ); ?>
			</span>
		</div>

		<!-- Título -->
		<h2 class="text-xl font-bold mb-2 resource-title" style="font-size: 1.15rem; line-height: 1.3;">
			<a href="<?php the_permalink(); ?>" style="color: var(--heading-color);">
				<?php the_title(); ?>
			</a>
		</h2>

		<!-- Resumo (Excerpt) -->
		<div class="text-muted dark:text-text-light/70" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">
			<?php the_excerpt(); ?>
		</div>
	</div>

	<!-- Rodapé do Card -->
	<div style="border-top: 1px solid var(--border-color); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
		<span style="font-size: 0.8rem; color: var(--text-muted);">
			Por: <?php the_author(); ?>
		</span>
		<a href="<?php the_permalink(); ?>" class="btn btn-outline" style="padding: 4px 14px; font-size: 0.85rem;">
			Ler Mais &rarr;
		</a>
	</div>
</article>
