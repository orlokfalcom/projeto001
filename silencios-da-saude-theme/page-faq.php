<?php
/**
 * Template Name: FAQ (Dúvidas Frequentes)
 *
 * @package Silêncios_da_Saúde
 */

get_header();

// Banco de dados em memória para as dúvidas frequentes
$faq_items = array(
	array(
		'pergunta' => 'Com qual idade a primeira menstruação costuma acontecer?',
		'resposta' => 'A primeira menstruação (chamada de menarca) costuma acontecer entre os 10 e 15 anos. No entanto, isso varia muito de menina para menina, dependendo da genética e do desenvolvimento biológico individual.',
		'categoria' => 'menstruacao'
	),
	array(
		'pergunta' => 'É normal ter o ciclo menstrual desregulado nos primeiros anos?',
		'resposta' => 'Sim! Nos primeiros dois anos após a menarca, é perfeitamente normal que a menstruação atrase ou venha mais de uma vez no mesmo mês. Isso ocorre porque o sistema hormonal ainda está amadurecendo.',
		'categoria' => 'menstruacao'
	),
	array(
		'pergunta' => 'Como posso aliviar cólicas leves de forma natural?',
		'resposta' => 'Bolsas de água morna na região do ventre, chás quentes (como de camomila ou erva-doce), hidratação adequada, alongamentos e banho morno ajudam a relaxar a musculatura uterina e aliviam a dor.',
		'categoria' => 'saude-intima'
	),
	array(
		'pergunta' => 'O broto mamário pode doer? É normal crescer um lado antes?',
		'resposta' => 'Sim, ambos são normais! O surgimento do broto mamário (primeiro sinal de crescimento dos seios) costuma causar dor ou sensibilidade ao toque. É muito comum também que um seio cresça mais rápido que o outro durante a puberdade.',
		'categoria' => 'puberdade'
	),
	array(
		'pergunta' => 'A vacina do HPV é mesmo segura? Quantas doses são necessárias?',
		'resposta' => 'Sim, a vacina contra o HPV é extremamente segura, testada internacionalmente e previne contra os vírus causadores do câncer de colo de útero. No Brasil, o SUS adotou o esquema de dose única para adolescentes de 9 a 14 anos.',
		'categoria' => 'saude-intima'
	),
	array(
		'pergunta' => 'Por que meu humor oscila tanto antes de menstruar?',
		'resposta' => 'Trata-se da TPM (Tensão Pré-Menstrual). A queda rápida de hormônios como estrogênio e progesterona afeta os níveis de serotonina (neurotransmissor do humor), gerando irritabilidade ou sensibilidade temporária.',
		'categoria' => 'puberdade'
	),
	array(
		'pergunta' => 'O absorvente interno pode se perder dentro da vagina?',
		'resposta' => 'Não! O canal vaginal termina na entrada do colo do útero, que possui uma abertura minúscula por onde passa apenas o sangue menstrual ou fluidos microscópicos. O absorvente não consegue passar dessa barreira.',
		'categoria' => 'saude-intima'
	),
	array(
		'pergunta' => 'Como posso conversar sobre menstruação com meus pais ou responsáveis?',
		'resposta' => 'Procure um momento calmo em que vocês estejam tranquilos. Você pode começar dizendo que tem algumas dúvidas sobre o seu corpo crescendo e gostaria de conversar. Lembre-se: menstruação é algo natural, seus responsáveis já passaram por isso!',
		'categoria' => 'puberdade'
	)
);
?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Perguntas Frequentes (FAQ)</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Tire suas dúvidas rápidas sobre corpo, puberdade, menstruação e saúde. Digite o tema ou filtre por categoria.
		</p>
	</header>

	<!-- SEARCH AND FILTER -->
	<section class="mb-8 max-w-2xl mx-auto" style="max-width: 700px; margin: 0 auto 3rem;">
		<div class="search-wrapper mb-4">
			<input type="text" id="faq-search" class="search-input" style="width: 100%;" placeholder="Digite uma palavra-chave para buscar respostas..." aria-label="Pesquisar perguntas frequentes">
		</div>
		
		<div class="filter-pills" id="faq-pills" style="justify-content: center;">
			<button class="pill active" data-filter="all">Todas</button>
			<button class="pill" data-filter="menstruacao">Ciclo Menstrual</button>
			<button class="pill" data-filter="puberdade">Puberdade & Corpo</button>
			<button class="pill" data-filter="saude-intima">Saúde Íntima</button>
		</div>
	</section>

	<!-- FAQ ACCORDIONS LIST -->
	<section class="max-w-2xl mx-auto" style="max-width: 700px; margin: 0 auto;" id="faq-list">
		<?php foreach ( $faq_items as $item ) : ?>
			<details class="accordion-item glassmorphism faq-item-card" data-category="<?php echo esc_attr( $item['categoria'] ); ?>">
				<summary class="faq-question-text"><?php echo esc_html( $item['pergunta'] ); ?></summary>
				<p class="faq-answer-text"><?php echo esc_html( $item['resposta'] ); ?></p>
			</details>
		<?php endforeach; ?>

		<!-- Mensagem de feedback caso busca não encontre resultados -->
		<div id="faq-no-results" class="card glassmorphism text-center py-10" style="display: none;">
			<div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
			<h4>Nenhuma pergunta encontrada</h4>
			<p class="text-muted dark:text-text-light/70">Tente buscar por termos simples como "brotos", "cólicas" ou "vacina".</p>
		</div>
	</section>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('faq-search');
	const pills = document.querySelectorAll('#faq-pills .pill');
	const items = document.querySelectorAll('.faq-item-card');
	const noResults = document.getElementById('faq-no-results');

	let activeFilter = 'all';
	let searchQuery = '';

	const filterFAQ = () => {
		let visibleCount = 0;
		
		items.forEach(item => {
			const category = item.getAttribute('data-category');
			const question = item.querySelector('.faq-question-text').textContent.toLowerCase();
			const answer = item.querySelector('.faq-answer-text').textContent.toLowerCase();
			
			const matchesCategory = (activeFilter === 'all' || category === activeFilter);
			const matchesSearch = (question.includes(searchQuery) || answer.includes(searchQuery));

			if (matchesCategory && matchesSearch) {
				item.style.display = 'block';
				visibleCount++;
			} else {
				item.style.display = 'none';
			}
		});

		if (visibleCount === 0) {
			noResults.style.display = 'block';
		} else {
			noResults.style.display = 'none';
		}
	};

	// Evento de Digitação com Debounce
	let debounceTimeout;
	searchInput.addEventListener('input', (e) => {
		clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			searchQuery = e.target.value.toLowerCase().trim();
			filterFAQ();
		}, 250);
	});

	// Evento de Clique nas Categorias (Pills)
	pills.forEach(pill => {
		pill.addEventListener('click', () => {
			pills.forEach(p => p.classList.remove('active'));
			pill.classList.add('active');
			activeFilter = pill.getAttribute('data-filter');
			filterFAQ();
		});
	});
});
</script>

<?php
get_footer();
