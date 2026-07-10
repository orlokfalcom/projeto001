<?php
/**
 * Template Name: Mitos e Verdades
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Mitos e Verdades</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Será que o que você ouviu falar por aí é verdade ou apenas um mito popular? Teste seus conhecimentos e aprenda a explicação baseada na ciência.
		</p>
	</header>

	<!-- SCOREBOARD -->
	<div class="card glassmorphism mb-8" style="display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem;">
		<div>
			<span style="font-size: 0.9rem; text-transform: uppercase; tracking: 0.05em; color: var(--text-muted);">Progresso</span>
			<h4 style="margin: 0; font-size: 1.2rem;"><span id="myth-current">1</span> de <span id="myth-total">20</span></h4>
		</div>
		<div style="text-align: right;">
			<span style="font-size: 0.9rem; text-transform: uppercase; tracking: 0.05em; color: var(--text-muted);">Pontuação</span>
			<h4 style="margin: 0; font-size: 1.2rem; color: var(--success);"><span id="myth-score">0</span> acertos</h4>
		</div>
	</div>

	<!-- GAME AREA -->
	<section class="max-w-xl mx-auto" style="max-width: 550px; margin: 0 auto;">
		<!-- FLIP CARD WRAPPER -->
		<div id="myth-card" class="flip-card mb-8">
			<div class="flip-card-inner">
				<!-- FRENTE: Pergunta/Afirmação -->
				<div class="flip-card-front glassmorphism card">
					<div style="font-size: 3.5rem; margin-bottom: 1.5rem;">💡</div>
					<h3 id="myth-statement" class="text-xl font-bold" style="line-height: 1.4; max-width: 450px;">
						Carregando pergunta...
					</h3>
				</div>
				<!-- VERSO: Explicação científica e resultado -->
				<div id="myth-card-back" class="flip-card-back card" style="background: var(--bg-card); color: var(--text-color); border: 1px solid var(--border-color);">
					<div id="myth-result-badge" style="font-size: 1.1rem; font-weight: 800; text-transform: uppercase; padding: 6px 16px; border-radius: 9999px; margin-bottom: 1rem; display: inline-block;">
						CORRETO!
					</div>
					<h4 id="myth-truth-title" class="text-lg font-bold mb-2">Isto é uma Verdade!</h4>
					<p id="myth-explanation" class="text-muted dark:text-text-light/70" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; overflow-y: auto; max-height: 140px;">
						Explicação detalhada...
					</p>
					<button id="myth-next" class="btn btn-primary" style="padding: 8px 24px;">
						Próxima Pergunta &rarr;
					</button>
				</div>
			</div>
		</div>

		<!-- BOTÕES DE JOGO -->
		<div id="myth-actions" style="display: flex; gap: 16px; justify-content: center;">
			<button id="btn-verdade" class="btn btn-secondary" style="flex: 1; padding: 1.2rem; font-size: 1.1rem; background: var(--mint); color: var(--text-dark);">
				✔️ Verdade
			</button>
			<button id="btn-mito" class="btn btn-primary" style="flex: 1; padding: 1.2rem; font-size: 1.1rem; background: #FAADB3; color: var(--text-dark);">
				❌ Mito
			</button>
		</div>

		<!-- TELA DE FIM DE JOGO -->
		<div id="myth-end-screen" class="card glassmorphism text-center" style="display: none; padding: 3rem 2rem;">
			<div style="font-size: 4rem; margin-bottom: 1.5rem;">🎉</div>
			<h2 class="text-2xl font-bold mb-2">Fim de Jogo!</h2>
			<p class="text-muted dark:text-text-light/70 mb-6">
				Você completou o Mitos e Verdades sobre saúde feminina! Veja seu resultado abaixo:
			</p>
			<h3 class="text-3xl font-extrabold mb-8" style="color: var(--success);"><span id="myth-final-score">0</span> / 20 Acertos</h3>
			<button onclick="window.location.reload();" class="btn btn-primary">Jogar Novamente</button>
		</div>
	</section>
</main>

<?php
get_footer();
