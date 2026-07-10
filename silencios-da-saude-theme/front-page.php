<?php
/**
 * Template da página inicial (Home)
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main">
	<!-- HERO SECTION -->
	<section class="hero-section container py-20">
		<div class="hero">
			<!-- Conteúdo de texto -->
			<div class="hero-content animate-fade-in-up">
				<h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 20px; font-weight: 900; letter-spacing: -0.03em;">
					Silêncios <span style="background: linear-gradient(90deg, var(--purple-light) 0%, #FADADD 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">da Saúde</span>
				</h1>
				<p class="hero-subtitle text-lg" style="margin-bottom: 32px; max-width: 500px; color: var(--text-muted);">
					Informação salva vidas. Conhecimento transforma escolhas. Uma plataforma acolhedora e científica sobre corpo, mente e saúde feminina para adolescentes.
				</p>
				<div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; md:justify-content: flex-start;">
					<a href="<?php echo esc_url( home_url( '/sobre' ) ); ?>" class="btn btn-primary">
						Conheça o Projeto
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
					</a>
					<a href="<?php echo esc_url( home_url( '/saude-feminina' ) ); ?>" class="btn btn-secondary">
						Aprenda Saúde Feminina
					</a>
				</div>
			</div>

			<!-- Ilustração premium de adolescentes em círculo (SVG Animado) -->
			<div class="hero-image animate-float" style="width: 100%; max-width: 450px;">
				<svg viewBox="0 0 500 500" width="100%" height="100%" style="overflow: visible;">
					<defs>
						<!-- Gradientes circulares -->
						<radialGradient id="glow" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stop-color="#CDB4DB" stop-opacity="0.3"/>
							<stop offset="100%" stop-color="#FADADD" stop-opacity="0"/>
						</radialGradient>
						<linearGradient id="avatar1" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#FADADD" />
							<stop offset="100%" stop-color="#CDB4DB" />
						</linearGradient>
						<linearGradient id="avatar2" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#98D8C8" />
							<stop offset="100%" stop-color="#B8D4E3" />
						</linearGradient>
					</defs>
					
					<!-- Brilho de fundo -->
					<circle cx="250" cy="250" r="220" fill="url(#glow)" />
					
					<!-- Círculo Central de Apoio -->
					<circle cx="250" cy="250" r="130" fill="none" stroke="rgba(205, 180, 219, 0.25)" stroke-width="3" stroke-dasharray="10 5" />
					<circle cx="250" cy="250" r="90" fill="none" stroke="rgba(152, 216, 200, 0.3)" stroke-width="2" />
					
					<!-- Representações Vetoriais das Adolescentes em Círculo -->
					<!-- Adolescente 1 (Topo) -->
					<g transform="translate(250, 90)">
						<circle cx="0" cy="0" r="30" fill="url(#avatar1)" />
						<!-- Cabelo e Rosto simplificado -->
						<path d="M-20 -5 C-20 -35 20 -35 20 -5" fill="#2D2327" />
						<!-- Corpo -->
						<path d="M-25 35 C-25 15 25 15 25 35 Z" fill="#CDB4DB" />
					</g>

					<!-- Adolescente 2 (Esquerda Baixo) -->
					<g transform="translate(120, 310)">
						<circle cx="0" cy="0" r="30" fill="url(#avatar2)" />
						<path d="M-15 -10 C-15 -35 15 -35 15 -10" fill="#E76F51" />
						<path d="M-25 35 C-25 15 25 15 25 35 Z" fill="#98D8C8" />
					</g>

					<!-- Adolescente 3 (Direita Baixo) -->
					<g transform="translate(380, 310)">
						<circle cx="0" cy="0" r="30" fill="url(#avatar1)" />
						<path d="M-18 -8 C-18 -32 18 -32 18 -8" fill="#F4A261" />
						<path d="M-25 35 C-25 15 25 15 25 35 Z" fill="#B8D4E3" />
					</g>
					
					<!-- Elementos flutuantes adicionais (Corações e Brilhos) -->
					<path d="M250 220 C245 210 230 210 230 225 C230 240 250 255 250 255 C250 255 270 240 270 225 C270 210 255 210 250 220 Z" fill="#E76F51" opacity="0.8" transform="translate(0, 5) scale(0.7) translate(-107, -90)"/>
					<g transform="translate(180, 160) scale(0.6)">
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FADADD"/>
					</g>
					<g transform="translate(300, 170) scale(0.5)">
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#CDB4DB"/>
					</g>
				</svg>
			</div>
		</div>
	</section>

	<!-- RECURSOS EM DESTAQUE -->
	<section class="container py-10" style="margin-top: 2rem;">
		<h2 class="text-center text-3xl font-bold mb-12">Explore a Plataforma</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Card 1: Saúde Feminina -->
			<div class="card glassmorphism text-center" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 280px;">
				<div style="font-size: 3rem; margin-bottom: 1rem;">🌸</div>
				<div>
					<h3 class="text-xl font-bold mb-2">Saúde Feminina</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem; margin-bottom: 1.5rem;">
						Acesse 9 tópicos educativos completos baseados na ciência médica sobre menstruação, exercícios e puberdade.
					</p>
				</div>
				<a href="<?php echo esc_url( home_url( '/saude-feminina' ) ); ?>" class="btn btn-outline" style="width: 100%;">Ler Tópicos</a>
			</div>

			<!-- Card 2: Mitos e Verdades -->
			<div class="card glassmorphism text-center" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 280px;">
				<div style="font-size: 3rem; margin-bottom: 1rem;">❓</div>
				<div>
					<h3 class="text-xl font-bold mb-2">Mitos e Verdades</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem; margin-bottom: 1.5rem;">
						Desvende crenças populares através de um jogo interativo de flip-cards com explicações reais baseadas em evidências.
					</p>
				</div>
				<a href="<?php echo esc_url( home_url( '/mitos-e-verdades' ) ); ?>" class="btn btn-outline" style="width: 100%;">Jogar Mitos</a>
			</div>

			<!-- Card 3: Quiz Educativo -->
			<div class="card glassmorphism text-center" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 280px;">
				<div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
				<div>
					<h3 class="text-xl font-bold mb-2">Testar Conhecimento</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.95rem; margin-bottom: 1.5rem;">
						Participe do nosso Quiz completo e, ao final, gere seu certificado digital oficial de conquista de conhecimento.
					</p>
				</div>
				<a href="<?php echo esc_url( home_url( '/quiz' ) ); ?>" class="btn btn-outline" style="width: 100%;">Fazer o Quiz</a>
			</div>
		</div>
	</section>

	<!-- CTA SOBRE SEÇÕES SECUNDÁRIAS -->
	<section class="glassmorphism py-20" style="margin-top: 5rem; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
		<div class="container text-center" style="max-width: 800px;">
			<h2 class="text-3xl font-bold mb-4">Espaço para Educadores e Alunos</h2>
			<p class="text-muted dark:text-text-light/70 text-lg mb-8">
				Disponibilizamos planos de aula estruturados e materiais pedagógicos em PDF para professores, além de uma área completa para estudantes acompanharem seus certificados.
			</p>
			<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
				<a href="<?php echo esc_url( home_url( '/professor' ) ); ?>" class="btn btn-secondary">Material Pedagógico</a>
				<a href="<?php echo esc_url( home_url( '/aluno' ) ); ?>" class="btn btn-outline">Portal do Aluno</a>
			</div>
		</div>
	</section>
</main>

<?php
get_footer();
