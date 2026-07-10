<?php
/**
 * Template Name: Quiz Educativo
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Quiz Educativo</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Coloque à prova o que você aprendeu sobre saúde feminina. Responda às 10 perguntas e conquiste o seu Certificado de Conhecimento!
		</p>
	</header>

	<section class="max-w-xl mx-auto" style="max-width: 600px; margin: 0 auto;">
		
		<!-- TELA INICIAL (START) -->
		<div id="quiz-start-screen" class="card glassmorphism text-center py-10">
			<div style="font-size: 4.5rem; margin-bottom: 1.5rem;">🎓</div>
			<h2 class="text-2xl font-bold mb-4">Quiz Silêncios da Saúde</h2>
			<p class="text-muted dark:text-text-light/70 mb-8" style="max-width: 450px; margin-left: auto; margin-right: auto;">
				Este teste possui 10 perguntas científicas sobre menstruação, ciclo biológico e autocuidado. Ao alcançar 7 ou mais acertos, você desbloqueará um certificado personalizado!
			</p>
			
			<div class="mb-8" style="max-width: 320px; margin: 0 auto 2rem;">
				<label for="student-name" class="sr-only">Seu Nome para o Certificado</label>
				<input type="text" id="student-name" class="search-input" style="width: 100%; text-align: center; border-radius: 12px;" placeholder="Digite seu nome para o certificado..." required autocomplete="name">
			</div>

			<button id="quiz-start-btn" class="btn btn-primary" style="padding: 1rem 2.5rem; font-size: 1.1rem;">
				Começar Desafio
			</button>
		</div>

		<!-- TELA DE PERGUNTAS (GAMEPLAY) -->
		<div id="quiz-gameplay" class="card glassmorphism" style="display: none; padding: 2rem;">
			<!-- Progresso e Pontos -->
			<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
				<span class="text-muted" style="font-size: 0.9rem;">Pergunta <span id="quiz-current-num">1</span> de 10</span>
				<span id="quiz-score-indicator" class="text-muted" style="font-size: 0.9rem; font-weight: 700; color: var(--success);">Pontuação: 0</span>
			</div>
			
			<div class="progress-bar-container">
				<div id="quiz-progress-fill" class="progress-bar-fill"></div>
			</div>

			<!-- Pergunta -->
			<h3 id="quiz-question-text" class="text-xl font-bold mb-6" style="line-height: 1.35;">
				Texto da pergunta aqui...
			</h3>

			<!-- Alternativas -->
			<div id="quiz-options-container" style="display: flex; flex-direction: column; gap: 8px;">
				<!-- Injetadas via JS -->
			</div>

			<!-- Feedback por Pergunta -->
			<div id="quiz-feedback-box" class="card" style="display: none; margin-top: 1.5rem; padding: 1.2rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color);">
				<h4 id="quiz-feedback-title" class="font-bold mb-1" style="font-size: 1rem;">Correto!</h4>
				<p id="quiz-feedback-text" class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 1rem;">
					Explicação científica.
				</p>
				<button id="quiz-next-btn" class="btn btn-primary" style="padding: 6px 20px; font-size: 0.9rem; margin-left: auto; display: block;">
					Avançar &rarr;
				</button>
			</div>
		</div>

		<!-- TELA DE RESULTADOS (END) -->
		<div id="quiz-result-screen" class="card glassmorphism text-center" style="display: none; padding: 3rem 2rem;">
			<div style="font-size: 4rem; margin-bottom: 1.5rem;">🎉</div>
			<h2 class="text-2xl font-bold mb-2">Desafio Concluído!</h2>
			<p class="text-muted dark:text-text-light/70 mb-4">
				Parabéns por completar o Quiz de Saúde Feminina!
			</p>
			
			<h3 class="text-3xl font-extrabold mb-2" style="color: var(--success);"><span id="quiz-final-score">0</span> / 10 Acertos</h3>
			<p id="quiz-level-badge" style="font-size: 1.1rem; font-weight: 700; text-transform: uppercase; color: var(--accent); margin-bottom: 2rem;">
				Nível: Expert
			</p>

			<!-- Certificado (Canvas invisível para desenho) -->
			<div id="certificate-area" style="display: none; margin-top: 2rem; margin-bottom: 2rem;">
				<canvas id="certificate-canvas" width="800" height="565" style="width: 100%; border-radius: 12px; border: 1px solid var(--border-color);"></canvas>
			</div>

			<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
				<button id="quiz-cert-btn" class="btn btn-secondary" style="display: none;">
					📥 Baixar Certificado
				</button>
				<button onclick="window.location.reload();" class="btn btn-outline">
					Refazer Desafio
				</button>
			</div>
		</div>

	</section>
</main>

<?php
get_footer();
