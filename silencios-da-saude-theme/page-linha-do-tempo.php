<?php
/**
 * Template Name: Linha do Tempo
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Linha do Tempo do Projeto</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Acompanhe a evolução histórica da nossa jornada científica, desde o início conceitual até a divulgação dos resultados finais.
		</p>
	</header>

	<!-- TIMELINE CONTAINER -->
	<section class="card glassmorphism py-10" style="overflow-x: auto; padding: 3rem 2rem;">
		<div style="display: flex; gap: 40px; position: relative; min-width: 1000px; padding-bottom: 2rem;">
			<!-- Linha Horizontal de Fundo -->
			<div style="position: absolute; top: 38px; left: 50px; right: 50px; height: 4px; background: var(--border-color); z-index: 1;"></div>
			
			<!-- Marco 1 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--pink-light); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">📖</div>
				<h3 class="text-base font-bold mt-4 mb-2">1. Pesquisa Bibliográfica</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Estudos conceituais sobre letramento em saúde ginecológica e tabus sociais.
				</p>
			</div>

			<!-- Marco 2 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--purple-light); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">✍️</div>
				<h3 class="text-base font-bold mt-4 mb-2">2. Questionário</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Elaboração e validação ética das perguntas da pesquisa.
				</p>
			</div>

			<!-- Marco 3 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--blue-scientific); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">📥</div>
				<h3 class="text-base font-bold mt-4 mb-2">3. Coleta de Dados</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Aplicação anônima com centenas de estudantes do município.
				</p>
			</div>

			<!-- Marco 4 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--mint); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">📊</div>
				<h3 class="text-base font-bold mt-4 mb-2">4. Análise Estatística</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Cruzamento de idade, eixos de dúvidas e absenteísmo por pobreza menstrual.
				</p>
			</div>

			<!-- Marco 5 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--purple-light); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">💻</div>
				<h3 class="text-base font-bold mt-4 mb-2">5. Produção do Site</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Estruturação tecnológica do portal de alta performance.
				</p>
			</div>

			<!-- Marco 6 -->
			<div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 2;">
				<div style="width: 80px; height: 80px; border-radius: 50%; background: var(--pink-light); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 4px solid var(--bg-main); box-shadow: var(--card-shadow); color: var(--text-dark);">🚀</div>
				<h3 class="text-base font-bold mt-4 mb-2">6. Resultados</h3>
				<p class="text-muted" style="font-size: 0.8rem; line-height: 1.4; max-width: 160px; white-space: normal;">
					Apresentação dos dados e democratização do conhecimento científico.
				</p>
			</div>
		</div>
	</section>
</main>

<?php
get_footer();
