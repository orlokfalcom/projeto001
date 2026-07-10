<?php
/**
 * Template Name: Contato
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Fale Conosco</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Ficou com alguma dúvida científica ou quer levar o projeto para sua escola? Envie-nos uma mensagem direta!
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<!-- COLUNA FORMULÁRIO (ESQUERDA) -->
		<section class="card glassmorphism" style="padding: 2.5rem;">
			<h2 class="text-2xl font-bold mb-6">Mande sua Dúvida ou Sugestão</h2>
			
			<form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
				<!-- Nome -->
				<div>
					<label for="contact-name" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Nome Completo</label>
					<input type="text" id="contact-name" class="search-input" style="width: 100%; border-radius: 8px;" placeholder="Digite seu nome..." required autocomplete="name">
					<span class="error-msg" id="err-name" style="color: #f77c88; font-size: 0.75rem; display: none; margin-top: 4px;"></span>
				</div>

				<div style="display: flex; gap: 16px; flex-wrap: wrap;">
					<!-- Idade -->
					<div style="flex: 1; min-width: 120px;">
						<label for="contact-age" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Idade</label>
						<input type="number" id="contact-age" class="search-input" style="width: 100%; border-radius: 8px;" placeholder="Ex: 14" min="8" max="100" required>
						<span class="error-msg" id="err-age" style="color: #f77c88; font-size: 0.75rem; display: none; margin-top: 4px;"></span>
					</div>

					<!-- Cidade -->
					<div style="flex: 2; min-width: 180px;">
						<label for="contact-city" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Cidade / Estado</label>
						<input type="text" id="contact-city" class="search-input" style="width: 100%; border-radius: 8px;" placeholder="Ex: São Paulo - SP" required>
						<span class="error-msg" id="err-city" style="color: #f77c88; font-size: 0.75rem; display: none; margin-top: 4px;"></span>
					</div>
				</div>

				<!-- Mensagem -->
				<div>
					<label for="contact-message" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Mensagem</label>
					<textarea id="contact-message" class="search-input" style="width: 100%; height: 120px; border-radius: 8px; font-family: inherit; resize: vertical;" placeholder="Escreva sua pergunta de forma totalmente anônima se preferir..." required></textarea>
					<span class="error-msg" id="err-msg" style="color: #f77c88; font-size: 0.75rem; display: none; margin-top: 4px;"></span>
				</div>

				<button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px; margin-top: 10px;">
					Enviar Mensagem
				</button>
			</form>
		</section>

		<!-- COLUNA CONTATOS E MAPA (DIREITA) -->
		<section style="display: flex; flex-direction: column; gap: 32px;">
			<!-- Canais diretos e redes -->
			<div class="card glassmorphism">
				<h2 class="text-2xl font-bold mb-4">Canais Diretos</h2>
				<ul style="list-style: none; display: flex; flex-direction: column; gap: 16px; font-size: 0.95rem;">
					<li style="display: flex; gap: 12px; align-items: center;">
						<span style="font-size: 1.5rem;">✉️</span>
						<div>
							<strong>E-mail do Projeto:</strong><br>
							<a href="mailto:contato@silenciosdasaude.org" style="text-decoration: underline;">contato@silenciosdasaude.org</a>
						</div>
					</li>
					<li style="display: flex; gap: 12px; align-items: center;">
						<span style="font-size: 1.5rem;">📱</span>
						<div>
							<strong>WhatsApp e Apoio:</strong><br>
							<a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">+55 (11) 99999-9999</a>
						</div>
					</li>
				</ul>
			</div>

			<!-- Mapa Vetorial Otimizado (Representação do Pólo de Pesquisa) -->
			<div class="card glassmorphism">
				<h3 class="text-lg font-bold mb-2">Nosso Pólo de Divulgação</h3>
				<p class="text-muted" style="font-size: 0.85rem; margin-bottom: 12px;">Localização da Escola Pólo - Pesquisa de Campo.</p>
				
				<div style="background: rgba(0,0,0,0.05); border-radius: 12px; height: 180px; overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative;">
					<svg viewBox="0 0 400 180" width="100%" height="100%" style="background: var(--bg-card);">
						<!-- Linhas do mapa simulado -->
						<path d="M 0 40 L 400 40" stroke="var(--border-color)" stroke-width="6" />
						<path d="M 0 130 L 400 130" stroke="var(--border-color)" stroke-width="6" />
						<path d="M 120 0 L 120 180" stroke="var(--border-color)" stroke-width="8" />
						<path d="M 280 0 L 280 180" stroke="var(--border-color)" stroke-width="6" />
						
						<!-- Bloco de parque/escola -->
						<rect x="140" y="55" width="120" height="60" fill="var(--mint)" opacity="0.3" rx="4"/>
						<text x="200" y="90" fill="var(--text-color)" font-size="11" font-weight="bold" text-anchor="middle">Escola Pólo Municipal</text>
						
						<!-- Pin de localização -->
						<g transform="translate(200, 75)">
							<path d="M 0 0 C -5 -10 -10 -10 -10 -20 C -10 -25 -5 -30 0 -30 C 5 -30 10 -25 10 -20 C 10 -10 5 -10 0 0 Z" fill="#E76F51"/>
							<circle cx="0" cy="-20" r="4" fill="white"/>
						</g>
					</svg>
				</div>
			</div>
		</section>
	</div>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contact-form');
	
	const nameInput = document.getElementById('contact-name');
	const ageInput = document.getElementById('contact-age');
	const cityInput = document.getElementById('contact-city');
	const msgInput = document.getElementById('contact-message');
	
	const errName = document.getElementById('err-name');
	const errAge = document.getElementById('err-age');
	const errCity = document.getElementById('err-city');
	const errMsg = document.getElementById('err-msg');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		// Reset errors
		document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
		let hasError = false;

		// Nome: mínimo 3 caracteres
		if (nameInput.value.trim().length < 3) {
			errName.textContent = "Nome deve conter pelo menos 3 caracteres.";
			errName.style.display = 'block';
			hasError = true;
		}

		// Idade: entre 8 e 90
		const age = parseInt(ageInput.value);
		if (isNaN(age) || age < 8 || age > 90) {
			errAge.textContent = "Por favor, digite uma idade válida (entre 8 e 90).";
			errAge.style.display = 'block';
			hasError = true;
		}

		// Cidade: mínimo 4 caracteres
		if (cityInput.value.trim().length < 4) {
			errCity.textContent = "Digite uma cidade e estado válidos.";
			errCity.style.display = 'block';
			hasError = true;
		}

		// Mensagem: mínimo 10 caracteres
		if (msgInput.value.trim().length < 10) {
			errMsg.textContent = "A mensagem deve conter pelo menos 10 caracteres explicativos.";
			errMsg.style.display = 'block';
			hasError = true;
		}

		if (!hasError) {
			// Envio simulado com sucesso (EmailJS integration mockup)
			alert('Obrigado! Sua mensagem foi enviada de forma segura para nossa equipe de saúde.');
			form.reset();
		}
	});
});
</script>

<?php
get_footer();
