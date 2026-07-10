<?php
/**
 * Template Name: Estatísticas e Dados
 *
 * @package Silêncios_da_Saúde
 */

get_header(); ?>

<main id="primary" class="site-main container py-10">
	<header class="page-header mb-12 text-center animate-fade-in-up">
		<h1 class="page-title text-4xl font-bold mb-2">Estatísticas da Pesquisa</h1>
		<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
			Visualize os resultados analíticos obtidos através da aplicação de questionários anônimos em escolas locais sobre saúde menstrual.
		</p>
	</header>

	<!-- DASHBOARD CARDS -->
	<section class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
		<!-- Card 1 -->
		<div class="card glassmorphism text-center" style="border-bottom: 4px solid var(--purple-light);">
			<span style="font-size: 0.95rem; text-transform: uppercase; color: var(--text-muted);">Total de Respostas</span>
			<h2 style="font-size: 2.8rem; font-weight: 800; margin: 8px 0 0 0; color: var(--purple-light);">1.248</h2>
			<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Alunas de escolas públicas</p>
		</div>

		<!-- Card 2 -->
		<div class="card glassmorphism text-center" style="border-bottom: 4px solid var(--mint);">
			<span style="font-size: 0.95rem; text-transform: uppercase; color: var(--text-muted);">Letramento Menstrual</span>
			<h2 style="font-size: 2.8rem; font-weight: 800; margin: 8px 0 0 0; color: var(--mint);">34%</h2>
			<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Possuem baixo conhecimento inicial</p>
		</div>

		<!-- Card 3 -->
		<div class="card glassmorphism text-center" style="border-bottom: 4px solid var(--blue-scientific);">
			<span style="font-size: 0.95rem; text-transform: uppercase; color: var(--text-muted);">Pobreza Menstrual</span>
			<h2 style="font-size: 2.8rem; font-weight: 800; margin: 8px 0 0 0; color: var(--blue-scientific);">1 em 4</h2>
			<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Já faltou à escola por falta de absorventes</p>
		</div>
	</section>

	<!-- FILTERS -->
	<section class="card glassmorphism mb-12" style="padding: 1.5rem;">
		<h3 class="text-lg font-bold mb-4">Filtrar Indicadores (Demonstrativo)</h3>
		<div style="display: flex; gap: 16px; flex-wrap: wrap;">
			<div style="flex: 1; min-width: 180px;">
				<label for="filter-age" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Faixa Etária</label>
				<select id="filter-age" class="search-input" style="width: 100%; border-radius: 8px; padding: 8px 12px; font-size: 0.9rem;">
					<option value="all">Todas as idades</option>
					<option value="9-11">9 a 11 anos</option>
					<option value="12-14">12 a 14 anos</option>
					<option value="15-18">15 a 18 anos</option>
				</select>
			</div>
			
			<div style="flex: 1; min-width: 180px;">
				<label for="filter-school" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Rede de Ensino</label>
				<select id="filter-school" class="search-input" style="width: 100%; border-radius: 8px; padding: 8px 12px; font-size: 0.9rem;">
					<option value="all">Todas as Escolas</option>
					<option value="publica-est">Escolas Estaduais</option>
					<option value="publica-mun">Escolas Municipais</option>
				</select>
			</div>

			<div style="flex: 1; min-width: 180px;">
				<label for="filter-grade" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px;">Ano Escolar</label>
				<select id="filter-grade" class="search-input" style="width: 100%; border-radius: 8px; padding: 8px 12px; font-size: 0.9rem;">
					<option value="all">Todos os anos</option>
					<option value="6-7">6º e 7º ano EF</option>
					<option value="8-9">8º e 9º ano EF</option>
					<option value="1-3-em">1º ao 3º ano EM</option>
				</select>
			</div>
		</div>
	</section>

	<!-- CHARTS SECTIONS -->
	<section class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Gráfico de Pizza: Faixa Etária -->
		<div class="card glassmorphism text-center">
			<h3 class="text-xl font-bold mb-6">Distribuição de Respostas por Idade</h3>
			<div style="display: flex; justify-content: center; align-items: center; min-height: 200px; position: relative;">
				<svg width="220" height="220" viewBox="0 0 36 36" style="transform: rotate(-90deg); overflow: visible;">
					<!-- Pie slices using dasharray/dashoffset -->
					<!-- Total = 100% -->
					<!-- 9 a 11 anos: 20% (cor rosa) -->
					<circle cx="18" cy="18" r="15.915" fill="none" stroke="#FADADD" stroke-width="4.2" stroke-dasharray="20 80" stroke-dashoffset="0"/>
					<!-- 12 a 14 anos: 55% (cor lilás) -->
					<circle cx="18" cy="18" r="15.915" fill="none" stroke="#CDB4DB" stroke-width="4.2" stroke-dasharray="55 45" stroke-dashoffset="-20"/>
					<!-- 15 a 18 anos: 25% (cor azul) -->
					<circle cx="18" cy="18" r="15.915" fill="none" stroke="#B8D4E3" stroke-width="4.2" stroke-dasharray="25 75" stroke-dashoffset="-75"/>
				</svg>
			</div>
			<!-- Legendas -->
			<div style="display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap; font-size: 0.85rem;">
				<span style="display: flex; align-items: center; gap: 6px;"><span style="width:12px; height:12px; background:#FADADD; border-radius:3px; display:inline-block;"></span>9-11 anos (20%)</span>
				<span style="display: flex; align-items: center; gap: 6px;"><span style="width:12px; height:12px; background:#CDB4DB; border-radius:3px; display:inline-block;"></span>12-14 anos (55%)</span>
				<span style="display: flex; align-items: center; gap: 6px;"><span style="width:12px; height:12px; background:#B8D4E3; border-radius:3px; display:inline-block;"></span>15-18 anos (25%)</span>
			</div>
		</div>

		<!-- Gráfico de Barras: Acertos por Tema -->
		<div class="card glassmorphism">
			<h3 class="text-xl font-bold mb-6 text-center">Acertos por Tema (%)</h3>
			<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px;">
				<!-- Tema 1 -->
				<div>
					<div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">
						<span>Higiene Íntima Básica</span>
						<span>88%</span>
					</div>
					<div style="height: 10px; background: rgba(0,0,0,0.1); border-radius: 5px; overflow: hidden;">
						<div style="width: 88%; height: 100%; background: var(--mint);"></div>
					</div>
				</div>

				<!-- Tema 2 -->
				<div>
					<div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">
						<span>Ciclo e Hormônios</span>
						<span>45%</span>
					</div>
					<div style="height: 10px; background: rgba(0,0,0,0.1); border-radius: 5px; overflow: hidden;">
						<div style="width: 45%; height: 100%; background: #FAADB3;"></div>
					</div>
				</div>

				<!-- Tema 3 -->
				<div>
					<div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">
						<span>Vacinação HPV</span>
						<span>72%</span>
					</div>
					<div style="height: 10px; background: rgba(0,0,0,0.1); border-radius: 5px; overflow: hidden;">
						<div style="width: 72%; height: 100%; background: var(--blue-scientific);"></div>
					</div>
				</div>

				<!-- Tema 4 -->
				<div>
					<div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">
						<span>Métodos Contraceptivos</span>
						<span>58%</span>
					</div>
					<div style="height: 10px; background: rgba(0,0,0,0.1); border-radius: 5px; overflow: hidden;">
						<div style="width: 58%; height: 100%; background: var(--purple-light);"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Gráfico de Linha: Evolução Temporal -->
		<div class="card glassmorphism md:col-span-2">
			<h3 class="text-xl font-bold mb-6 text-center">Frequência de Dúvidas ao longo dos meses de aula</h3>
			<div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color);">
				<svg viewBox="0 0 800 250" width="100%" height="200" style="overflow: visible;">
					<!-- Eixos -->
					<line x1="50" y1="210" x2="760" y2="210" stroke="var(--text-color)" stroke-width="1.5"/>
					<line x1="50" y1="20" x2="50" y2="210" stroke="var(--text-color)" stroke-width="1.5"/>
					<!-- Grid lines -->
					<line x1="50" y1="140" x2="760" y2="140" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="5 5"/>
					<line x1="50" y1="70" x2="760" y2="70" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="5 5"/>
					<!-- Linha de Evolução -->
					<path d="M50,180 Q160,190 280,110 T520,60 T760,130" fill="none" stroke="var(--purple-light)" stroke-width="3.5"/>
					<!-- Pontos de dados -->
					<circle cx="50" cy="180" r="5" fill="var(--purple-light)"/>
					<circle cx="280" cy="110" r="5" fill="var(--purple-light)"/>
					<circle cx="520" cy="60" r="5" fill="var(--purple-light)"/>
					<circle cx="760" cy="130" r="5" fill="var(--purple-light)"/>
					<!-- Legendas X -->
					<text x="50" y="230" fill="var(--text-muted)" font-size="11" text-anchor="middle">Março</text>
					<text x="280" y="230" fill="var(--text-muted)" font-size="11" text-anchor="middle">Junho</text>
					<text x="520" y="230" fill="var(--text-muted)" font-size="11" text-anchor="middle">Setembro</text>
					<text x="760" y="230" fill="var(--text-muted)" font-size="11" text-anchor="middle">Dezembro</text>
					<!-- Legenda Linha -->
					<text x="540" y="50" fill="var(--purple-light)" font-size="11" font-weight="bold">Índice de Dúvidas sobre Corpo</text>
				</svg>
			</div>
		</div>
	</section>
</main>

<?php
get_footer();
