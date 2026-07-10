<?php
/**
 * Template Name: Biblioteca de Recursos
 *
 * @package Silêncios_da_Saúde
 */

get_header();

// Banco de dados de recursos locais
$recursos = array(
	array(
		'titulo' => 'Cartilha da Menstruação Sem Tabus',
		'categoria' => 'cartilhas',
		'descricao' => 'Uma cartilha ilustrada explicativa com tudo o que acontece no ciclo menstrual, higiene ideal e cólicas.',
		'link' => '#',
		'tag' => 'Ciclo Menstrual',
		'formato' => 'PDF (2.4 MB)'
	),
	array(
		'titulo' => 'Manual de Acolhimento sobre Puberdade',
		'categoria' => 'guias',
		'descricao' => 'Guia prático para tirar as principais dúvidas de adolescentes sobre o surgimento do broto mamário, pelos e mudanças corporais.',
		'link' => '#',
		'tag' => 'Puberdade',
		'formato' => 'PDF (1.8 MB)'
	),
	array(
		'titulo' => 'Como Fazer um Diário Menstrual?',
		'categoria' => 'videos',
		'descricao' => 'Vídeo educativo ensinando o passo a passo de como anotar e monitorar seu ciclo para prever TPM e período fértil.',
		'link' => '#',
		'tag' => 'Autocuidado',
		'formato' => 'Vídeo (4 min)'
	),
	array(
		'titulo' => 'Vacinação contra o HPV: Escudo da Vida',
		'categoria' => 'artigos',
		'descricao' => 'Artigo científico acessível detalhando o funcionamento da vacina do HPV e sua alta taxa de prevenção contra cânceres.',
		'link' => '#',
		'tag' => 'Prevenção',
		'formato' => 'Artigo Online'
	),
	array(
		'titulo' => 'Nutrição Inteligente e Alimentação no Ciclo',
		'categoria' => 'guias',
		'descricao' => 'Guia de receitas e alimentos contendo muito ferro e magnésio para comer na semana menstrual e aliviar dores de cólicas.',
		'link' => '#',
		'tag' => 'Nutrição',
		'formato' => 'PDF (1.2 MB)'
	),
	array(
		'titulo' => 'Entendendo a Ansiedade na Adolescência',
		'categoria' => 'artigos',
		'descricao' => 'Estudo e dicas práticas sobre como lidar com picos de ansiedade decorrentes de variações hormonais antes da menstruação.',
		'link' => '#',
		'tag' => 'Saúde Mental',
		'formato' => 'Artigo Online'
	)
);
?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Biblioteca de Recursos</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Acesse gratuitamente nossos materiais de apoio, cartilhas de orientação, vídeos e artigos selecionados sobre saúde feminina.
		</p>
	</header>

	<!-- SEARCH AND FILTER PILLS -->
	<section class="mb-8">
		<div class="search-wrapper">
			<input type="text" id="library-search" class="search-input" placeholder="Pesquise por títulos, temas ou categorias..." aria-label="Pesquisar recursos">
		</div>
		
		<div class="filter-pills" id="library-pills">
			<button class="pill active" data-filter="all">Todos</button>
			<button class="pill" data-filter="artigos">Artigos</button>
			<button class="pill" data-filter="cartilhas">Cartilhas</button>
			<button class="pill" data-filter="guias">Guias</button>
			<button class="pill" data-filter="videos">Vídeos</button>
		</div>
	</section>

	<!-- RESOURCES GRID -->
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" id="library-grid">
		<?php foreach ( $recursos as $item ) : ?>
			<div class="card glassmorphism library-card" data-category="<?php echo esc_attr( $item['categoria'] ); ?>" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 250px;">
				<div>
					<span style="font-size: 0.75rem; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; background: var(--purple-light); color: var(--text-dark); font-weight: 700; display: inline-block; margin-bottom: 12px;">
						<?php echo esc_html( $item['tag'] ); ?>
					</span>
					<h3 class="text-xl font-bold mb-2 resource-title"><?php echo esc_html( $item['titulo'] ); ?></h3>
					<p class="text-muted dark:text-text-light/70" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">
						<?php echo esc_html( $item['descricao'] ); ?>
					</p>
				</div>
				<div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 12px;">
					<span style="font-size: 0.8rem; color: var(--text-muted);"><?php echo esc_html( $item['formato'] ); ?></span>
					<button class="btn btn-outline open-modal-btn" style="padding: 4px 12px; font-size: 0.85rem;" data-title="<?php echo esc_attr( $item['titulo'] ); ?>" data-desc="<?php echo esc_attr( $item['descricao'] ); ?>" data-format="<?php echo esc_attr( $item['formato'] ); ?>">
						Visualizar
					</button>
				</div>
			</div>
		<?php endforeach; ?>
	</section>

	<!-- MODAL DE VISUALIZAÇÃO -->
	<div id="library-modal" class="luna-chat-window glassmorphism" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 500px; height: auto; display: none; flex-direction: column; border-radius: 20px; z-index: 100000; box-shadow: 0 20px 50px rgba(0,0,0,0.3); border: 1.5px solid var(--border-color);">
		<div class="luna-header">
			<div class="luna-avatar">📚</div>
			<div style="flex:1;">
				<h4 style="margin: 0; font-size: 0.95rem; font-weight: 700; color: var(--text-dark);">Visualização de Recurso</h4>
			</div>
			<button id="modal-close" style="background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-dark);">&times;</button>
		</div>
		<div style="padding: 24px; background: var(--bg-main);">
			<h3 id="modal-title" class="text-xl font-bold mb-4" style="line-height:1.35;">Título do Recurso</h3>
			<p id="modal-desc" class="text-muted dark:text-text-light/80 mb-6" style="font-size:0.95rem; line-height:1.6;">Descrição completa...</p>
			
			<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
				<span id="modal-format" style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">Formato: PDF</span>
				<a href="#" class="btn btn-primary" id="modal-download-btn" style="padding: 8px 24px;">Fazer Download</a>
			</div>
		</div>
	</div>

	<!-- Overlay do Modal -->
	<div id="modal-overlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); z-index: 99999; display: none;"></div>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('library-search');
	const pills = document.querySelectorAll('#library-pills .pill');
	const cards = document.querySelectorAll('.library-card');
	const grid = document.getElementById('library-grid');

	// Lógica de Filtro e Busca integrada
	let activeFilter = 'all';
	let searchQuery = '';

	const filterLibrary = () => {
		let visibleCount = 0;
		cards.forEach(card => {
			const category = card.getAttribute('data-category');
			const title = card.querySelector('.resource-title').textContent.toLowerCase();
			const desc = card.querySelector('p').textContent.toLowerCase();
			
			const matchesCategory = (activeFilter === 'all' || category === activeFilter);
			const matchesSearch = (title.includes(searchQuery) || desc.includes(searchQuery));

			if (matchesCategory && matchesSearch) {
				card.style.display = 'flex';
				visibleCount++;
			} else {
				card.style.display = 'none';
			}
		});
	};

	// Evento Search com Debounce simples
	let debounceTimeout;
	searchInput.addEventListener('input', (e) => {
		clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			searchQuery = e.target.value.toLowerCase().trim();
			filterLibrary();
		}, 300);
	});

	// Evento de Clique nas Pills
	pills.forEach(pill => {
		pill.addEventListener('click', () => {
			pills.forEach(p => p.classList.remove('active'));
			pill.classList.add('active');
			activeFilter = pill.getAttribute('data-filter');
			filterLibrary();
		});
	});

	// MODAL CONTROLS
	const modal = document.getElementById('library-modal');
	const overlay = document.getElementById('modal-overlay');
	const modalClose = document.getElementById('modal-close');
	
	const modalTitle = document.getElementById('modal-title');
	const modalDesc = document.getElementById('modal-desc');
	const modalFormat = document.getElementById('modal-format');
	const modalDownloadBtn = document.getElementById('modal-download-btn');

	const openModal = (btn) => {
		modalTitle.textContent = btn.getAttribute('data-title');
		modalDesc.textContent = btn.getAttribute('data-desc');
		modalFormat.textContent = 'Tipo: ' + btn.getAttribute('data-format');
		
		modal.style.display = 'flex';
		overlay.style.display = 'block';
	};

	const closeModal = () => {
		modal.style.display = 'none';
		overlay.style.display = 'none';
	};

	document.querySelectorAll('.open-modal-btn').forEach(btn => {
		btn.addEventListener('click', () => openModal(btn));
	});

	modalClose.addEventListener('click', closeModal);
	overlay.addEventListener('click', closeModal);
	modalDownloadBtn.addEventListener('click', (e) => {
		e.preventDefault();
		alert('Fazer download deste material educacional (simulado).');
		closeModal();
	});
});
</script>

<?php
get_footer();
