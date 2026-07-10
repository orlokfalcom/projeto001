/**
 * JavaScript Global — Viva Bem, Menina!
 * Portal Educativo de Saúde Feminina
 */

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initMobileNav();
    initCookieBanner();
    initScrollToTop();
    initScrollAnimations();
    initHeaderScroll();
    initGlobalSearch();
    initHeroParticles();
    setActiveNavLink();
});

/* ─────────────────────────────────────────────────────────────
   DARK MODE
───────────────────────────────────────────────────────────── */
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const SUN_ICON = `
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1"  x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;

    const MOON_ICON = `
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            themeToggle.setAttribute('aria-label', 'Ativar modo claro');
            themeToggle.innerHTML = SUN_ICON;
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
            themeToggle.innerHTML = MOON_ICON;
        }
    };

    const savedTheme = localStorage.getItem('vbm-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem('vbm-theme', next);
        applyTheme(next);
    });
}

/* ─────────────────────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────────────────────── */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger-toggle');
    const mobileNav = document.getElementById('mobile-navigation');
    if (!hamburger || !mobileNav) return;

    const MENU_ICON = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6"  x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>`;

    const CLOSE_ICON = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6"  y1="6" x2="18" y2="18"></line>
        </svg>`;

    const setOpen = (open) => {
        mobileNav.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        hamburger.innerHTML = open ? CLOSE_ICON : MENU_ICON;
        document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!mobileNav.classList.contains('open'));
    });

    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            setOpen(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) setOpen(false);
    });
}

/* ─────────────────────────────────────────────────────────────
   COOKIE BANNER LGPD
───────────────────────────────────────────────────────────── */
function initCookieBanner() {
    const banner    = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    if (!banner || !acceptBtn) return;

    if (!localStorage.getItem('vbm-cookies-accepted')) {
        setTimeout(() => banner.classList.add('visible'), 1200);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('vbm-cookies-accepted', 'true');
        banner.style.animation = 'none';
        banner.style.opacity   = '0';
        banner.style.transform = 'translateY(20px)';
        banner.style.transition = 'opacity 0.3s, transform 0.3s';
        setTimeout(() => banner.classList.remove('visible'), 300);
        loadAnalytics();
    });
}

function loadAnalytics() {
    // Google Analytics 4 carregado somente após consentimento LGPD
    console.log('[VBM] Consentimento LGPD registrado. Analytics ativado.');
}

/* ─────────────────────────────────────────────────────────────
   SCROLL TO TOP
───────────────────────────────────────────────────────────── */
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.className = 'icon-btn scroll-to-top';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────────────────────────────
   SCROLL ANIMATIONS — Intersection Observer
───────────────────────────────────────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   HEADER SCROLL EFEITO
───────────────────────────────────────────────────────────── */
function initHeaderScroll() {
    const header = document.getElementById('masthead');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   PESQUISA GLOBAL
───────────────────────────────────────────────────────────── */
const PAGES = [
    { icon: '🏠', title: 'Início',          url: 'index.html',         desc: 'Página inicial do portal', tag: 'Página' },
    { icon: '📖', title: 'Sobre o Projeto',  url: 'sobre.html',         desc: 'Introdução, justificativa e hipótese', tag: 'Página' },
    { icon: '🎯', title: 'Objetivos',        url: 'objetivos.html',     desc: 'Objetivo geral e específicos da pesquisa', tag: 'Página' },
    { icon: '🌸', title: 'Saúde Feminina',   url: 'saude-feminina.html',desc: 'Menstruação, puberdade, saúde mental e mais', tag: 'Conteúdo' },
    { icon: '❓', title: 'Mitos e Verdades', url: 'mitos-e-verdades.html', desc: 'Jogo interativo de flip-cards', tag: 'Interativo' },
    { icon: '🏆', title: 'Quiz',             url: 'quiz.html',          desc: 'Quiz educativo com certificado', tag: 'Interativo' },
    { icon: '📊', title: 'Estatísticas',     url: 'estatisticas.html',  desc: 'Dados e gráficos da pesquisa', tag: 'Dados' },
    { icon: '📚', title: 'Biblioteca',       url: 'biblioteca.html',    desc: 'Artigos, cartilhas e materiais educativos', tag: 'Recursos' },
    { icon: '💬', title: 'FAQ',              url: 'faq.html',           desc: 'Perguntas frequentes sobre saúde feminina', tag: 'Ajuda' },
    { icon: '📅', title: 'Linha do Tempo',   url: 'linha-do-tempo.html',desc: 'Marcos da pesquisa científica', tag: 'Pesquisa' },
    { icon: '👩‍🏫', title: 'Área do Professor',url: 'professor.html',     desc: 'Planos de aula e materiais pedagógicos', tag: 'Educador' },
    { icon: '🎓', title: 'Portal da Estudante',url:'aluno.html',        desc: 'Dashboard, certificados e progresso', tag: 'Estudante' },
    { icon: '📬', title: 'Contato',          url: 'contato.html',       desc: 'Formulário de contato e redes sociais', tag: 'Contato' },
];

function initGlobalSearch() {
    const input    = document.getElementById('global-search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!input || !dropdown) return;

    let debounceTimer;

    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const q = input.value.trim().toLowerCase();
            if (q.length < 2) { dropdown.classList.remove('visible'); return; }

            const results = PAGES.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q) ||
                p.tag.toLowerCase().includes(q)
            );

            if (!results.length) {
                dropdown.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:0.88rem;">Nenhum resultado encontrado</div>`;
            } else {
                dropdown.innerHTML = results.map(r => `
                    <a href="${r.url}" class="search-result-item" role="option">
                        <span class="result-icon">${r.icon}</span>
                        <div>
                            <div class="result-title">${highlight(r.title, q)}</div>
                            <div class="result-desc">${r.desc}</div>
                            <span class="result-tag">${r.tag}</span>
                        </div>
                    </a>
                `).join('');
            }
            dropdown.classList.add('visible');
        }, 200);
    });

    input.addEventListener('focus', () => {
        if (input.value.trim().length >= 2) dropdown.classList.add('visible');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper-header')) {
            dropdown.classList.remove('visible');
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { dropdown.classList.remove('visible'); input.blur(); }
    });
}

function highlight(text, query) {
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark style="background:rgba(205,180,219,0.35);border-radius:3px;padding:0 2px;">$1</mark>');
}

/* ─────────────────────────────────────────────────────────────
   PARTÍCULAS HERO (criadas dinamicamente)
───────────────────────────────────────────────────────────── */
function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const PARTICLES = [
        { color: '#FADADD', size: 14, top: '12%', left: '8%',  dur: '9s',  delay: '0s' },
        { color: '#CDB4DB', size: 10, top: '25%', left: '85%', dur: '7s',  delay: '1s' },
        { color: '#98D8C8', size: 18, top: '65%', left: '5%',  dur: '11s', delay: '2s' },
        { color: '#B8D4E3', size: 8,  top: '80%', left: '90%', dur: '8s',  delay: '0.5s' },
        { color: '#FADADD', size: 22, top: '45%', left: '92%', dur: '13s', delay: '3s' },
        { color: '#CDB4DB', size: 12, top: '10%', left: '55%', dur: '10s', delay: '1.5s' },
        { color: '#98D8C8', size: 7,  top: '70%', left: '65%', dur: '6s',  delay: '2.5s' },
        { color: '#e8c8f0', size: 16, top: '35%', left: '3%',  dur: '12s', delay: '0.8s' },
    ];

    PARTICLES.forEach(p => {
        const el = document.createElement('div');
        el.className = 'particle';
        el.style.cssText = `
            width:${p.size}px; height:${p.size}px;
            background:${p.color};
            top:${p.top}; left:${p.left};
            --duration:${p.dur}; --delay:${p.delay};
            filter:blur(1px);
        `;
        container.appendChild(el);
    });

    // Orbs de fundo
    const ORBS = [
        { color: 'rgba(205,180,219,0.18)', size: 400, top: '-10%', left: '-5%',  dur: '15s' },
        { color: 'rgba(250,218,221,0.15)', size: 350, top: '40%',  left: '60%',  dur: '20s' },
        { color: 'rgba(152,216,200,0.12)', size: 300, top: '70%',  left: '-8%',  dur: '18s' },
    ];

    ORBS.forEach(o => {
        const el = document.createElement('div');
        el.className = 'hero-orb';
        el.style.cssText = `
            width:${o.size}px; height:${o.size}px;
            background:${o.color};
            top:${o.top}; left:${o.left};
            --orb-dur:${o.dur};
        `;
        container.appendChild(el);
    });
}

/* ─────────────────────────────────────────────────────────────
   LINK ATIVO NO NAV
───────────────────────────────────────────────────────────── */
function setActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}
