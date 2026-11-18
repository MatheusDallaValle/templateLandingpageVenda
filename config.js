/*
 * CONFIGURAÇÕES DAS CLÍNICAS
 * Duplique um objeto dentro de `clinicas` e altere apenas os dados.
 * Não publique informações de exemplo sem confirmação do cliente.
 */
const clinicas = {
    demonstracao: {
        identidade: {
            nome: "Sua Clínica Odontológica",
            tituloPagina: "Sua Clínica Odontológica | Cuidado com seu sorriso",
            logo: "img/logo.png",
            corPrincipal: "#0066FF",
            corSecundaria: "#0A2540",
            corDestaque: "#EEF4FE",
            corFundoBotao: "#F0F6FF"
        },
        imagens: {
            hero: "img/Dentista sorrindo e atendendo paciente.svg"
        },
        contato: {
            whatsapp: "",
            telefone: "",
            endereco: "Adicione o endereço da clínica",
            horario: "Informe os dias e horários de atendimento",
            mapa: ""
        },
        redes: {
            instagram: "",
            facebook: "",
            youtube: ""
        },
        secoes: {
            estatisticas: false,
            sobre: true,
            beneficios: true,
            especialidades: true,
            equipe: true,
            contato: true
        },
        navegacao: {
            inicio: "Início",
            sobre: "Sobre nós",
            especialidades: "Especialidades",
            equipe: "Equipe",
            contato: "Contato"
        },
        botoes: {
            agendar: "Agendar consulta",
            heroPrincipal: "Agendar uma avaliação",
            heroSecundario: "Nossos tratamentos",
            saibaMais: "Saiba mais"
        },
        hero: {
            titulo: "Cuidamos do seu sorriso com atenção e carinho.",
            descricao: "Conte um pouco sobre a proposta da clínica, os tratamentos oferecidos e a experiência de atendimento."
        },
        estatisticas: {
            itens: []
        },
        sobre: {
            etiqueta: "CONHEÇA NOSSA CLÍNICA",
            titulo: "Um cuidado pensado para você",
            descricao: "Apresente a história, a estrutura e a forma de atendimento da clínica.",
            cards: [
                { icone: "img/missao.svg", titulo: "Nossa missão", texto: "Descreva a missão da clínica." },
                { icone: "img/visao.svg", titulo: "Nossa visão", texto: "Descreva a visão da clínica." },
                { icone: "img/valor.svg", titulo: "Nossos valores", texto: "Descreva os valores que orientam o atendimento." }
            ]
        },
        beneficios: {
            itens: [
                { icone: "img/diagnostico.svg", titulo: "Diagnóstico", descricao: "Explique os recursos de avaliação disponíveis." },
                { icone: "img/humanizado.png", titulo: "Atendimento humanizado", descricao: "Conte como é a experiência do paciente." },
                { icone: "img/biosseguran%23U00e7a.svg", titulo: "Biossegurança", descricao: "Informe os cuidados adotados pela clínica." },
                { icone: "img/pontualidade.svg", titulo: "Pontualidade", descricao: "Descreva como funciona o agendamento." }
            ]
        },
        especialidades: {
            etiqueta: "TRATAMENTOS",
            titulo: "Especialidades odontológicas",
            descricao: "Apresente os tratamentos que a clínica realmente oferece.",
            itens: []
        },
        equipe: {
            etiqueta: "NOSSA EQUIPE",
            titulo: "Conheça os profissionais",
            descricao: "Adicione somente profissionais e registros confirmados.",
            itens: []
        },
        contatoTexto: {
            etiqueta: "FALE CONOSCO",
            titulo: "Entre em contato",
            descricao: "Estamos à disposição para tirar suas dúvidas e ajudar no agendamento.",
            informacoes: "Informações de contato",
            endereco: "Endereço",
            telefone: "Telefone",
            horario: "Horário de funcionamento"
        },
        rodape: {
            descricao: "Informações, atendimento e cuidado com seu sorriso."
        }
    }
};
