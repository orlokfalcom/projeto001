/**
 * Motor da Assistente Virtual Luna — Viva Bem, Menina!
 * Portal Educativo de Saúde Feminina para Adolescentes
 */

document.addEventListener('DOMContentLoaded', () => {
    initLunaChat();
});

function initLunaChat() {
    const toggleBtn        = document.getElementById('luna-toggle');
    const closeBtn         = document.getElementById('luna-close');
    const chatBox          = document.getElementById('luna-chat-box');
    const sendBtn          = document.getElementById('luna-send');
    const inputField       = document.getElementById('luna-input');
    const messagesContainer = document.getElementById('luna-chat-messages');
    const chipsContainer   = document.getElementById('luna-quick-chips');

    if (!toggleBtn || !chatBox || !sendBtn || !inputField || !messagesContainer) return;

    // ── Base de respostas locais ───────────────────────────────────────────────
    const responses = {
        menstruacao: "A menstruação é uma parte natural do ciclo reprodutivo que indica que o corpo está amadurecendo. Geralmente dura entre 3 e 7 dias, ocorrendo a cada 21 a 35 dias. Se você tiver cólicas fortes, bolsas de água morna na barriga ou chás de camomila podem aliviar. 💜 Lembre-se: cada corpo tem seu próprio ritmo!",
        menarca: "A menarca é o nome científico da primeira menstruação. Ela costuma acontecer entre os 10 e 15 anos. É super normal ficar na dúvida! Leve sempre um absorvente na bolsa e converse com um adulto de confiança, como sua mãe, tia, avó ou profissional de saúde. 🌸",
        colica: "Cólicas menstruais são dores na parte de baixo do abdômen causadas pela contração do útero. Compressas mornas na região, repouso, hidratação e atividades físicas leves podem ajudar a diminuir o desconforto. Se a cólica for muito forte e te impedir de fazer suas atividades, é importante consultar um médico. 💊",
        puberdade: "A puberdade é a fase de transição entre a infância e a idade adulta, quando ocorrem mudanças físicas e hormonais. É normal o crescimento de brotos mamários (que podem doer um pouco), o surgimento de pelos, mudanças na pele (espinhas) e o estirão de crescimento. 🌱 Seu corpo está crescendo, e isso é incrível!",
        tpm: "A Tensão Pré-Menstrual (TPM) ocorre nos dias anteriores à menstruação, devido a flutuações hormonais. Sintomas comuns incluem alterações de humor, cansaço, inchaço e sensibilidade nos seios. Alimentar-se bem, praticar exercícios e descansar são ótimas formas de amenizar a TPM. 😤💆",
        contraceptivos: "Métodos contraceptivos ajudam a prevenir a gravidez indesejada e, em alguns casos, regulam o ciclo. Existem os hormonais (como pílula, injeção, implante e DIU hormonal) e os de barreira (como a camisinha). IMPORTANTE: A camisinha é o ÚNICO método que também protege contra ISTs! 🛡️",
        ists: "Infecções Sexualmente Transmissíveis (ISTs) são infecções transmitidas principalmente por contato sexual sem proteção. Exemplos incluem o HPV, HIV, Sífilis e Clamídia. A melhor forma de se prevenir é usando preservativo em todas as relações sexuais e mantendo a vacinação em dia. 💉",
        hpv: "A vacina contra o HPV está disponível gratuitamente no SUS para meninas e meninos de 9 a 14 anos. Ela previne contra vírus que causam câncer do colo do útero e outras doenças. Não deixe de se vacinar! A prevenção começa hoje. 💉✅",
        higiene: "Durante a menstruação, a higiene íntima é essencial. Lave a região externa (vulva) apenas com água e sabonete neutro — evite sabonetes perfumados ou duchas internas. Troque o absorvente a cada 4 a 6 horas para evitar infecções. 🛁",
        absorvente: "Existem vários tipos de absorventes: externos (descartáveis ou de pano), internos (tampões) e os coletores menstruais de silicone. A escolha depende do seu conforto! O coletor é ecológico e dura até 12 horas, enquanto os tampões devem ser trocados a cada 4 a 6 horas. 🌿",
        emocional: "As flutuações hormonais durante o ciclo podem mexer com suas emoções. É normal se sentir mais irritada, sensível ou com vontade de chorar. Respeite seu tempo, escreva sobre seus sentimentos e procure conversar com amigos ou psicólogos se sentir sobrecarregada. Você não está sozinha! 💙",
        alimentacao: "Uma alimentação equilibrada ajuda muito! Beba bastante água para combater o inchaço. Alimentos ricos em ferro (como feijão e folhas escuras) ajudam a repor a perda sanguínea, e alimentos com magnésio (como banana e chocolate amargo) ajudam nas cólicas. 🥗🍌",
        sono: "O sono é fundamental para a saúde hormonal e emocional das adolescentes. Tente dormir entre 8 e 10 horas por noite. Evite telas pelo menos 1 hora antes de dormir, mantenha um horário regular e crie uma rotina relaxante. Um sono de qualidade melhora o humor, a concentração e até a pele! 😴🌙",
        exercicio: "Exercícios físicos regulares são ótimos para a saúde feminina! Eles ajudam a diminuir cólicas, melhorar o humor (liberam endorfina), controlar o peso e fortalecer os ossos. Qualquer atividade que você goste vale: dança, caminhada, natação, vôlei... o importante é se mover! 🏃‍♀️💪",
        autoestima: "Amar-se é um ato de coragem! A imagem corporal negativa é muito comum na adolescência por causa da pressão social e das redes sociais. Lembre-se: corpos reais são diversos e belos. Foque no que seu corpo pode fazer por você, não apenas em como ele parece. 🌟💜",
        ajuda: "Se você estiver sentindo algo diferente, tiver dúvidas sobre seu ciclo ou dores intensas, a melhor atitude é conversar com um ginecologista ou médico de família no posto de saúde (UBS). Cuidar de si é um ato de carinho com a sua vida! 🏥💜",
    };

    // ── Toggle do chat ────────────────────────────────────────────────────────
    toggleBtn.addEventListener('click', () => {
        const isOpen = chatBox.classList.contains('open');
        if (isOpen) {
            chatBox.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
            chatBox.classList.add('open');
            toggleBtn.setAttribute('aria-expanded', 'true');
            inputField.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatBox.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    });

    // ── Quick Chips ───────────────────────────────────────────────────────────
    if (chipsContainer) {
        chipsContainer.querySelectorAll('.luna-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const topic = chip.dataset.topic;
                if (!topic) return;
                appendMessage(topic, 'user');
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    const reply = getBotResponse(topic);
                    appendMessage(reply, 'bot');
                }, 900);
            });
        });
    }

    // ── Enviar mensagem ───────────────────────────────────────────────────────
    const sendMessage = () => {
        const text = inputField.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        inputField.value = '';

        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            const botReply = getBotResponse(text);
            appendMessage(botReply, 'bot');
        }, 800 + Math.random() * 400);
    };

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // ── Funções auxiliares ────────────────────────────────────────────────────
    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg msg-${sender}`;
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'msg msg-bot msg-typing';
        indicator.id = 'luna-typing';
        indicator.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('luna-typing');
        if (indicator) indicator.remove();
    }

    // ── Motor de respostas ────────────────────────────────────────────────────
    function getBotResponse(query) {
        const clean = query.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

        if (clean.includes('menstru') || clean.includes('ciclo') || clean.includes('fluxo') || clean.includes('sangr')) {
            if (clean.includes('primeira') || clean.includes('menarca') || clean.includes('comec')) return responses.menarca;
            return responses.menstruacao;
        }
        if (clean.includes('colica') || clean.includes('dor') || clean.includes('utero') || clean.includes('crampo')) {
            return responses.colica;
        }
        if (clean.includes('puberdade') || clean.includes('muda') || clean.includes('peito') || clean.includes('seio') || clean.includes('cresc')) {
            return responses.puberdade;
        }
        if (clean.includes('tpm') || clean.includes('humor') || clean.includes('irritad') || clean.includes('tensao')) {
            return responses.tpm;
        }
        if (clean.includes('gravidez') || clean.includes('camisinha') || clean.includes('anticoncep') || clean.includes('pilula') || clean.includes('contracep')) {
            return responses.contraceptivos;
        }
        if (clean.includes('ist') || clean.includes('infeccao') || clean.includes('dst') || clean.includes('sifilis') || clean.includes('hiv') || clean.includes('doenca')) {
            return responses.ists;
        }
        if (clean.includes('hpv') || clean.includes('vacina')) {
            return responses.hpv;
        }
        if (clean.includes('higiene') || clean.includes('lavar') || clean.includes('banho') || clean.includes('cheiro')) {
            return responses.higiene;
        }
        if (clean.includes('absorvente') || clean.includes('coletor') || clean.includes('tampon')) {
            return responses.absorvente;
        }
        if (clean.includes('emocao') || clean.includes('sentimento') || clean.includes('chora') || clean.includes('triste') || clean.includes('ansied') || clean.includes('depressao')) {
            return responses.emocional;
        }
        if (clean.includes('aliment') || clean.includes('comer') || clean.includes('comida') || clean.includes('agua') || clean.includes('chocolate') || clean.includes('nutric')) {
            return responses.alimentacao;
        }
        if (clean.includes('sono') || clean.includes('dormir') || clean.includes('cansada') || clean.includes('insonia')) {
            return responses.sono;
        }
        if (clean.includes('exerc') || clean.includes('atividad') || clean.includes('esport') || clean.includes('ginastica') || clean.includes('correr')) {
            return responses.exercicio;
        }
        if (clean.includes('autoestima') || clean.includes('corpo') || clean.includes('peso') || clean.includes('beleza') || clean.includes('amor proprio')) {
            return responses.autoestima;
        }
        if (clean.includes('ajuda') || clean.includes('medico') || clean.includes('gineco') || clean.includes('consulta') || clean.includes('sus')) {
            return responses.ajuda;
        }

        // Fallback acolhedor
        return "Que pergunta interessante! 🤔 Não tenho certeza sobre essa resposta exata, mas lembre-se: falar sobre nosso corpo é super saudável e importante! Que tal explorar nossa seção de **Saúde Feminina** ou enviar uma mensagem pelo **Contato**? Se for uma dor ou sintoma físico desconfortável, conversar com um médico de confiança é sempre a melhor escolha. Você merece cuidado! 💜";
    }
}
