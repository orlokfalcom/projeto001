<?php
/**
 * O template para exibir comentários
 *
 * @package Silêncios_da_Saúde
 */

if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<h3 class="comments-title font-bold mb-6 text-xl">
			<?php
			$comments_number = get_comments_number();
			if ( '1' === $comments_number ) {
				printf( esc_html__( '1 Comentário neste artigo', 'silencios-da-saude' ) );
			} else {
				printf(
					esc_html( _n( '%1$s Comentário', '%1$s Comentários', $comments_number, 'silencios-da-saude' ) ),
					number_format_i18n( $comments_number )
				);
			}
			?>
		</h3>

		<ul class="comment-list" style="list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 2rem;">
			<?php
			wp_list_comments( array(
				'style'      => 'ul',
				'short_ping' => true,
				'avatar_size' => 42,
			) );
			?>
		</ul>

		<?php
		the_comments_navigation();

		// Se os comentários estiverem fechados, deixar um aviso
		if ( ! comments_open() ) :
			?>
			<p class="no-comments text-muted text-sm"><?php esc_html_e( 'Os comentários estão fechados.', 'silencios-da-saude' ); ?></p>
			<?php
		endif;

	endif; // Check for have_comments().

	// Exibir formulário de envio de comentários adaptado ao design
	comment_form( array(
		'title_reply'        => __( 'Deixe um Comentário', 'silencios-da-saude' ),
		'title_reply_to'     => __( 'Deixe uma Resposta para %s', 'silencios-da-saude' ),
		'class_submit'       => 'btn btn-primary',
		'submit_button'      => '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>',
		'comment_field'      => '<div class="comment-form-comment mb-4"><label for="comment" class="sr-only">' . _x( 'Comentário', 'noun', 'silencios-da-saude' ) . '</label><textarea id="comment" name="comment" class="search-input" style="width:100%; height:100px; border-radius:12px; font-family:inherit; resize:vertical;" placeholder="Escreva seu comentário..." cols="45" rows="8" aria-required="true" required></textarea></div>',
		'fields'             => array(
			'author' => '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"><div><label for="author" class="sr-only">' . __( 'Nome', 'silencios-da-saude' ) . '</label><input id="author" name="author" type="text" class="search-input" style="width:100%; border-radius:8px;" placeholder="Seu nome..." value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" required /></div>',
			'email'  => '<div><label for="email" class="sr-only">' . __( 'E-mail', 'silencios-da-saude' ) . '</label><input id="email" name="email" type="email" class="search-input" style="width:100%; border-radius:8px;" placeholder="Seu e-mail..." value="' . esc_attr( $commenter['comment_author_email'] ) . '" size="30" required /></div></div>',
		),
	) );
	?>

</div><!-- #comments -->
