/**
 * Lógica do Jogo Mitos e Verdades - Silêncios da Saúde
 */

document.addEventListener('DOMContentLoaded', () => {
    initMythsGame();
});

function initMythsGame() {
    const mythQuestions = [
        {
            statement: "A menstruação é uma forma de o corpo eliminar sangue ruim ou sujeira.",
            isTruth: false,
            explanation: "Mito! A menstruação é a descamação natural do endométrio (camada interna do útero) que se preparou para receber um bebê. É sangue limpo, saudável e regular."
        },
        {
            statement: "Tomar banho morno ou lavar a cabeça menstruada faz mal e pode cortar o fluxo.",
            isTruth: false,
            explanation: "Mito! O banho quente ou morno ajuda a relaxar a musculatura do corpo, inclusive do útero, o que pode até aliviar as cólicas. Lavar a cabeça é totalmente seguro."
        },
        {
            statement: "Fazer exercícios físicos leves ajuda a reduzir as cólicas menstruais.",
            isTruth: true,
            explanation: "Verdade! Exercícios físicos liberam endorfinas (hormônios que agem como analgésicos naturais), melhoram a circulação sanguínea e diminuem o estresse, aliviando a dor."
        },
        {
            statement: "É possível engravidar se tiver relações sexuais durante a menstruação.",
            isTruth: true,
            explanation: "Verdade! Embora seja menos comum, algumas mulheres têm ciclos curtos ou ovulação irregular, o que permite que espermatozoides (que duram dias no corpo) encontrem um óvulo logo após ou durante a menstruação."
        },
        {
            statement: "O uso de absorvente interno tira a virgindade da menina.",
            isTruth: false,
            explanation: "Mito! O hímen é uma membrana elástica e fina com uma abertura natural por onde sai o fluxo menstrual. O absorvente interno ou coletor bem colocados passam por essa abertura sem rompê-la."
        },
        {
            statement: "Sentir cólicas extremamente intensas que te impedem de estudar ou sair da cama não é normal.",
            isTruth: true,
            explanation: "Verdade! Desconfortos leves são normais, mas dores muito fortes que atrapalham a rotina podem sinalizar problemas como endometriose ou miomas e exigem avaliação ginecológica."
        },
        {
            statement: "Andar descalço na menstruação aumenta a intensidade das cólicas.",
            isTruth: false,
            explanation: "Mito! Andar descalço pode fazer você sentir frio, mas não há conexão física ou anatômica entre os pés frios e o útero que cause cólicas diretamente."
        },
        {
            statement: "Suspender a menstruação com pílula contínua faz mal e acumula sangue no corpo.",
            isTruth: false,
            explanation: "Mito! Sob orientação ginecológica, a suspensão do ciclo é segura. Ao usar contracepção contínua, o útero não prepara a camada interna, logo, não há sangue acumulado."
        },
        {
            statement: "A vacina contra o HPV ajuda a prevenir o câncer do colo do útero.",
            isTruth: true,
            explanation: "Verdade! A vacina contra o HPV protege contra os principais tipos do vírus que causam lesões pré-cancerígenas e câncer cervical. É uma vacina essencial e preventiva."
        },
        {
            statement: "O ciclo menstrual normal deve durar obrigatoriamente 28 dias.",
            isTruth: false,
            explanation: "Mito! O ciclo de 28 dias é apenas uma média. É considerado saudável qualquer ciclo regular que ocorra no intervalo entre 21 e 35 dias."
        },
        {
            statement: "Comer chocolate durante a TPM ajuda a aliviar sintomas e melhorar o humor.",
            isTruth: true,
            explanation: "Verdade! Chocolates (principalmente os mais amargos) estimulam a liberação de serotonina e endorfina, substâncias associadas ao bem-estar e relaxamento."
        },
        {
            statement: "A higiene íntima deve ser feita lavando a parte interna do canal vaginal (ducha íntima).",
            isTruth: false,
            explanation: "Mito! A vagina é autolimpante. Lavar por dentro remove bactérias protetoras naturais, altera o pH e facilita infecções. Lave apenas a vulva (parte externa)."
        },
        {
            statement: "Mulheres que passam muito tempo juntas acabam sincronizando a data da menstruação.",
            isTruth: false,
            explanation: "Mito! Estudos científicos de grande escala mostram que a sincronização menstrual é apenas uma coincidência matemática devido à variação de ciclos individuais."
        },
        {
            statement: "O coletor menstrual pode subir e se perder dentro do corpo da mulher.",
            isTruth: false,
            explanation: "Mito! O canal vaginal é fechado no final pelo colo do útero (que tem uma abertura minúscula, menor que uma ponta de agulha). O coletor nunca passará dali."
        },
        {
            statement: "Homens transgêneros que possuem útero também podem menstruar.",
            isTruth: true,
            explanation: "Verdade! Se o homem trans possui ovários e útero e não está fazendo terapia com testosterona (ou se a terapia não bloqueou o ciclo), ele continuará a menstruar."
        },
        {
            statement: "A camisinha é o único método contraceptivo que previne gravidez e ISTs ao mesmo tempo.",
            isTruth: true,
            explanation: "Verdade! Métodos hormonais (pílula, injeção, DIU) previnem gravidez, mas apenas a camisinha (feminina ou masculina) impede o contágio por ISTs."
        },
        {
            statement: "A primeira menstruação (menarca) marca o início das mudanças corporais da puberdade.",
            isTruth: false,
            explanation: "Mito! A menarca é uma das últimas fases da puberdade. Antes dela acontecem o crescimento dos brotos mamários, o estirão e o surgimento de pelos pubianos."
        },
        {
            statement: "Alimentos ricos em gordura e ultraprocessados podem piorar as cólicas menstruais.",
            isTruth: true,
            explanation: "Verdade! Alimentos ricos em sódio e gorduras saturadas aumentam a retenção de líquidos e promovem inflamações no corpo, o que pode agravar as cólicas."
        },
        {
            statement: "A presença de um corrimento transparente e elástico no meio do ciclo é sinal de infecção.",
            isTruth: false,
            explanation: "Mito! Esse muco elástico e transparente, semelhante à clara de ovo, é perfeitamente normal e saudável. Ele indica o seu período fértil (ovulação)."
        },
        {
            statement: "Menstruar duas vezes no mesmo mês pode acontecer e ser normal ocasionalmente.",
            isTruth: true,
            explanation: "Verdade! Se você tem um ciclo mais curto (de 21 a 24 dias), pode acontecer de menstruar no início do mês e novamente no final. Se for frequente, fale com um ginecologista."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const mythCard = document.getElementById('myth-card');
    const mythCardBack = document.getElementById('myth-card-back');
    const statementEl = document.getElementById('myth-statement');
    const explanationEl = document.getElementById('myth-explanation');
    const badgeEl = document.getElementById('myth-result-badge');
    const truthTitleEl = document.getElementById('myth-truth-title');
    
    const currentEl = document.getElementById('myth-current');
    const totalEl = document.getElementById('myth-total');
    const scoreEl = document.getElementById('myth-score');
    
    const actionsEl = document.getElementById('myth-actions');
    const nextBtn = document.getElementById('myth-next');
    const endScreenEl = document.getElementById('myth-end-screen');

    const btnVerdade = document.getElementById('btn-verdade');
    const btnMito = document.getElementById('btn-mito');

    if (!mythCard || !statementEl || !btnVerdade) return;

    totalEl.textContent = mythQuestions.length;

    // Carregar primeira pergunta
    loadQuestion();

    function loadQuestion() {
        const q = mythQuestions[currentQuestionIndex];
        statementEl.textContent = q.statement;
        currentEl.textContent = currentQuestionIndex + 1;
        
        // Reset card state
        mythCard.classList.remove('flipped');
    }

    function handleAnswer(userGuess) {
        const q = mythQuestions[currentQuestionIndex];
        const isCorrect = userGuess === q.isTruth;

        if (isCorrect) {
            score++;
            scoreEl.textContent = score;
            badgeEl.textContent = "Correto! 🎉";
            badgeEl.style.backgroundColor = "var(--mint)";
            badgeEl.style.color = "var(--text-dark)";
        } else {
            badgeEl.textContent = "Incorreto! ❌";
            badgeEl.style.backgroundColor = "#FAADB3";
            badgeEl.style.color = "var(--text-dark)";
        }

        truthTitleEl.textContent = q.isTruth ? "Isto é uma Verdade!" : "Isto é um Mito!";
        explanationEl.textContent = q.explanation;

        // Animação de flip
        mythCard.classList.add('flipped');
    }

    btnVerdade.addEventListener('click', () => handleAnswer(true));
    btnMito.addEventListener('click', () => handleAnswer(false));

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < mythQuestions.length) {
            loadQuestion();
        } else {
            // Mostrar fim de jogo
            mythCard.style.display = 'none';
            actionsEl.style.display = 'none';
            endScreenEl.style.display = 'block';
            document.getElementById('myth-final-score').textContent = score;
        }
    });
}
