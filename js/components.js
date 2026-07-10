/**
 * Componentes Globais Reutilizáveis - Silêncios da Saúde
 * Injeta Header, Footer, Luna Widget e Cookie Banner em todas as páginas.
 */

(function() {
    // Detectar a página ativa pelo caminho
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
        { href: 'sobre.html',           label: 'Sobre' },
        { href: 'objetivos.html',       label: 'Objetivos' },
        { href: 'saude-feminina.html',  label: 'Saúde Feminina' },
        { href: 'mitos-e-verdades.html',label: 'Mitos' },
        { href: 'quiz.html',            label: 'Quiz' },
        { href: 'estatisticas.html',    label: 'Dados' },
        { href: 'biblioteca.html',      label: 'Biblioteca' },
        { href: 'faq.html',             label: 'FAQ' },
        { href: 'contato.html',         label: 'Contato' },
    ];

    const allNavLinks = [
        { href: 'sobre.html',           label: 'Sobre o Projeto' },
        { href: 'objetivos.html',       label: 'Objetivos' },
        { href: 'saude-feminina.html',  label: 'Saúde Feminina' },
        { href: 'mitos-e-verdades.html',label: 'Mitos e Verdades' },
        { href: 'quiz.html',            label: 'Quiz' },
        { href: 'estatisticas.html',    label: 'Estatísticas' },
        { href: 'biblioteca.html',      label: 'Biblioteca' },
        { href: 'faq.html',             label: 'FAQ' },
        { href: 'linha-do-tempo.html',  label: 'Linha do Tempo' },
        { href: 'pesquisa.html',        label: 'Metodologia' },
        { href: 'professor.html',       label: 'Área do Professor' },
        { href: 'aluno.html',           label: 'Portal do Aluno' },
        { href: 'contato.html',         label: 'Contato' },
    ];

    // === HEADER ===
    const headerEl = document.getElementById('header-placeholder');
    if (headerEl) {
        const desktopLinks = navLinks.map(l =>
            `<li><a class="nav-link${currentPage === l.href ? ' active' : ''}" href="${l.href}">${l.label}</a></li>`
        ).join('');

        const mobileLinks = allNavLinks.map(l =>
            `<li><a class="nav-link" style="font-size:1.2rem;" href="${l.href}">${l.label}</a></li>`
        ).join('');

        headerEl.innerHTML = `
<a class="skip-link sr-only" href="#content">Pular para o conteúdo</a>
<header id="masthead" class="site-header glassmorphism">
    <div class="container header-container">
        <div class="site-branding">
            <a href="index.html" class="logo-text">Silêncios da Saúde</a>
        </div>
        <nav id="site-navigation" class="main-navigation" aria-label="Menu Principal">
            <ul class="nav-menu">${desktopLinks}</ul>
        </nav>
        <div class="header-actions">
            <button id="theme-toggle" class="icon-btn" aria-label="Alternar Modo Escuro" aria-live="polite"></button>
            <button id="hamburger-toggle" class="icon-btn hamburger" aria-label="Abrir Menu Principal" aria-expanded="false" aria-controls="mobile-navigation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</header>
<div id="mobile-navigation" class="mobile-nav glassmorphism">
    <ul style="list-style:none;display:flex;flex-direction:column;gap:16px;">${mobileLinks}</ul>
</div>`;
    }

    // === FOOTER + WIDGETS ===
    const footerEl = document.getElementById('footer-placeholder');
    if (footerEl) {
        footerEl.innerHTML = `
<footer id="colophon" class="site-footer glassmorphism py-10" style="margin-top:5rem;border-top:1px solid var(--border-color);">
    <div class="container" style="display:flex;flex-direction:column;gap:32px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:24px;">
            <div style="flex:1;min-width:250px;">
                <h2 class="logo-text" style="font-size:1.5rem;margin-bottom:8px;">Silêncios da Saúde</h2>
                <p style="font-size:0.95rem;max-width:320px;color:var(--text-muted);">Uma plataforma educativa focada em quebrar tabus e fornecer conhecimento científico real sobre saúde feminina para adolescentes.</p>
            </div>
            <div style="min-width:150px;">
                <h3 style="font-size:1rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:16px;">Links Rápidos</h3>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.9rem;">
                    <li><a href="sobre.html">Sobre o Projeto</a></li>
                    <li><a href="saude-feminina.html">Saúde Feminina</a></li>
                    <li><a href="mitos-e-verdades.html">Mitos e Verdades</a></li>
                    <li><a href="quiz.html">Quiz Educativo</a></li>
                    <li><a href="biblioteca.html">Biblioteca</a></li>
                </ul>
            </div>
            <div style="min-width:150px;">
                <h3 style="font-size:1rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:16px;">Área Restrita</h3>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:0.9rem;">
                    <li><a href="professor.html">Área do Professor</a></li>
                    <li><a href="aluno.html">Portal do Aluno</a></li>
                    <li><a href="pesquisa.html">Metodologia</a></li>
                    <li><a href="contato.html">Fale Conosco</a></li>
                </ul>
            </div>
            <div style="min-width:200px;">
                <h3 style="font-size:1rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:16px;">Siga-nos</h3>
                <div style="display:flex;gap:12px;">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="Instagram">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="YouTube">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
            </div>
        </div>
        <hr style="border:0;border-top:1px solid var(--border-color);margin:0;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:0.85rem;color:var(--text-muted);">
            <p>&copy; 2026 Silêncios da Saúde. Todos os direitos reservados.</p>
            <p>Desenvolvido de acordo com as normas científicas e éticas de saúde.</p>
        </div>
    </div>
</footer>

<!-- COOKIE BANNER LGPD -->
<div id="cookie-banner" class="cookie-banner glassmorphism card">
    <div style="flex:1;min-width:250px;">
        <h4 style="font-size:1rem;margin-bottom:4px;font-weight:700;">Valorizamos sua Privacidade 🍪</h4>
        <p style="font-size:0.85rem;line-height:1.4;color:var(--text-muted);">
            Utilizamos cookies essenciais para garantir o funcionamento do portal, de acordo com a LGPD.
        </p>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
        <button id="cookie-accept" class="btn btn-primary" style="padding:6px 16px;font-size:0.85rem;">Aceitar Todos</button>
    </div>
</div>

<!-- WIDGET ASSISTENTE LUNA -->
<div class="luna-widget">
    <button id="luna-toggle" class="luna-btn" aria-label="Abrir conversa com Luna" aria-expanded="false" aria-controls="luna-chat-box">💬</button>
    <div id="luna-chat-box" class="luna-chat-window glassmorphism">
        <div class="luna-header">
            <div class="luna-avatar">👩‍⚕️</div>
            <div>
                <h4 style="margin:0;font-size:0.95rem;font-weight:700;color:var(--text-dark);">Luna</h4>
                <span style="font-size:0.75rem;color:var(--text-dark);opacity:0.8;">Assistente Virtual de Saúde</span>
            </div>
            <button id="luna-close" style="margin-left:auto;background:transparent;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-dark);" aria-label="Fechar chat">&times;</button>
        </div>
        <div id="luna-chat-messages" class="luna-messages">
            <div class="msg msg-bot">Olá! Eu sou a Luna, sua assistente virtual de saúde. Aqui podemos conversar de forma segura sobre puberdade, menstruação, corpo e sentimentos. Como posso te ajudar?</div>
        </div>
        <div class="luna-input-area">
            <input type="text" id="luna-input" placeholder="Digite sua pergunta aqui..." aria-label="Mensagem para a Luna" autocomplete="off">
            <button id="luna-send" aria-label="Enviar mensagem">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
        </div>
    </div>
</div>`;
    }
})();
