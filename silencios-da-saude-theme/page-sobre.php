<?php
/**
 * Template Name: Sobre o Projeto
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Sobre o Projeto</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Conheça a fundamentação científica, os marcos históricos e a justificativa que norteiam a criação do portal educativo "Silêncios da Saúde".
		</p>
	</header>

	<!-- GRID DE FUNDAMENTAÇÃO -->
	<section class="mb-12">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Introdução -->
			<div class="card glassmorphism">
				<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
					<span style="font-size: 1.8rem; background: var(--pink-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-dark);">📚</span>
					<h2 class="text-xl font-bold" style="margin: 0;">Introdução</h2>
				</div>
				<p class="text-muted dark:text-text-light/70">
					A puberdade e a menstruação são processos biológicos naturais, mas que historicamente têm sido cercados de silenciamento e desinformação. O projeto visa preencher essa lacuna oferecendo uma base educacional digital confiável e interativa.
				</p>
			</div>

			<!-- Justificativa -->
			<div class="card glassmorphism">
				<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
					<span style="font-size: 1.8rem; background: var(--purple-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-dark);">📢</span>
					<h2 class="text-xl font-bold" style="margin: 0;">Justificativa</h2>
				</div>
				<p class="text-muted dark:text-text-light/70">
					Muitas adolescentes enfrentam desconfortos físicos e emocionais sem entender o que está acontecendo com seus próprios corpos. Fornecer informações científicas simples ajuda no desenvolvimento da autoconfiança e promove a saúde preventiva.
				</p>
			</div>

			<!-- Problema de Pesquisa -->
			<div class="card glassmorphism">
				<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
					<span style="font-size: 1.8rem; background: var(--blue-scientific); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-dark);">🧬</span>
					<h2 class="text-xl font-bold" style="margin: 0;">Problema de Pesquisa</h2>
				</div>
				<p class="text-muted dark:text-text-light/70">
					Como a carência de discussões abertas e científicas sobre a saúde menstrual afeta a vivência escolar e o bem-estar psicológico de estudantes adolescentes no ecossistema de ensino básico brasileiro?
				</p>
			</div>

			<!-- Hipótese -->
			<div class="card glassmorphism">
				<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
					<span style="font-size: 1.8rem; background: var(--mint); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-dark);">💡</span>
					<h2 class="text-xl font-bold" style="margin: 0;">Hipótese</h2>
				</div>
				<p class="text-muted dark:text-text-light/70">
					A disponibilização de uma ferramenta digital lúdica, responsiva e baseada em dados reais reduz o estigma sobre o ciclo menstrual, amplia a conscientização sobre autocuidado e aumenta o engajamento de professores em salas de aula.
				</p>
			</div>
		</div>
	</section>

	<!-- MARCOS DA PESQUISA (TIMELINE) -->
	<section class="card glassmorphism py-10" style="margin-top: 4rem;">
		<h2 class="text-2xl font-bold text-center mb-8">Marcos da Pesquisa Científica</h2>
		<div style="display: flex; flex-direction: column; gap: 24px; position: relative; padding-left: 20px; border-left: 2px solid var(--border-color); max-width: 800px; margin: 0 auto;">
			<!-- Marco 1 -->
			<div style="position: relative;">
				<div style="position: absolute; left: -29px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--pink-light); border: 3px solid var(--bg-main);"></div>
				<h3 class="text-lg font-bold">1. Pesquisa Bibliográfica e Teórica</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem;">
					Mapeamento da literatura científica nacional e internacional sobre saúde ginecológica na adolescência, tabus sociais e infecções.
				</p>
			</div>

			<!-- Marco 2 -->
			<div style="position: relative;">
				<div style="position: absolute; left: -29px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--purple-light); border: 3px solid var(--bg-main);"></div>
				<h3 class="text-lg font-bold">2. Elaboração e Aplicação de Questionários</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem;">
					Criação e distribuição de pesquisas anônimas entre alunas de escolas públicas para entender o nível de letramento menstrual atual.
				</p>
			</div>

			<!-- Marco 3 -->
			<div style="position: relative;">
				<div style="position: absolute; left: -29px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--blue-scientific); border: 3px solid var(--bg-main);"></div>
				<h3 class="text-lg font-bold">3. Análise Qualitativa e Estatística</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem;">
					Processamento e tabulação dos dados (anonimizados) para identificar os maiores mitos e mitigar dúvidas frequentes encontradas.
				</p>
			</div>

			<!-- Marco 4 -->
			<div style="position: relative;">
				<div style="position: absolute; left: -29px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--mint); border: 3px solid var(--bg-main);"></div>
				<h3 class="text-lg font-bold">4. Lançamento do Portal Digital</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem;">
					Desenvolvimento do site "Silêncios da Saúde" como resposta direta às principais dores e tabus identificados na pesquisa.
				</p>
			</div>
		</div>
	</section>
</main>

<?php
get_footer();
