/**
 * Lógica do Quiz Educativo com Geração de Certificado no Canvas — Viva Bem, Menina!
 */

document.addEventListener('DOMContentLoaded', () => {
    initQuizGame();
});

function initQuizGame() {
    const questions = [
        {
            question: "A primeira menstruação na vida de uma menina recebe qual nome científico?",
            options: [
                "Menopausa",
                "Menarca",
                "Ovulação",
                "Nidação"
            ],
            answer: 1,
            explanation: "A menarca é o termo médico para a primeira menstruação. Ela costuma ocorrer entre os 10 e 15 anos de idade."
        },
        {
            question: "Quais são os principais hormônios reguladores do ciclo menstrual feminino?",
            options: [
                "Adrenalina e Cortisol",
                "Estrogênio e Progesterona",
                "Insulina e Glucagon",
                "Testosterona e Tiroxina"
            ],
            answer: 1,
            explanation: "O estrogênio e a progesterona controlam o desenvolvimento dos óvulos e a preparação do endométrio para uma possível gravidez."
        },
        {
            question: "O que representa a cólica menstrual?",
            options: [
                "Contrações do músculo uterino para expelir o endométrio",
                "Inflamação crônica nas trompas de Falópio",
                "Problema de digestão causado por hormônios",
                "Acúmulo de gases intestinais no ovário"
            ],
            answer: 0,
            explanation: "As cólicas ocorrem porque o útero se contrai (aperta) para ajudar a descamar e expulsar o fluxo menstrual."
        },
        {
            question: "Qual o tempo médio considerado saudável para a duração do fluxo menstrual?",
            options: [
                "Exatamente 1 dia",
                "De 3 a 7 dias",
                "Entre 10 e 15 dias",
                "Varia de 1 a 2 semanas"
            ],
            answer: 1,
            explanation: "Embora varie de corpo para corpo, um fluxo menstrual saudável dura geralmente entre 3 e 7 dias."
        },
        {
            question: "Qual a melhor recomendação para realizar a higiene íntima diária?",
            options: [
                "Lavar a parte interna do canal vaginal com duchas",
                "Usar sabonetes perfumados e desodorantes íntimos",
                "Lavar apenas a parte externa (vulva) com água e sabão neutro",
                "Não lavar a região para manter a flora natural intacta"
            ],
            answer: 2,
            explanation: "A vagina é autolimpante. Lavar por dentro prejudica a defesa natural. A lavagem deve ser apenas na vulva (externa)."
        },
        {
            question: "O muco elástico e transparente (parecido com clara de ovo) no meio do ciclo indica:",
            options: [
                "Infecção bacteriana grave",
                "O início da menstruação",
                "O período fértil (ovulação)",
                "Falta de hidratação corporal"
            ],
            answer: 2,
            explanation: "Esse muco elástico facilita a movimentação dos espermatozoides e sinaliza que a mulher está em sua fase fértil (ovulando)."
        },
        {
            question: "Qual o único método contraceptivo que previne gravidez e ISTs ao mesmo tempo?",
            options: [
                "Pílula anticoncepcional",
                "Dispositivo Intrauterino (DIU)",
                "Preservativo (camisinha)",
                "Coito interrompido"
            ],
            answer: 3,
            explanation: "Apenas métodos de barreira física, como a camisinha masculina ou feminina, impedem a troca de fluidos corporais protegendo de ISTs."
        },
        {
            question: "A vacina contra o HPV (disponível gratuitamente no SUS para jovens de 9 a 14 anos) previne contra:",
            options: [
                "Câncer do colo do útero e verrugas genitais",
                "Gravidez precoce e irregularidades no ciclo",
                "Cólica menstrual e sintomas de TPM",
                "Infecções urinárias e candidíase"
            ],
            answer: 0,
            explanation: "A vacina previne a infecção por tipos de HPV responsáveis pela grande maioria dos casos de câncer de colo de útero."
        },
        {
            question: "O que é a Tensão Pré-Menstrual (TPM)?",
            options: [
                "Uma doença crônica do sistema reprodutor",
                "A fase em que a menstruação está mais abundante",
                "Alterações físicas e emocionais causadas pelas mudanças de hormônios antes do ciclo",
                "Uma dor de cabeça constante durante a menstruação"
            ],
            answer: 2,
            explanation: "A queda dos níveis de estrogênio e progesterona antes da menstruação causa sintomas físicos e emocionais temporários."
        },
        {
            question: "Quando uma cólica menstrual deve acender um sinal de alerta para buscar ajuda ginecologia?",
            options: [
                "Sempre que ela acontecer, mesmo se for leve",
                "Apenas se durar mais de um ano consecutivo",
                "Quando for uma dor incapacitante que te impede de estudar ou não melhora com remédios simples",
                "Não é necessário buscar ajuda ginecológica para cólicas"
            ],
            answer: 2,
            explanation: "Dores intensas que interferem no cotidiano não devem ser normalizadas. Elas podem indicar condições como a endometriose."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let studentName = "";

    // DOM Elements
    const startScreen = document.getElementById('quiz-start-screen');
    const gameplayScreen = document.getElementById('quiz-gameplay');
    const resultScreen = document.getElementById('quiz-result-screen');
    
    const startBtn = document.getElementById('quiz-start-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    const certBtn = document.getElementById('quiz-cert-btn');
    
    const nameInput = document.getElementById('student-name');
    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    
    const currentNumEl = document.getElementById('quiz-current-num');
    const progressFill = document.getElementById('quiz-progress-fill');
    const scoreIndicator = document.getElementById('quiz-score-indicator');
    
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackTitle = document.getElementById('quiz-feedback-title');
    const feedbackText = document.getElementById('quiz-feedback-text');
    
    const finalScoreEl = document.getElementById('quiz-final-score');
    const levelBadgeEl = document.getElementById('quiz-level-badge');
    const certArea = document.getElementById('certificate-area');

    if (!startScreen || !gameplayScreen || !resultScreen || !startBtn) return;

    // Iniciar jogo
    startBtn.addEventListener('click', () => {
        studentName = nameInput.value.trim();
        if (!studentName) {
            alert("Por favor, digite seu nome para iniciar o quiz e gerar seu certificado.");
            nameInput.focus();
            return;
        }

        startScreen.style.display = 'none';
        gameplayScreen.style.display = 'block';
        loadQuestion();
    });

    function loadQuestion() {
        feedbackBox.style.display = 'none';
        const q = questions[currentQuestionIndex];
        questionText.textContent = q.question;
        currentNumEl.textContent = currentQuestionIndex + 1;
        
        // Progresso
        const progressPercent = (currentQuestionIndex / questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;

        // Renderizar opções
        optionsContainer.innerHTML = '';
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.addEventListener('click', () => selectOption(index, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedIndex, clickedBtn) {
        // Desativar todas as opções
        const btns = optionsContainer.querySelectorAll('.quiz-option');
        btns.forEach(btn => btn.disabled = true);

        const q = questions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.answer;

        if (isCorrect) {
            score++;
            clickedBtn.classList.add('correct');
            feedbackTitle.textContent = "Correto! 🎉";
            feedbackTitle.style.color = "var(--mint)";
            scoreIndicator.textContent = `Pontuação: ${score}`;
        } else {
            clickedBtn.classList.add('incorrect');
            // Mostrar a correta
            btns[q.answer].classList.add('correct');
            feedbackTitle.textContent = "Incorreto! ❌";
            feedbackTitle.style.color = "#f77c88";
        }

        feedbackText.textContent = q.explanation;
        feedbackBox.style.display = 'block';
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        gameplayScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        progressFill.style.width = '100%';
        finalScoreEl.textContent = score;

        // Classificação baseada no score
        let level = "";
        if (score <= 4) {
            level = "Iniciante 🌸";
        } else if (score <= 7) {
            level = "Exploradora 📚";
        } else if (score <= 9) {
            level = "Expert 🧬";
        } else {
            level = "Mestre de Saúde Feminina 🏆";
        }
        levelBadgeEl.textContent = `Nível: ${level}`;

        // Salvar resultados no localStorage para o Portal da Estudante
        localStorage.setItem('vbm-quiz-score', score);
        localStorage.setItem('vbm-quiz-level', level);
        localStorage.setItem('vbm-student-name', studentName);

        // Confetes se atingir boa nota
        if (score >= 7) {
            triggerConfetti();
            certArea.style.display = 'block';
            certBtn.style.display = 'inline-flex';
            drawCertificate();
        } else {
            levelBadgeEl.innerHTML += "<br><span style='font-size:0.9rem; font-weight:normal; color:var(--text-muted);'>Faça pelo menos 7 acertos para desbloquear o certificado!</span>";
        }
    }

    function triggerConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });
        }
    }

    // Geração do Certificado em Canvas
    function drawCertificate() {
        const canvas = document.getElementById('certificate-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Fundo e bordas elegantes
        ctx.fillStyle = '#F9F7F8';
        ctx.fillRect(0, 0, 800, 565);
        
        // Moldura Lilás/Rosa
        ctx.strokeStyle = '#CDB4DB';
        ctx.lineWidth = 14;
        ctx.strokeRect(15, 15, 770, 535);

        ctx.strokeStyle = '#FADADD';
        ctx.lineWidth = 4;
        ctx.strokeRect(28, 28, 744, 509);

        // Badge decorativa no centro acima
        ctx.font = 'bold 36px Inter, sans-serif';
        ctx.fillStyle = '#2D2327';
        ctx.textAlign = 'center';
        ctx.fillText('CERTIFICADO DE CONHECIMENTO', 400, 110);
        
        // Linha divisória decorativa
        ctx.strokeStyle = '#CDB4DB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(250, 135);
        ctx.lineTo(550, 135);
        ctx.stroke();

        ctx.font = 'italic 18px DM Sans, sans-serif';
        ctx.fillStyle = '#5E5256';
        ctx.fillText('Este certificado é concedido com mérito a', 400, 190);

        // Nome do Aluno
        ctx.font = 'bold 32px Inter, sans-serif';
        ctx.fillStyle = '#2D2327';
        ctx.fillText(studentName.toUpperCase(), 400, 250);

        // Linha do nome
        ctx.strokeStyle = '#2D2327';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(200, 270);
        ctx.lineTo(600, 270);
        ctx.stroke();

        // Texto do Certificado
        ctx.font = '16px DM Sans, sans-serif';
        ctx.fillStyle = '#5E5256';
        
        const text1 = "por demonstrar excelente aproveitamento e dedicação ao completar";
        const text2 = `o Quiz Científico de Saúde Feminina do portal "Viva Bem, Menina!",`;
        const text3 = `alcançando a pontuação final de ${score} acertos de um total de 10 perguntas.`;
        
        ctx.fillText(text1, 400, 320);
        ctx.fillText(text2, 400, 345);
        ctx.fillText(text3, 400, 370);

        // Data
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        ctx.font = '14px DM Sans, sans-serif';
        ctx.fillText(`Concedido em: ${dataFormatada}`, 400, 430);

        // Assinatura digital simbólica
        ctx.font = 'italic 16px "DM Sans", sans-serif';
        ctx.fillStyle = '#2D2327';
        ctx.fillText('Equipe Viva Bem, Menina!', 400, 485);
        ctx.font = '11px DM Sans, sans-serif';
        ctx.fillStyle = '#5E5256';
        ctx.fillText('Validação Digital via Portal Educativo', 400, 505);

        // Preparar botão para download
        certBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = `certificado-${studentName.toLowerCase().replace(/\s+/g, '-')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
}
