<?php
/**
 * Template Name: Portal do Aluno
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Portal da Estudante</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Acompanhe suas conquistas, assista a vídeos educativos rápidos e acesse seus certificados de conhecimento salvos.
		</p>
	</header>

	<!-- DASHBOARD DO ESTUDANTE -->
	<section class="card glassmorphism mb-12" style="padding: 2rem;">
		<div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; margin-bottom: 2rem;">
			<div style="font-size: 3rem; background: var(--pink-light); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">🎒</div>
			<div>
				<h2 class="text-2xl font-bold mb-1">Meu Espaço de Aprendizado</h2>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem; margin: 0;">
					Aqui você confere suas estatísticas de estudo pessoais no portal.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6" style="border-top: 1px solid var(--border-color); padding-top: 2rem;">
			<!-- Módulo 1 -->
			<div style="text-align: center;">
				<h4 style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Quizzes Concluídos</h4>
				<h3 style="font-size: 2.2rem; font-weight: 800; margin: 6px 0;" id="aluno-quizzes-count">0</h3>
				<span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 8px; border-radius: 4px;">Letramento Menstrual</span>
			</div>
			<!-- Módulo 2 -->
			<div style="text-align: center;">
				<h4 style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Minha Melhor Nota</h4>
				<h3 style="font-size: 2.2rem; font-weight: 800; margin: 6px 0; color: var(--success);" id="aluno-best-score">-</h3>
				<span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 8px; border-radius: 4px;">Último Teste</span>
			</div>
			<!-- Módulo 3 -->
			<div style="text-align: center;">
				<h4 style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Certificados Conquistados</h4>
				<h3 style="font-size: 2.2rem; font-weight: 800; margin: 6px 0;" id="aluno-certs-count">0</h3>
				<span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 8px; border-radius: 4px;">Desbloqueados</span>
			</div>
		</div>
	</section>

	<!-- CERTIFICADOS CONQUISTADOS -->
	<section class="mb-12" id="aluno-cert-cabinet" style="display: none;">
		<h2 class="text-2xl font-bold mb-6">Meus Certificados Digitais</h2>
		<div class="card glassmorphism" style="display: flex; justify-content: space-between; align-items: center; border-left: 6px solid var(--purple-light); padding: 1.5rem 2rem;">
			<div>
				<h3 class="text-lg font-bold mb-1">Certificado de Conhecimento de Saúde Feminina</h3>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; margin: 0;">Conquistado ao concluir o quiz oficial com êxito.</p>
			</div>
			<a href="<?php echo esc_url( home_url('/quiz') ); ?>" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.9rem;">
				Ver Certificado
			</a>
		</div>
	</section>

	<!-- VÍDEOS EDUCATIVOS -->
	<section class="mb-12">
		<h2 class="text-2xl font-bold mb-6">Vídeos Recomendados</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Vídeo 1 -->
			<div class="card glassmorphism" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 16px;">
				<div style="width: 100%; height: 160px; background: #2D2327; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #fff; cursor: pointer; position: relative;" onclick="alert('Tocando vídeo informativo...')">
					▶️
					<span style="position: absolute; bottom: 8px; right: 8px; font-size: 0.75rem; background: rgba(0,0,0,0.7); padding: 2px 6px; border-radius: 4px; color: #fff;">04:15</span>
				</div>
				<div>
					<h3 class="text-lg font-bold mb-2">Entendendo a Puberdade</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Vídeo animado explicando as fases e transformações da puberdade de forma simples.
					</p>
				</div>
			</div>

			<!-- Vídeo 2 -->
			<div class="card glassmorphism" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 16px;">
				<div style="width: 100%; height: 160px; background: #2D2327; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #fff; cursor: pointer; position: relative;" onclick="alert('Tocando vídeo informativo...')">
					▶️
					<span style="position: absolute; bottom: 8px; right: 8px; font-size: 0.75rem; background: rgba(0,0,0,0.7); padding: 2px 6px; border-radius: 4px; color: #fff;">05:30</span>
				</div>
				<div>
					<h3 class="text-lg font-bold mb-2">O Ciclo Menstrual Descomplicado</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Entenda passo a passo cada fase do seu ciclo menstrual com ilustrações dinâmicas.
					</p>
				</div>
			</div>

			<!-- Vídeo 3 -->
			<div class="card glassmorphism" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 16px;">
				<div style="width: 100%; height: 160px; background: #2D2327; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #fff; cursor: pointer; position: relative;" onclick="alert('Tocando vídeo informativo...')">
					▶️
					<span style="position: absolute; bottom: 8px; right: 8px; font-size: 0.75rem; background: rgba(0,0,0,0.7); padding: 2px 6px; border-radius: 4px; color: #fff;">03:45</span>
				</div>
				<div>
					<h3 class="text-lg font-bold mb-2">Dicas para aliviar a TPM</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Conselhos práticos sobre exercícios, alimentação e descanso para amenizar sintomas.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
	// Carregar conquistas do Quiz do localStorage
	// Puxamos variáveis dinâmicas salvas ao responder o quiz
	// localStorage.getItem('quiz-completed') e 'quiz-best-score'
	
	const completed = localStorage.getItem('lgpd-cookies-accepted'); // Apenas para simular dados se não houver quiz feito
	const quizScore = localStorage.getItem('quiz-best-score') || null;

	const countEl = document.getElementById('aluno-quizzes-count');
	const scoreEl = document.getElementById('aluno-best-score');
	const certsCountEl = document.getElementById('aluno-certs-count');
	const certCabinet = document.getElementById('aluno-cert-cabinet');

	if (quizScore !== null) {
		const scoreVal = parseInt(quizScore);
		countEl.textContent = "1";
		scoreEl.textContent = `${scoreVal} / 10`;
		
		if (scoreVal >= 7) {
			certsCountEl.textContent = "1";
			certCabinet.style.display = 'block';
		} else {
			certsCountEl.textContent = "0";
		}
	} else {
		// Mock demonstrativo básico para a primeira visita do aluno
		countEl.textContent = "0";
		scoreEl.textContent = "-";
		certsCountEl.textContent = "0";
	}
});
</script>

<?php
get_footer();
