<?php
/**
 * Template Name: Saúde Feminina
 *
 * @package Silêncios_da_Saúde
 */

get_header();

// Banco de dados em memória para os 9 tópicos da saúde feminina
$topicos_data = array(
	'menstruacao' => array(
		'titulo' => 'Menstruação e Ciclo Menstrual',
		'emoji' => '🩸',
		'descricao' => 'Compreender o ciclo menstrual é o primeiro passo para o autoconhecimento. Ele não se resume apenas aos dias de sangramento, mas a todo um ciclo hormonal que prepara o seu corpo mensalmente.',
		'conteudo' => '
			<p>A menstruação é a descamação periódica do endométrio, a camada interna do útero. Ela acontece quando não ocorre a fecundação do óvulo. O ciclo completo começa no primeiro dia da menstruação e termina no primeiro dia da menstruação seguinte.</p>
			<h4 class="font-bold my-4 text-lg">As 3 Fases Principais do Ciclo:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Fase Folicular:</strong> Do 1º dia até a ovulação. Os níveis de estrogênio começam a subir, e novos folículos crescem nos ovários.</li>
				<li><strong>Fase Ovulatória (Período Fértil):</strong> Geralmente na metade do ciclo. O óvulo é liberado para a trompa. É comum sentir um muco úmido e elástico.</li>
				<li><strong>Fase Lútea:</strong> Após a ovulação. A progesterona aumenta para preparar o útero. Se não houver gravidez, os hormônios caem, iniciando o fluxo.</li>
			</ul>
		',
		'curiosidade' => 'Você sabia que a cólica leve é normal, mas dores severas que te impedem de ir à escola ou trabalhar podem indicar problemas como endometriose? Fale sempre com um ginecologista se a dor for excessiva.',
		'grafico_titulo' => 'Flutuação Hormonal durante o Ciclo (28 dias)',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<!-- Eixos -->
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<line x1="40" y1="20" x2="40" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<!-- Linha Estrogênio -->
				<path d="M40,150 Q160,140 250,50 T460,150" fill="none" stroke="var(--purple-light)" stroke-width="3"/>
				<!-- Linha Progesterona -->
				<path d="M40,160 Q230,160 350,60 T460,160" fill="none" stroke="var(--pink-light)" stroke-width="3"/>
				<!-- Legendas -->
				<text x="50" y="190" fill="var(--text-muted)" font-size="10">Dia 1</text>
				<text x="240" y="190" fill="var(--text-muted)" font-size="10">Dia 14 (Ovulação)</text>
				<text x="430" y="190" fill="var(--text-muted)" font-size="10">Dia 28</text>
				<text x="410" y="45" fill="var(--purple-light)" font-size="10" font-weight="bold">Estrogênio</text>
				<text x="410" y="75" fill="var(--pink-light)" font-size="10" font-weight="bold">Progesterona</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Qual a cor normal do sangue menstrual?', 'r' => 'O sangue pode variar de vermelho vivo a marrom escuro (semelhante a borra de café), que é comum no início ou final do ciclo devido à oxidação natural.'),
			array('p' => 'O ciclo menstrual pode atrasar por estresse?', 'r' => 'Sim! O estresse emocional afeta a produção de hormônios no cérebro que regulam a ovulação, podendo atrasar ou até adiantar o ciclo.')
		),
		'referencias' => 'Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO), Organização Mundial da Saúde (OMS).'
	),
	'puberdade' => array(
		'titulo' => 'Puberdade e Mudanças Corporais',
		'emoji' => '🌱',
		'descricao' => 'A puberdade é a transição biológica da infância para a adolescência. Nessa fase, seu corpo começa a liberar novos hormônios que provocam mudanças incríveis e normais.',
		'conteudo' => '
			<p>A puberdade geralmente começa entre os 8 e 13 anos para meninas. As mudanças corporais não ocorrem todas de uma vez, mas seguem etapas de desenvolvimento (conhecidas cientificamente como Escala de Tanner).</p>
			<h4 class="font-bold my-4 text-lg">As Principais Transformações Físicas:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Desenvolvimento das Mamas:</strong> O primeiro sinal costuma ser o broto mamário, que pode causar leve dor ou sensibilidade ao toque.</li>
				<li><strong>Crescimento de Pelos:</strong> Surgem pelos mais grossos na vulva e nas axilas.</li>
				<li><strong>Estirão de Crescimento:</strong> Aceleração rápida na altura e mudanças na distribuição de gordura corporal (quadris mais largos).</li>
				<li><strong>Pele e Suor:</strong> Aumento da oleosidade (causando acne) e alteração no cheiro do suor.</li>
			</ul>
		',
		'curiosidade' => 'Muitas vezes, uma mama cresce mais rápido que a outra no início da puberdade. Essa assimetria temporária é perfeitamente normal e costuma se igualar com o tempo.',
		'grafico_titulo' => 'Pico de Velocidade de Crescimento (Altura / Ano)',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<line x1="40" y1="20" x2="40" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<!-- Curva de crescimento -->
				<path d="M40,150 C120,150 180,50 250,60 T460,160" fill="none" stroke="var(--blue-scientific)" stroke-width="3"/>
				<text x="40" y="190" fill="var(--text-muted)" font-size="10">8 anos</text>
				<text x="240" y="190" fill="var(--text-muted)" font-size="10">12 anos (Pico)</text>
				<text x="430" y="190" fill="var(--text-muted)" font-size="10">16 anos</text>
				<text x="260" y="45" fill="var(--blue-scientific)" font-size="10" font-weight="bold">Estirão de Altura</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'O que fazer ao notar os primeiros brotos mamários?', 'r' => 'Não precisa se preocupar. Use sutiãs ou tops confortáveis sem bojo ou aro se a sensibilidade incomodar.'),
			array('p' => 'É normal ter espinhas na puberdade?', 'r' => 'Sim! O aumento dos hormônios estimula as glândulas sebáceas. Lavar o rosto com sabonete adequado ajuda a controlar.')
		),
		'referencias' => 'Sociedade Brasileira de Pediatria (SBP).'
	),
	'saude-mental' => array(
		'titulo' => 'Saúde Mental e Emocional',
		'emoji' => '🧠',
		'descricao' => 'As intensas transformações hormonais e sociais na adolescência têm impacto direto nas emoções. Cuidar da mente é tão importante quanto cuidar do corpo.',
		'conteudo' => '
			<p>Durante o ciclo menstrual, especialmente na fase pré-menstrual (TPM), a oscilação de estrogênio e progesterona afeta neurotransmissores como a serotonina (responsável pelo bem-estar). Isso pode causar flutuações rápidas de humor, irritabilidade ou ansiedade.</p>
			<h4 class="font-bold my-4 text-lg">Dicas para Estabilidade Emocional:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Autoconhecimento:</strong> Monitore suas emoções ao longo do ciclo. Saber que a irritabilidade é hormonal ajuda a lidar com ela.</li>
				<li><strong>Diálogo:</strong> Fale sobre seus sentimentos com pessoas acolhedoras e sem julgamentos.</li>
				<li><strong>Técnicas de Respiração:</strong> Exercícios de mindfulness e respiração profunda acalmam o sistema nervoso.</li>
			</ul>
		',
		'curiosidade' => 'Escrever um diário sobre seus sentimentos durante os dias do ciclo ajuda a identificar padrões e prever quando você precisa de mais repouso e autocuidado.',
		'grafico_titulo' => 'Níveis de Estresse relatados com Práticas de Relaxamento',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<!-- Gráfico de Barras -->
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<!-- Barra Sem Práticas -->
				<rect x="100" y="40" width="80" height="130" fill="#FAADB3" rx="8" />
				<!-- Barra Com Práticas -->
				<rect x="300" y="90" width="80" height="80" fill="var(--mint)" rx="8" />
				<text x="100" y="190" fill="var(--text-muted)" font-size="10">Sem Meditação</text>
				<text x="300" y="190" fill="var(--text-muted)" font-size="10">Com Meditação</text>
				<text x="120" y="30" fill="var(--text-color)" font-size="11" font-weight="bold">Estresse Alto</text>
				<text x="320" y="80" fill="var(--text-color)" font-size="11" font-weight="bold">Estresse Reduzido</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Por que sinto vontade de chorar antes de menstruar?', 'r' => 'Isso acontece pela queda brusca de estrogênio que reduz a produção de serotonina, hormônio regulador do humor.'),
			array('p' => 'Quando devo procurar ajuda profissional?', 'r' => 'Se o desânimo, ansiedade ou tristeza forem persistentes e durarem a maior parte do mês, converse com pais ou psicólogos.')
		),
		'referencias' => 'Conselho Federal de Psicologia (CFP), Organização Pan-Americana da Saúde (OPAS).'
	),
	'alimentacao' => array(
		'titulo' => 'Alimentação e Nutrição Saudável',
		'emoji' => '🍎',
		'descricao' => 'Uma nutrição equilibrada ajuda a regular o ciclo hormonal, repor perdas minerais da menstruação e diminuir consideravelmente as cólicas e a TPM.',
		'conteudo' => '
			<p>O corpo necessita de nutrientes específicos durante a menstruação. Com a perda de sangue, a reposição de Ferro é fundamental para evitar anemia e fadiga extrema. Alimentos anti-inflamatórios também aliviam a dor.</p>
			<h4 class="font-bold my-4 text-lg">Nutrientes Amigos do Ciclo:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Ferro:</strong> Encontrado em carnes, feijão, espinafre e lentilhas. Consuma com Vitamina C (limão, laranja) para melhorar a absorção.</li>
				<li><strong>Magnésio:</strong> Ajuda a relaxar o útero. Presente em bananas, aveia, sementes de abóbora e chocolate amargo.</li>
				<li><strong>Água:</strong> Beber pelo menos 2 litros de água combate o inchaço e a retenção de líquidos comuns da TPM.</li>
			</ul>
		',
		'curiosidade' => 'Evite o excesso de cafeína (café, energéticos) e alimentos muito salgados na semana pré-menstrual, pois eles contraem vasos sanguíneos e pioram as cólicas.',
		'grafico_titulo' => 'Teor de Ferro absorvido com/sem Vitamina C',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<rect x="100" y="110" width="80" height="60" fill="var(--blue-scientific)" rx="8" />
				<rect x="300" y="50" width="80" height="120" fill="var(--mint)" rx="8" />
				<text x="100" y="190" fill="var(--text-muted)" font-size="10">Apenas Ferro</text>
				<text x="300" y="190" fill="var(--text-muted)" font-size="10">Ferro + Vitamina C</text>
				<text x="110" y="100" fill="var(--text-color)" font-size="10">Absorção Normal</text>
				<text x="310" y="40" fill="var(--text-color)" font-size="10" font-weight="bold">Absorção Dobrada</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Por que sentimos mais vontade de comer doces na TPM?', 'r' => 'O cérebro busca repor a serotonina em queda rápida. O chocolate amargo é uma ótima opção para satisfazer essa vontade de forma saudável.'),
			array('p' => 'A desidratação piora a cólica?', 'r' => 'Sim. A desidratação provoca a retenção de água e a constipação, o que aumenta a pressão e o desconforto na pelve.')
		),
		'referencias' => 'Ministério da Saúde (Guia Alimentar para a População Brasileira).'
	),
	'exercicios' => array(
		'titulo' => 'Exercícios Físicos e o Ciclo',
		'emoji' => '🏃‍♀️',
		'descricao' => 'Mover o corpo libera hormônios benéficos que acalmam as cólicas, ajudam no relaxamento muscular e equilibram o humor na TPM.',
		'conteudo' => '
			<p>Não há restrição médica para fazer exercícios físicos no período menstrual, contanto que você respeite os limites do seu próprio corpo. Exercícios aeróbicos aumentam o fluxo de oxigênio para os músculos, reduzindo as contrações dolorosas do útero.</p>
			<h4 class="font-bold my-4 text-lg">Exercícios Recomendados para Cada Fase:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Menstruação:</strong> Alongamentos leves, caminhadas e ioga ajudam a relaxar a pelve e a lombar.</li>
				<li><strong>Fase Folicular e Fértil:</strong> Período de alta energia. Corrida, musculação e treinos de intensidade.</li>
				<li><strong>Fase Lútea (TPM):</strong> Atividades moderadas, natação ou caminhada ajudam a liberar o estresse.</li>
			</ul>
		',
		'curiosidade' => 'A prática constante de yoga focada em alongamento da região pélvica pode reduzir a intensidade e a frequência de cólicas ao longo de poucos meses.',
		'grafico_titulo' => 'Nível de Endorfina (Felicidade) conforme Minutos de Exercício',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<line x1="40" y1="20" x2="40" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<path d="M40,160 L150,130 L300,70 L460,40" fill="none" stroke="var(--purple-light)" stroke-width="3"/>
				<text x="40" y="190" fill="var(--text-muted)" font-size="10">0 min</text>
				<text x="140" y="190" fill="var(--text-muted)" font-size="10">15 min</text>
				<text x="290" y="190" fill="var(--text-muted)" font-size="10">30 min</text>
				<text x="430" y="190" fill="var(--text-muted)" font-size="10">60 min</text>
				<text x="320" y="60" fill="var(--purple-light)" font-size="11" font-weight="bold">Subida de Endorfina</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Menstruar impede de nadar na piscina ou praia?', 'r' => 'Não. O uso de absorventes internos ou coletores menstruais impede vazamentos e permite nadar com total segurança e higiene.'),
			array('p' => 'E se eu me sentir cansada demais para treinar?', 'r' => 'Tudo bem! Respeite seu cansaço. Substitua por um alongamento leve ou deite com bolsa morna.')
		),
		'referencias' => 'American College of Obstetricians and Gynecologists (ACOG).'
	),
	'sono' => array(
		'titulo' => 'Qualidade do Sono e Descanso',
		'emoji' => '😴',
		'descricao' => 'O sono de qualidade regenera o organismo, regula o cortisol (hormônio do estresse) e é vital para que os hormônios do ciclo ajam corretamente.',
		'conteudo' => '
			<p>Durante a TPM e menstruação, a temperatura corporal varia ligeiramente e os níveis de progesterona diminuem rapidamente. Essas alterações afetam a fase profunda do sono, podendo provocar insônia, sonhos agitados ou sonolência excessiva durante o dia.</p>
			<h4 class="font-bold my-4 text-lg">Regras de Higiene do Sono:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Desconexão Digital:</strong> Evite telas (celular, TV) pelo menos 1 hora antes de deitar. A luz azul bloqueia a melatonina.</li>
				<li><strong>Temperatura Confortável:</strong> Mantenha o quarto arejado. Uma temperatura mais amena favorece a indução do sono.</li>
				<li><strong>Rotina de Horários:</strong> Durma e acorde no mesmo horário sempre que possível para treinar seu relógio interno.</li>
			</ul>
		',
		'curiosidade' => 'Dormir na posição fetal (encolhida de lado) reduz a pressão sobre os músculos abdominais, ajudando a aliviar as cólicas menstruais na hora de dormir.',
		'grafico_titulo' => 'Horas Ideais de Sono vs Média Real em Adolescentes',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<rect x="100" y="60" width="80" height="110" fill="var(--mint)" rx="8" />
				<rect x="300" y="100" width="80" height="70" fill="#FAADB3" rx="8" />
				<text x="100" y="190" fill="var(--text-muted)" font-size="10">Recomendado (9h)</text>
				<text x="300" y="190" fill="var(--text-muted)" font-size="10">Média Real (6.5h)</text>
				<text x="110" y="50" fill="var(--text-color)" font-size="10" font-weight="bold">Ideal</text>
				<text x="310" y="90" fill="var(--text-color)" font-size="10">Déficit de Sono</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Qual o impacto do sono ruim na menstruação?', 'r' => 'A privação crônica de sono desregula o eixo de hormônios sexuais, podendo tornar o ciclo mais doloroso e desregulado.'),
			array('p' => 'Chás de ervas antes de dormir ajudam?', 'r' => 'Sim. Chás mornos sem cafeína (como camomila, erva-cidreira) auxiliam no relaxamento muscular e mental.')
		),
		'referencias' => 'Associação Brasileira do Sono (ABS).'
	),
	'vacinacao' => array(
		'titulo' => 'Vacinação e Proteção (HPV)',
		'emoji' => '💉',
		'descricao' => 'As vacinas salvam vidas e criam escudos biológicos contra infecções crônicas. A vacinação do HPV é um ato essencial de saúde e autocuidado.',
		'conteudo' => '
			<p>O HPV (Papilomavírus Humano) é um vírus muito comum que pode causar infecções e, em casos crônicos, evoluir para câncer no colo do útero, vulva, ânus e garganta. A vacina é altamente eficaz e segura, oferecida gratuitamente pelo SUS.</p>
			<h4 class="font-bold my-4 text-lg">Esquema Vacinal e Importância:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Público-Alvo:</strong> Meninas e meninos de 9 a 14 anos de idade.</li>
				<li><strong>Dose Única:</strong> O Ministério da Saúde do Brasil adotou o esquema simplificado de dose única para ampliar a cobertura protetora.</li>
				<li><strong>Prevenção Precoce:</strong> A vacina funciona melhor quando tomada antes de qualquer exposição ao vírus (antes do início da atividade sexual).</li>
			</ul>
		',
		'curiosidade' => 'A imunização precoce previne mais de 90% das infecções causadas pelos tipos mais perigosos de HPV, protegendo a sua vida reprodutiva futura.',
		'grafico_titulo' => 'Eficácia de Proteção contra Câncer Cervical por HPV',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<rect x="100" y="140" width="80" height="30" fill="#FAADB3" rx="8" />
				<rect x="300" y="30" width="80" height="140" fill="var(--mint)" rx="8" />
				<text x="100" y="190" fill="var(--text-muted)" font-size="10">Não Vacinado</text>
				<text x="300" y="190" fill="var(--text-muted)" font-size="10">Vacinado</text>
				<text x="110" y="130" fill="var(--text-color)" font-size="10">Baixa Proteção</text>
				<text x="310" y="20" fill="var(--text-color)" font-size="10" font-weight="bold">92% de Proteção</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Quem tem mais de 15 anos e não se vacinou pode tomar?', 'r' => 'Sim. A vacina é oferecida gratuitamente no SUS até os 14 anos, mas adultos e jovens maiores podem tomá-la na rede privada de saúde.'),
			array('p' => 'A vacina do HPV causa reações graves?', 'r' => 'Raramente. Os efeitos colaterais mais comuns são leves, como dor local e vermelhidão passageira no braço.')
		),
		'referencias' => 'Ministério da Saúde (PNI - Programa Nacional de Imunizações).'
	),
	'ists' => array(
		'titulo' => 'Prevenção de ISTs',
		'emoji' => '🛡️',
		'descricao' => 'As Infecções Sexualmente Transmissíveis exigem atenção preventiva. O conhecimento e a proteção barram vírus, bactérias e promovem a liberdade de escolhas.',
		'conteudo' => '
			<p>ISTs são infecções transmitidas por relações sexuais desprotegidas. Entre as mais frequentes estão o HPV, Sífilis, Clamídia, Gonorreia, Herpes e o HIV. O uso da camisinha masculina ou feminina impede a transmissão e protege a sua saúde.</p>
			<h4 class="font-bold my-4 text-lg">Regras Básicas de Proteção:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Camisinha em Primeiro Lugar:</strong> Deve ser usada do início ao fim de todas as relações íntimas.</li>
				<li><strong>Consultas de Rotina:</strong> Exames de sangue de rotina detectam precocemente infecções silenciosas como Sífilis e HIV.</li>
				<li><strong>Tratamento Conjunto:</strong> Se detectada uma infecção, ambos os parceiros devem se tratar para evitar reinfecções.</li>
			</ul>
		',
		'curiosidade' => 'Muitas ISTs não causam dor ou sintomas visíveis no início. Por isso, realizar testes rápidos (disponíveis de graça no posto de saúde) é essencial.',
		'grafico_titulo' => 'Eficácia de Proteção contra ISTs por Métodos',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<rect x="100" y="160" width="80" height="10" fill="#FAADB3" rx="8" />
				<rect x="300" y="40" width="80" height="130" fill="var(--mint)" rx="8" />
				<text x="100" y="190" fill="var(--text-muted)" font-size="10">Pílulas / DIUs (0%)</text>
				<text x="300" y="190" fill="var(--text-muted)" font-size="10">Camisinha (98%)</text>
				<text x="110" y="150" fill="var(--text-color)" font-size="9">Protege apenas gravidez</text>
				<text x="310" y="30" fill="var(--text-color)" font-size="10" font-weight="bold">Barreira Completa</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'Onde consigo preservativos gratuitos?', 'r' => 'Todas as Unidades Básicas de Saúde (postos de saúde do SUS) distribuem preservativos de graça na recepção, sem perguntas.'),
			array('p' => 'Corrimento com cheiro forte e coceira pode ser IST?', 'r' => 'Sim. Coceira intensa, cheiro forte ou cor cinza/esverdeada exigem consulta com um médico ou enfermeiro do posto.')
		),
		'referencias' => 'Departamento de IST, HIV/Aids e Hepatites Virais (Ministério da Saúde).'
	),
	'contraceptivos' => array(
		'titulo' => 'Métodos Contraceptivos',
		'emoji' => '💊',
		'descricao' => 'Contraceptivos ajudam a programar decisões e planejar a vida reprodutiva de forma consciente. Conheça as opções científicas.',
		'conteudo' => '
			<p>Existem diversos métodos contraceptivos para evitar uma gravidez indesejada. A indicação de qual é o melhor método para cada pessoa deve ser feita de forma personalizada por um médico ginecologista.</p>
			<h4 class="font-bold my-4 text-lg">Os Principais Tipos de Métodos:</h4>
			<ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
				<li><strong>Hormonais:</strong> Pílula de uso diário, injeção mensal/trimestral, adesivo, anel vaginal e implante.</li>
				<li><strong>Dispositivos Intrauterinos (DIU):</strong> Podem ser de cobre/prata (sem hormônio, duram de 5 a 10 anos) ou hormonais (Mirena).</li>
				<li><strong>De Barreira:</strong> Preservativos masculinos e femininos (protegem também contra ISTs).</li>
			</ul>
		',
		'curiosidade' => 'A pílula do dia seguinte é um contraceptivo de emergência. Ela não deve ser usada de forma rotineira, pois tem uma dose hormonal altíssima.',
		'grafico_titulo' => 'Taxa de Falha de Métodos Contraceptivos (Uso Típico)',
		'grafico_svg' => '
			<svg viewBox="0 0 500 200" width="100%" height="150" style="overflow: visible;">
				<line x1="40" y1="170" x2="480" y2="170" stroke="var(--text-color)" stroke-width="1.5"/>
				<rect x="70" y="40" width="60" height="130" fill="#FAADB3" rx="8" />
				<rect x="170" y="100" width="60" height="70" fill="var(--blue-scientific)" rx="8" />
				<rect x="270" y="150" width="60" height="20" fill="var(--purple-light)" rx="8" />
				<rect x="370" y="168" width="60" height="2" fill="var(--mint)" rx="1" />
				<text x="70" y="190" fill="var(--text-muted)" font-size="9">Coito (22%)</text>
				<text x="170" y="190" fill="var(--text-muted)" font-size="9">Camisinha (13%)</text>
				<text x="270" y="190" fill="var(--text-muted)" font-size="9">Pílula (7%)</text>
				<text x="370" y="190" fill="var(--text-muted)" font-size="9">DIU (0.2%)</text>
				<text x="45" y="30" fill="var(--text-color)" font-size="9">Falha Alta</text>
				<text x="345" y="158" fill="var(--text-color)" font-size="9" font-weight="bold">Seguro</text>
			</svg>
		',
		'faq' => array(
			array('p' => 'O que fazer se esquecer de tomar a pílula do dia?', 'r' => 'Tome assim que lembrar. Se passarem mais de 12 horas, consulte a bula da sua pílula e use camisinha nos dias seguintes.'),
			array('p' => 'O SUS oferece contraceptivos de graça?', 'r' => 'Sim! O SUS distribui pílulas, anticoncepcionais injetáveis, camisinhas e insere o DIU de cobre gratuitamente nas unidades de saúde.')
		),
		'referencias' => 'Cadernos de Atenção Básica (Saúde Sexual e Saúde Reprodutiva) do Ministério da Saúde.'
	)
);

// Obter o parâmetro de rota se existir
$current_topico_key = isset( $_GET['topico'] ) ? sanitize_key( $_GET['topico'] ) : '';

if ( $current_topico_key && array_key_exists( $current_topico_key, $topicos_data ) ) :
	// EXIBIR PÁGINA ESPECÍFICA DO TÓPICO
	$topico = $topicos_data[$current_topico_key];
	
	// Encontrar tópicos anterior/próximo para navegação
	$keys = array_keys( $topicos_data );
	$idx = array_search( $current_topico_key, $keys );
	$prev_key = ($idx > 0) ? $keys[$idx - 1] : '';
	$next_key = ($idx < count($keys) - 1) ? $keys[$idx + 1] : '';
	?>

	<main id="primary" class="site-main container py-10">
		<!-- Navegação superior voltar -->
		<div class="mb-8">
			<a href="<?php echo esc_url( home_url( '/saude-feminina' ) ); ?>" class="btn btn-outline" style="padding: 6px 16px; font-size: 0.9rem;">
				&larr; Voltar para Saúde Feminina
			</a>
		</div>

		<!-- BANNER DO TÓPICO -->
		<div class="card glassmorphism mb-8 animate-fade-in-up" style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; border-left: 6px solid var(--purple-light);">
			<div style="font-size: 4rem;"><?php echo esc_html( $topico['emoji'] ); ?></div>
			<div style="flex: 1; min-width: 250px;">
				<h1 class="text-3xl font-bold" style="margin-bottom: 8px;"><?php echo esc_html( $topico['titulo'] ); ?></h1>
				<p class="text-muted dark:text-text-light/70 text-lg" style="margin: 0;"><?php echo esc_html( $topico['descricao'] ); ?></p>
			</div>
		</div>

		<!-- CONTEÚDO PRINCIPAL E GRÁFICO -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Coluna Conteúdo (Esquerda) -->
			<div class="md:col-span-2 card glassmorphism" style="padding: 2.5rem;">
				<h3 class="text-xl font-bold mb-4">Informação Científica</h3>
				<div class="entry-content text-text-color dark:text-text-light/90 leading-relaxed">
					<?php echo wp_kses_post( $topico['conteudo'] ); ?>
				</div>
			</div>

			<!-- Coluna Gráfico e Curiosidades (Direita) -->
			<div class="md:col-span-1" style="display: flex; flex-direction: column; gap: 24px;">
				<!-- Gráfico -->
				<div class="card glassmorphism">
					<h3 class="text-lg font-bold mb-4" style="font-size: 1rem; line-height: 1.3;"><?php echo esc_html( $topico['grafico_titulo'] ); ?></h3>
					<div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 12px; border: 1px solid var(--border-color);">
						<?php echo $topico['grafico_svg']; ?>
					</div>
				</div>

				<!-- Curiosidades -->
				<div class="card" style="background: rgba(250, 218, 221, 0.15); border: 1px solid rgba(250, 218, 221, 0.3); color: var(--text-color);">
					<h4 class="font-bold mb-2">💡 Curiosidade</h4>
					<p style="font-size: 0.9rem; line-height: 1.5; opacity: 0.9; margin: 0;">
						<?php echo esc_html( $topico['curiosidade'] ); ?>
					</p>
				</div>
			</div>
		</div>

		<!-- FAQ ESPECÍFICA (ACCORDIONS) -->
		<section class="my-10" style="margin-top: 4rem;">
			<h2 class="text-2xl font-bold mb-6">Dúvidas Frequentes do Tema</h2>
			<div style="max-width: 800px;">
				<?php foreach ( $topico['faq'] as $index => $item ) : ?>
					<details class="accordion-item glassmorphism">
						<summary><?php echo esc_html( $item['p'] ); ?></summary>
						<p><?php echo esc_html( $item['r'] ); ?></p>
					</details>
				<?php endforeach; ?>
			</div>
		</section>

		<!-- REFERÊNCIAS CIENTÍFICAS -->
		<footer class="card glassmorphism text-muted" style="margin-top: 4rem; padding: 1.5rem; font-size: 0.85rem;">
			<strong>Referências Científicas:</strong> <?php echo esc_html( $topico['referencias'] ); ?>
		</footer>

		<!-- NAVEGAÇÃO ANTERIOR/PRÓXIMO -->
		<div style="display: flex; justify-content: space-between; margin-top: 3rem; flex-wrap: wrap; gap: 16px;">
			<?php if ( $prev_key ) : ?>
				<a href="<?php echo esc_url( add_query_arg( 'topico', $prev_key, home_url( '/saude-feminina' ) ) ); ?>" class="btn btn-outline">
					&larr; Tópico Anterior
				</a>
			<?php else : ?>
				<div></div>
			<?php endif; ?>

			<?php if ( $next_key ) : ?>
				<a href="<?php echo esc_url( add_query_arg( 'topico', $next_key, home_url( '/saude-feminina' ) ) ); ?>" class="btn btn-primary">
					Próximo Tópico &rarr;
				</a>
			<?php endif; ?>
		</div>
	</main>

<?php
else :
	// EXIBIR GRID PRINCIPAL DOS 9 TÓPICOS (LANDING)
	?>
	<main id="primary" class="site-main container py-10">
		<header class="page-header mb-12 text-center animate-fade-in-up">
			<h1 class="page-title text-4xl font-bold mb-2">Saúde Feminina</h1>
			<p class="text-muted dark:text-text-light/70 text-lg max-w-2xl mx-auto">
				Escolha um dos tópicos abaixo para acessar conteúdos reais, estatísticas visuais e esclarecer suas dúvidas com embasamento científico.
			</p>
		</header>

		<!-- GRID DOS 9 CARD DE TÓPICOS -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			<?php foreach ( $topicos_data as $key => $data ) : ?>
				<div class="card glassmorphism" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 250px;">
					<div>
						<div style="font-size: 2.8rem; margin-bottom: 12px;"><?php echo esc_html( $data['emoji'] ); ?></div>
						<h3 class="text-xl font-bold mb-2"><?php echo esc_html( $data['titulo'] ); ?></h3>
						<p class="text-muted dark:text-text-light/70" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">
							<?php echo esc_html( substr($data['descricao'], 0, 110) . '...' ); ?>
						</p>
					</div>
					<a href="<?php echo esc_url( add_query_arg( 'topico', $key, home_url( '/saude-feminina' ) ) ); ?>" class="btn btn-outline" style="width: 100%; text-align: center; font-size: 0.9rem;">
						Acessar Conteúdo &rarr;
					</a>
				</div>
			<?php endforeach; ?>
		</div>
	</main>

<?php
endif;

get_footer();
