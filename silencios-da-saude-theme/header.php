<!DOCTYPE html>
<html <?php language_attributes(); ?> class="light">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Portal educativo sobre saúde feminina para adolescentes: Silêncios da Saúde. Informação salva vidas, conhecimento transforma escolhas.">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="manifest" href="<?php echo esc_url( get_template_directory_uri() . '/manifest.json' ); ?>">
	<meta name="theme-color" content="#CDB4DB">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Skip Link para Acessibilidade -->
<a class="skip-link sr-only" href="#content"><?php esc_html_e( 'Pular para o conteúdo', 'silencios-da-saude' ); ?></a>

<header id="masthead" class="site-header glassmorphism">
	<div class="container header-container">
		<!-- Logotipo / Título do Site -->
		<div class="site-branding">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="logo-text">
				<?php bloginfo( 'name' ); ?>
			</a>
		</div>

		<!-- Menu Desktop -->
		<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Menu Principal', 'silencios-da-saude' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'menu_id'        => 'primary-menu',
				'container'      => false,
				'menu_class'     => 'nav-menu',
				'fallback_cb'    => 'silencios_da_saude_fallback_menu',
			) );
			
			// Função de fallback caso o menu não esteja definido
			function silencios_da_saude_fallback_menu() {
				echo '<ul class="nav-menu">';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/sobre' ) ) . '">Sobre</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/objetivos' ) ) . '">Objetivos</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/saude-feminina' ) ) . '">Saúde Feminina</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/mitos-e-verdades' ) ) . '">Mitos</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/quiz' ) ) . '">Quiz</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/estatisticas' ) ) . '">Dados</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/biblioteca' ) ) . '">Biblioteca</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/blog' ) ) . '">Blog</a></li>';
				echo '<li><a class="nav-link" href="' . esc_url( home_url( '/contato' ) ) . '">Contato</a></li>';
				echo '</ul>';
			}
			?>
		</nav>

		<!-- Ações do Header (Busca, Dark Mode e Hamburguer Mobile) -->
		<div class="header-actions">
			<!-- Barra de Pesquisa Rápida (Desktop) -->
			<form role="search" method="get" class="search-form-header sr-only md:not-sr-only" action="<?php echo esc_url( home_url( '/' ) ); ?>">
				<label class="sr-only" for="search-input-header"><?php esc_html_e( 'Pesquisar por:', 'silencios-da-saude' ); ?></label>
				<input type="search" id="search-input-header" class="search-input" style="padding: 6px 14px; font-size: 0.85rem;" placeholder="<?php esc_attr_e( 'Buscar no site...', 'silencios-da-saude' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
			</form>

			<!-- Toggle Dark Mode -->
			<button id="theme-toggle" class="icon-btn" aria-label="Alternar Modo Escuro" aria-live="polite">
				<!-- Ícone inserido via JS -->
			</button>

			<!-- Toggle Hamburguer Mobile -->
			<button id="hamburger-toggle" class="icon-btn hamburger" aria-label="Abrir Menu Principal" aria-expanded="false" aria-controls="mobile-navigation">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			</button>
		</div>
	</div>
</header>

<!-- Menu Mobile Drawer -->
<div id="mobile-navigation" class="mobile-nav glassmorphism">
	<form role="search" method="get" class="search-form-mobile" action="<?php echo esc_url( home_url( '/' ) ); ?>" style="width: 100%;">
		<input type="search" class="search-input" style="width: 100%;" placeholder="<?php esc_attr_e( 'Pesquisar...', 'silencios-da-saude' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
	</form>
	<ul style="list-style: none; display: flex; flex-direction: column; gap: 16px;">
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/sobre' ) ); ?>">Sobre o Projeto</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/objetivos' ) ); ?>">Objetivos</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/saude-feminina' ) ); ?>">Saúde Feminina</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/mitos-e-verdades' ) ); ?>">Mitos e Verdades</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/quiz' ) ); ?>">Quiz</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/estatisticas' ) ); ?>">Estatísticas</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/biblioteca' ) ); ?>">Biblioteca</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/blog' ) ); ?>">Blog</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/linha-do-tempo' ) ); ?>">Linha do Tempo</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/pesquisa' ) ); ?>">Metodologia</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/professor' ) ); ?>">Área do Professor</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/aluno' ) ); ?>">Portal do Aluno</a></li>
		<li><a class="nav-link" style="font-size: 1.2rem;" href="<?php echo esc_url( home_url( '/contato' ) ); ?>">Contato</a></li>
	</ul>
</div>

<div id="content" class="site-content">
