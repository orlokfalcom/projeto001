<?php
/**
 * Funções e definições do tema Silêncios da Saúde
 *
 * @package Silêncios_da_Saúde
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Evita acesso direto ao arquivo
}

/**
 * Configuração de suportes do tema
 */
function silencios_da_saude_setup() {
	// Títulos dinâmicos gerenciados pelo WordPress
	add_theme_support( 'title-tag' );

	// Imagens destacadas (Featured Images)
	add_theme_support( 'post-thumbnails' );

	// Suporte a HTML5 semântico
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );

	// Registrar Menus de Navegação
	register_nav_menus( array(
		'primary' => __( 'Menu Principal (Header)', 'silencios-da-saude' ),
		'footer'  => __( 'Menu do Rodapé', 'silencios-da-saude' ),
	) );
}
add_action( 'after_setup_theme', 'silencios_da_saude_setup' );

/**
 * Enfileirar estilos e scripts
 */
function silencios_da_saude_scripts() {
	// Fontes Google (Inter e DM Sans)
	wp_enqueue_style( 'silencios-fonts', 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap', array(), null );

	// CSS Principal do Tema
	wp_enqueue_style( 'silencios-style-main', get_template_directory_uri() . '/assets/css/theme.css', array(), '1.0.0' );

	// JavaScript Principal
	wp_enqueue_script( 'silencios-js-main', get_template_directory_uri() . '/assets/js/theme.js', array(), '1.0.0', true );

	// Carregar scripts específicos apenas em páginas que usam os templates correspondentes
	if ( is_page_template( 'page-quiz.php' ) ) {
		wp_enqueue_script( 'canvas-confetti', 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js', array(), null, true );
		wp_enqueue_script( 'silencios-js-quiz', get_template_directory_uri() . '/assets/js/quiz.js', array('canvas-confetti'), '1.0.0', true );
	}

	if ( is_page_template( 'page-mitos-e-verdades.php' ) ) {
		wp_enqueue_script( 'silencios-js-myths', get_template_directory_uri() . '/assets/js/myths.js', array(), '1.0.0', true );
	}

	// Carrega o script da assistente Luna globalmente no rodapé
	wp_enqueue_script( 'silencios-js-luna', get_template_directory_uri() . '/assets/js/luna.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'silencios_da_saude_scripts' );

/**
 * Impedir o carregamento do bloco do editor gutenberg default CSS se não necessário (Performance)
 */
function silencios_da_saude_remove_wp_block_library_css() {
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'wc-blocks-style' );
}
add_action( 'wp_enqueue_scripts', 'silencios_da_saude_remove_wp_block_library_css', 100 );
