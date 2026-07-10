/**
 * Motor da Assistente Virtual Luna - Silêncios da Saúde
 */

document.addEventListener('DOMContentLoaded', () => {
    initLunaChat();
});

function initLunaChat() {
    const toggleBtn = document.getElementById('luna-toggle');
    const closeBtn = document.getElementById('luna-close');
    const chatBox = document.getElementById('luna-chat-box');
    const sendBtn = document.getElementById('luna-send');
    const inputField = document.getElementById('luna-input');
    const messagesContainer = document.getElementById('luna-chat-messages');

    if (!toggleBtn || !chatBox || !sendBtn || !inputField || !messagesContainer) return;

    // Base de respostas locais sobre saúde feminina para adolescentes
    const responses = {
        menstruacao: "A menstruação é uma parte natural do ciclo reprodutivo que indica que o corpo está amadurecendo. Geralmente dura entre 3 e 7 dias, ocorrendo a cada 21 a 35 dias. Se você tiver cólicas fortes, bolsas de água morna na barriga ou chás de camomila podem aliviar. Lembre-se: cada corpo tem seu próprio ritmo!",
        menarca: "A menarca é o nome científico da primeira menstruação. Ela costuma acontecer entre os 10 e 15 anos. É super normal ficar na dúvida! Leve sempre um absorvente na bolsa e converse com um adulto de confiança, como sua mãe, tia, avó ou profissional de saúde.",
        colica: "Cólicas menstruais são dores na parte de baixo do abdômen causadas pela contração do útero. Compressas mornas na região, repouso, hidratação e atividades físicas leves podem ajudar a diminuir o desconforto. Se a cólica for muito forte e te impedir de fazer suas atividades, é importante consultar um médico.",
        puberdade: "A puberdade é a fase de transição entre a infância e a idade adulta, quando ocorrem mudanças físicas e hormonais. É normal o crescimento de brotos mamários (que podem doer um pouco), o surgimento de pelos, mudanças na pele (espinhas) e o estirão de crescimento. Seu corpo está crescendo!",
        tpm: "A Tensão Pré-Menstrual (TPM) ocorre nos dias anteriores à menstruação, devido a flutuações hormonais. Sintomas comuns incluem alterações de humor, cansaço, inchaço e sensibilidade nos seios. Alimentar-se bem, praticar exercícios e descansar são ótimas formas de amenizar a TPM.",
        contraceptivos: "Métodos contraceptivos ajudam a prevenir a gravidez indesejada e, em alguns casos, regulam o ciclo. Existem os hormonais (como pílula, injeção, implante e DIU hormonal) e os de barreira (como a camisinha). IMPORTANTE: A camisinha (preservativo) é o ÚNICO método que também protege contra Infecções Sexualmente Transmissíveis (ISTs).",
        ists: "Infecções Sexualmente Transmissíveis (ISTs) são infecções transmitidas principalmente por contato sexual sem proteção. Exemplos incluem o HPV, HIV, Sífilis e Clamídia. A melhor forma de se prevenir é usando preservativo (camisinha) em todas as relações sexuais e mantendo a vacinação (como a do HPV) em dia.",
        hpv: "A vacina contra o HPV (Papilomavírus Humano) é extremamente importante e está disponível gratuitamente no SUS para meninas e meninos de 9 a 14 anos. Ela previne contra vírus que causam câncer do colo do útero e outras doenças. Não deixe de se vacinar!",
        higiene: "Durante a menstruação, a higiene íntima é essencial. Lave a região externa (vulva) apenas com água e sabonete neutro (evite sabonetes perfumados ou duchas internas). Troque o absorvente a cada 4 a 6 horas (ou antes se o fluxo for intenso) para evitar infecções e odores.",
        absorvente: "Existem vários tipos de absorventes: externos (descartáveis ou de pano), internos (tampões) e os coletores menstruais de silicone. A escolha depende de com qual você se sente mais confortável. O coletor é ecológico e dura até 12 horas, enquanto os tampões internos devem ser trocados a cada 4 ou 6 horas.",
        emocional: "As flutuações hormonais durante o ciclo podem mexer com suas emoções. É normal se sentir mais irritada, sensível ou com vontade de chorar sem motivo aparente. Respeite seu tempo, escreva sobre seus sentimentos e procure conversar com amigos ou psicólogos se sentir sobrecarregada.",
        alimentacao: "Uma alimentação equilibrada ajuda a amenizar sintomas do ciclo menstrual. Beba bastante água para combater o inchaço. Alimentos ricos em ferro (como feijão e folhas escuras) ajudam a repor a perda sanguínea, e alimentos com magnésio (como banana e chocolate amargo) ajudam nas cólicas.",
        ajuda: "Se você estiver sentindo algo diferente, tiver dúvidas sobre seu ciclo ou dores intensas, a melhor atitude é conversar com um ginecologista ou médico de família no posto de saúde (UBS). Cuidar de si é um ato de carinho com a sua vida!"
    };

    // Alternar janela de chat ao clicar no botão
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

    // Enviar mensagem
    const sendMessage = () => {
        const text = inputField.value.trim();
        if (!text) return;

        // Adicionar mensagem do usuário
        appendMessage(text, 'user');
        inputField.value = '';

        // Resposta da Luna com um pequeno delay para parecer natural
        setTimeout(() => {
            const botReply = getBotResponse(text);
            appendMessage(botReply, 'bot');
        }, 600);
    };

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Função para renderizar mensagens
    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg msg-${sender}`;
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Processar a mensagem do usuário e encontrar a melhor resposta
    function getBotResponse(query) {
        const cleanQuery = query.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""); // Remove acentos

        // Verificar correspondência de palavras-chave
        if (cleanQuery.includes("menstru") || cleanQuery.includes("ciclo") || cleanQuery.includes("fluxo")) {
            if (cleanQuery.includes("primeira") || cleanQuery.includes("menarca") || cleanQuery.includes("comeco")) {
                return responses.menarca;
            }
            return responses.menstruacao;
        }
        if (cleanQuery.includes("colica") || cleanQuery.includes("dor") || cleanQuery.includes("utero")) {
            return responses.colica;
        }
        if (cleanQuery.includes("puberdade") || cleanQuery.includes("muda") || cleanQuery.includes("corpo") || cleanQuery.includes("peito") || cleanQuery.includes("seio")) {
            return responses.puberdade;
        }
        if (cleanQuery.includes("tpm") || cleanQuery.includes("humor") || cleanQuery.includes("irritada")) {
            return responses.tpm;
        }
        if (cleanQuery.includes("gravidez") || cleanQuery.includes("camisinha") || cleanQuery.includes("anticoncepcion") || cleanQuery.includes("pilula") || cleanQuery.includes("contracept")) {
            return responses.contraceptivos;
        }
        if (cleanQuery.includes("ist") || cleanQuery.includes("infeccao") || cleanQuery.includes("dst") || cleanQuery.includes("sifilis") || cleanQuery.includes("hiv")) {
            return responses.ists;
        }
        if (cleanQuery.includes("hpv") || cleanQuery.includes("vacina")) {
            return responses.hpv;
        }
        if (cleanQuery.includes("higiene") || cleanQuery.includes("lavar") || cleanQuery.includes("banho") || cleanQuery.includes("cheiro")) {
            return responses.higiene;
        }
        if (cleanQuery.includes("absorvente") || cleanQuery.includes("coletor") || cleanQuery.includes("tampon")) {
            return responses.absorvente;
        }
        if (cleanQuery.includes("emocao") || cleanQuery.includes("sentimento") || cleanQuery.includes("chora") || cleanQuery.includes("triste") || cleanQuery.includes("ansied")) {
            return responses.emocional;
        }
        if (cleanQuery.includes("aliment") || cleanQuery.includes("comer") || cleanQuery.includes("comida") || cleanQuery.includes("agua") || cleanQuery.includes("chocolate")) {
            return responses.alimentacao;
        }
        if (cleanQuery.includes("ajuda") || cleanQuery.includes("medico") || cleanQuery.includes("gineco")) {
            return responses.ajuda;
        }

        // Fallback genérico acolhedor
        return "Hum, que pergunta interessante! Não tenho certeza sobre essa resposta exata, mas lembre-se: falar sobre nosso corpo é super importante e saudável! Que tal dar uma olhadinha na nossa seção de 'Saúde Feminina' ou nos enviar uma mensagem direta pelo formulário de 'Contato'? Se for uma dor ou sintoma físico desconfortável, conversar com um médico de confiança é sempre a melhor escolha!";
    }
}
