<?php
/**
 * Template Name: Área do Professor
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Área do Educador</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Acesse planos de aula estruturados de biologia/ciências, slides e ferramentas para discutir letramento menstrual em sala de aula.
		</p>
	</header>

	<!-- PAINEL DE LOGIN SIMULADO (AUTENTICAÇÃO SUPABASE) -->
	<section id="prof-login-box" class="card glassmorphism max-w-md mx-auto" style="max-width: 450px; margin: 0 auto; padding: 2.5rem;">
		<div class="text-center mb-6">
			<div style="font-size: 3rem; margin-bottom: 8px;">🔒</div>
			<h2 class="text-xl font-bold">Acesso Restrito ao Professor</h2>
			<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem;">
				Este material pedagógico é restrito a educadores. Insira suas credenciais do projeto.
			</p>
		</div>

		<form id="prof-login-form" style="display: flex; flex-direction: column; gap: 16px;">
			<div>
				<label for="prof-email" class="sr-only">E-mail Corporativo</label>
				<input type="email" id="prof-email" class="search-input" style="width: 100%; border-radius: 8px;" placeholder="Digite seu e-mail (Ex: prof@escola.com)" required autocomplete="email">
			</div>

			<div>
				<label for="prof-password" class="sr-only">Senha de Acesso</label>
				<input type="password" id="prof-password" class="search-input" style="width: 100%; border-radius: 8px;" placeholder="Digite a senha (Dica: professor123)" required autocomplete="current-password">
			</div>

			<button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">
				Entrar via Supabase Auth
			</button>
		</form>
	</section>

	<!-- PORTAL DO PROFESSOR (OCULTO ATÉ LOGIN) -->
	<section id="prof-portal" style="display: none;" class="animate-fade-in-up">
		<!-- Boas Vindas -->
		<div class="card glassmorphism mb-8" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding: 1.5rem 2.5rem; border-left: 6px solid var(--mint);">
			<div>
				<span style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted);">Sessão Ativa</span>
				<h2 class="text-xl font-bold" style="margin: 0;">Bem-vindo(a), Prof. <span id="prof-display-name">Educador</span>!</h2>
			</div>
			<button id="prof-logout-btn" class="btn btn-outline" style="padding: 6px 16px; font-size: 0.85rem;">
				Sair do Portal
			</button>
		</div>

		<!-- GRID DE ARQUIVOS PEDAGÓGICOS -->
		<h2 class="text-2xl font-bold mb-6">Material Didático para Download</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Arquivo 1 -->
			<div class="card glassmorphism" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<div style="font-size: 2.2rem; margin-bottom: 8px;">📂</div>
					<h3 class="text-lg font-bold mb-2">Plano de Aula: Corpo e Hormônios</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Roteiro completo de aula para turmas de 6º e 7º ano do Ensino Fundamental com dinâmicas sobre ciclo menstrual.
					</p>
				</div>
				<button class="btn btn-secondary download-file-btn" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;">Baixar PDF (Planos)</button>
			</div>

			<!-- Arquivo 2 -->
			<div class="card glassmorphism" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<div style="font-size: 2.2rem; margin-bottom: 8px;">📊</div>
					<h3 class="text-lg font-bold mb-2">Slides de Apresentação de Aula</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Apresentação visual explicativa contendo as fases do ciclo, gráficos interativos e mitos comuns para projetar na sala.
					</p>
				</div>
				<button class="btn btn-secondary download-file-btn" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;">Baixar PPTX (Slides)</button>
			</div>

			<!-- Arquivo 3 -->
			<div class="card glassmorphism" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
				<div>
					<div style="font-size: 2.2rem; margin-bottom: 8px;">📑</div>
					<h3 class="text-lg font-bold mb-2">Modelos de Questionários</h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.85rem; line-height: 1.4;">
						Modelo de ficha avaliativa e anônima de letramento em saúde menstrual para aplicar em suas próprias turmas.
					</p>
				</div>
				<button class="btn btn-secondary download-file-btn" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;">Baixar DOCX (Fichas)</button>
			</div>
		</div>
	</section>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
	const loginBox = document.getElementById('prof-login-box');
	const portal = document.getElementById('prof-portal');
	const form = document.getElementById('prof-login-form');
	const logoutBtn = document.getElementById('prof-logout-btn');
	const emailInput = document.getElementById('prof-email');
	const passInput = document.getElementById('prof-password');
	const dispName = document.getElementById('prof-display-name');

	// Verificar se já existe login simulado
	const isLogged = sessionStorage.getItem('prof-logged-in');
	const savedEmail = sessionStorage.getItem('prof-logged-email');
	if (isLogged === 'true' && savedEmail) {
		loginBox.style.display = 'none';
		portal.style.display = 'block';
		dispName.textContent = savedEmail.split('@')[0];
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = emailInput.value.trim();
		const pass = passInput.value.trim();

		// Senha demonstrativa padrão
		if (pass === 'professor123') {
			sessionStorage.setItem('prof-logged-in', 'true');
			sessionStorage.setItem('prof-logged-email', email);
			
			loginBox.style.display = 'none';
			portal.style.display = 'block';
			dispName.textContent = email.split('@')[0];
		} else {
			alert('Senha incorreta! Dica: utilize "professor123".');
			passInput.focus();
		}
	});

	logoutBtn.addEventListener('click', () => {
		sessionStorage.removeItem('prof-logged-in');
		sessionStorage.removeItem('prof-logged-email');
		portal.style.display = 'none';
		loginBox.style.display = 'block';
		emailInput.value = '';
		passInput.value = '';
	});

	// Ação de download simulado
	document.querySelectorAll('.download-file-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			alert('Download do material pedagógico restrito efetuado com sucesso!');
		});
	});
});
</script>

<?php
get_footer();
