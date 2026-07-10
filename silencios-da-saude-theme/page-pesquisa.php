<?php
/**
 * Template Name: Pesquisa e Método
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Metodologia de Pesquisa</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Conheça as etapas do método científico rigoroso adotadas para fundamentar este portal e obter os dados estatísticos.
		</p>
	</header>

	<!-- EXPLICAÇÃO DO MÉTODO EM CARDS -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold mb-6">Etapas Científicas</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Etapa 1 -->
			<div class="card glassmorphism">
				<div style="font-size: 1.5rem; font-weight:800; color:var(--purple-light); margin-bottom:12px;">01</div>
				<h3 class="text-xl font-bold mb-2">Levantamento Teórico</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size:0.9rem; line-height:1.5;">
					Análise de diretrizes de saúde ginecológica da OMS, Febrasgo e Ministério da Saúde para consolidar o embasamento científico do portal.
				</p>
			</div>

			<!-- Etapa 2 -->
			<div class="card glassmorphism">
				<div style="font-size: 1.5rem; font-weight:800; color:var(--pink-light); margin-bottom:12px;">02</div>
				<h3 class="text-xl font-bold mb-2">Coleta de Campo</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size:0.9rem; line-height:1.5;">
					Aplicação de questionários estruturados e anônimos com estudantes de 9 a 18 anos de idade para catalogar as maiores dúvidas reais.
				</p>
			</div>

			<!-- Etapa 3 -->
			<div class="card glassmorphism">
				<div style="font-size: 1.5rem; font-weight:800; color:var(--blue-scientific); margin-bottom:12px;">03</div>
				<h3 class="text-xl font-bold mb-2">Desenvolvimento</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size:0.9rem; line-height:1.5;">
					Construção das trilhas educativas em linguagem acessível e acolhedora, respondendo diretamente a cada um dos tabus mapeados.
				</p>
			</div>
		</div>
	</section>

	<!-- FLUXOGRAMA INTERATIVO (SVG) -->
	<section class="card glassmorphism py-10 mb-12">
		<h2 class="text-2xl font-bold text-center mb-8">Fluxograma de Desenvolvimento da Pesquisa</h2>
		<div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 16px; border: 1px solid var(--border-color); display: flex; justify-content: center; overflow-x: auto;">
			<svg width="650" height="150" viewBox="0 0 650 150" style="min-width: 650px;">
				<defs>
					<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
						<path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-color)"/>
					</marker>
				</defs>
				
				<!-- Bloco 1 -->
				<rect x="10" y="35" width="130" height="80" rx="12" fill="var(--glass-bg)" stroke="var(--purple-light)" stroke-width="2" style="transition:all 0.3s; cursor:pointer;" class="flow-block"/>
				<text x="75" y="72" fill="var(--text-color)" font-size="11" font-weight="bold" text-anchor="middle">1. Pesquisa Teórica</text>
				<text x="75" y="90" fill="var(--text-muted)" font-size="9" text-anchor="middle">Diretrizes da OMS</text>
				
				<!-- Seta 1 para 2 -->
				<path d="M 140 75 L 180 75" fill="none" stroke="var(--text-color)" stroke-width="1.5" marker-end="url(#arrow)" />
				
				<!-- Bloco 2 -->
				<rect x="190" y="35" width="130" height="80" rx="12" fill="var(--glass-bg)" stroke="var(--pink-light)" stroke-width="2" style="transition:all 0.3s; cursor:pointer;" class="flow-block"/>
				<text x="255" y="72" fill="var(--text-color)" font-size="11" font-weight="bold" text-anchor="middle">2. Questionários</text>
				<text x="255" y="90" fill="var(--text-muted)" font-size="9" text-anchor="middle">Coleta com Alunas</text>

				<!-- Seta 2 para 3 -->
				<path d="M 320 75 L 360 75" fill="none" stroke="var(--text-color)" stroke-width="1.5" marker-end="url(#arrow)" />

				<!-- Bloco 3 -->
				<rect x="370" y="35" width="130" height="80" rx="12" fill="var(--glass-bg)" stroke="var(--blue-scientific)" stroke-width="2" style="transition:all 0.3s; cursor:pointer;" class="flow-block"/>
				<text x="435" y="72" fill="var(--text-color)" font-size="11" font-weight="bold" text-anchor="middle">3. Análise de Dados</text>
				<text x="435" y="90" fill="var(--text-muted)" font-size="9" text-anchor="middle">Mapeamento de Mitos</text>

				<!-- Seta 3 para 4 -->
				<path d="M 500 75 L 540 75" fill="none" stroke="var(--text-color)" stroke-width="1.5" marker-end="url(#arrow)" />

				<!-- Bloco 4 -->
				<rect x="550" y="35" width="90" height="80" rx="12" fill="var(--glass-bg)" stroke="var(--mint)" stroke-width="2" style="transition:all 0.3s; cursor:pointer;" class="flow-block"/>
				<text x="595" y="72" fill="var(--text-color)" font-size="11" font-weight="bold" text-anchor="middle">4. Produção</text>
				<text x="595" y="90" fill="var(--text-muted)" font-size="9" text-anchor="middle">Portal Web</text>
			</svg>
		</div>
	</section>
</main>

<style>
.flow-block:hover {
	fill: rgba(205, 180, 219, 0.15);
	transform: translateY(-2px);
}
</style>

<?php
get_footer();
