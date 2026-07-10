<?php
/**
 * O rodapé do tema Silêncios da Saúde
 *
 * @package Silêncios_da_Saúde
 */

?>
</div><!-- #content -->

<footer id="colophon" class="site-footer glassmorphism py-10" style="margin-top: 5rem; border-top: 1px solid var(--border-color);">
	<div class="container" style="display: flex; flex-direction: column; gap: 32px;">
		<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 24px;">
			<!-- Identidade do rodapé -->
			<div style="flex: 1; min-width: 250px;">
				<h2 class="logo-text" style="font-size: 1.5rem; margin-bottom: 8px;">Silêncios da Saúde</h2>
				<p class="text-muted dark:text-text-light/70" style="font-size: 0.9rem; max-width: 320px;">
					Uma plataforma educativa focada em quebrar tabus e fornecer conhecimento científico real sobre saúde feminina para adolescentes.
				</p>
			</div>

			<!-- Links Rápidos -->
			<div style="min-width: 150px;">
				<h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Links Rápidos</h3>
				<ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
					<li><a href="<?php echo esc_url( home_url( '/sobre' ) ); ?>">Sobre o Projeto</a></li>
					<li><a href="<?php echo esc_url( home_url( '/saude-feminina' ) ); ?>">Saúde Feminina</a></li>
					<li><a href="<?php echo esc_url( home_url( '/mitos-e-verdades' ) ); ?>">Mitos e Verdades</a></li>
					<li><a href="<?php echo esc_url( home_url( '/quiz' ) ); ?>">Quiz Educativo</a></li>
					<li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>">Nosso Blog</a></li>
				</ul>
			</div>

			<!-- Legal / LGPD -->
			<div style="min-width: 150px;">
				<h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Privacidade e Termos</h3>
				<ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
					<li><a href="<?php echo esc_url( home_url( '/politica-de-privacidade' ) ); ?>">Política de Privacidade</a></li>
					<li><a href="<?php echo esc_url( home_url( '/termos-de-uso' ) ); ?>">Termos de Uso</a></li>
					<li><a href="<?php echo esc_url( home_url( '/contato' ) ); ?>">Fale Conosco</a></li>
				</ul>
			</div>

			<!-- Redes Sociais -->
			<div style="min-width: 200px;">
				<h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Siga-nos</h3>
				<div style="display: flex; gap: 12px;">
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="Instagram">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
					</a>
					<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="TikTok">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
					</a>
					<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="YouTube">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
					</a>
				</div>
			</div>
		</div>

		<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 0;">

		<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; font-size: 0.85rem; color: var(--text-muted);">
			<p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.</p>
			<p>Desenvolvido de acordo com as normas científicas e éticas de saúde.</p>
		</div>
	</div>
</footer>

<!-- 1. COOKIE BANNER LGPD -->
<div id="cookie-banner" class="cookie-banner glassmorphism card">
	<div style="flex: 1; min-width: 250px;">
		<h4 style="font-size: 1rem; margin-bottom: 4px; font-weight: 700;">Valorizamos sua Privacidade 🍪</h4>
		<p style="font-size: 0.85rem; line-height: 1.4; color: var(--text-muted);">
			Utilizamos cookies essenciais e tecnologias semelhantes para garantir o funcionamento correto e de alto desempenho do portal "Silêncios da Saúde", de acordo com a LGPD.
		</p>
	</div>
	<div style="display: flex; gap: 12px; align-items: center;">
		<a href="<?php echo esc_url( home_url('/politica-de-privacidade') ); ?>" style="font-size: 0.85rem; text-decoration: underline; color: var(--text-color);">Ver Política</a>
		<button id="cookie-accept" class="btn btn-primary" style="padding: 6px 16px; font-size: 0.85rem;">Aceitar Todos</button>
	</div>
</div>

<!-- 2. WIDGET ASSISTENTE LUNA -->
<div class="luna-widget">
	<button id="luna-toggle" class="luna-btn" aria-label="Abrir conversa com Luna" aria-expanded="false" aria-controls="luna-chat-box">
		💬
	</button>
	
	<div id="luna-chat-box" class="luna-chat-window glassmorphism">
		<div class="luna-header">
			<div class="luna-avatar">👩‍⚕️</div>
			<div>
				<h4 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--text-dark);">Luna</h4>
				<span style="font-size: 0.75rem; color: var(--text-dark); opacity: 0.8;">Assistente Virtual de Saúde</span>
			</div>
			<button id="luna-close" style="margin-left: auto; background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: var(--text-dark);" aria-label="Fechar chat">&times;</button>
		</div>
		
		<div id="luna-chat-messages" class="luna-messages">
			<div class="msg msg-bot">
				Olá! Eu sou a Luna, sua assistente virtual de saúde. Aqui podemos conversar de forma segura e anônima sobre puberdade, menstruação, corpo e sentimentos. Como posso te ajudar hoje?
			</div>
		</div>
		
		<div class="luna-input-area">
			<input type="text" id="luna-input" placeholder="Digite sua pergunta aqui..." aria-label="Mensagem para a Luna" autocomplete="off">
			<button id="luna-send" aria-label="Enviar mensagem">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="22" y1="2" x2="11" y2="13"></line>
					<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
				</svg>
			</button>
		</div>
	</div>
</div>

<?php wp_footer(); ?>
</body>
</html>
