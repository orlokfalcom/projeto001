/**
 * Lógica JavaScript global do tema Silêncios da Saúde
 */

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initMobileNav();
    initCookieBanner();
    initScrollToTop();
});

/**
 * Inicialização e controle do Dark Mode
 */
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggle.setAttribute('aria-label', 'Ativar modo claro');
            themeToggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
        } else {
            document.documentElement.classList.remove('dark');
            themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
            themeToggle.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        }
    };

    // Verificar preferência anterior salva
    const savedTheme = localStorage.getItem('theme');
    
    // Verificar preferência do sistema se não houver preferência salva
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    applyTheme(initialTheme);

    // Event listener para clique no toggle
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const nextTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        applyTheme(nextTheme);
    });
}

/**
 * Controle de navegação mobile
 */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger-toggle');
    const mobileNav = document.getElementById('mobile-navigation');
    
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNav.classList.toggle('open');
        const isOpen = mobileNav.classList.contains('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        
        // Alternar ícone do hamburger para fechar (X)
        if (isOpen) {
            hamburger.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;
        } else {
            hamburger.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        }
    });

    // Fechar menu mobile se clicar fora ou redimensionar a tela
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            mobileNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            mobileNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Cookie Banner da LGPD
 */
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    
    if (!banner || !acceptBtn) return;

    // Verificar se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem('lgpd-cookies-accepted');
    if (!cookiesAccepted) {
        banner.classList.add('visible');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('lgpd-cookies-accepted', 'true');
        banner.classList.remove('visible');
        // Aqui poderiam carregar scripts de tracking adicionais se consentido
        loadAnalytics();
    });
}

function loadAnalytics() {
    // Simulação do carregamento do Google Analytics 4
    console.log("LGPD aceita. Carregando Google Analytics e GTM...");
}

/**
 * Botão flutuante Scroll to Top
 */
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'icon-btn scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '24px';
    scrollToTopBtn.style.left = '24px';
    scrollToTopBtn.style.zIndex = '999';
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.pointerEvents = 'none';
    scrollToTopBtn.style.transition = 'opacity 0.3s';
    scrollToTopBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
