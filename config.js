/*
 * CONFIGURAÇÕES DAS CLÍNICAS
 * Para adicionar uma nova clínica, copie um objeto e altere os dados.
 */
const clinicas = {
    demonstracao: {
        nome: "OdontoCare Prime",
        tituloPagina: "Odontologia Dalla Valle",
        logo: "img/logo.png",
        imagemHero: "img/Dentista sorrindo e atendendo paciente.svg",

        whatsapp: "5511999999999",

        hero: {
            titulo: "Transformamos o seu <b style='color: #0066FF;'>sorriso</b> e renovamos sua autoestima.",
            descricao: "Tecnologia avançada, corpo clínico renomado e atendimento humanizado para garantir a saúde bucal de toda a sua família."
        },

        estatisticas: {
            pacientes: "15k+",
            aprovacao: "99.8%",
            experiencia: "18+"
        },

        sobre: {
            titulo: "Cuidando do seu sorriso com paixão e precisão",
            descricao: "Fundada com o propósito de humanizar o atendimento odontológico, a OdontoCare Prime combina infraestrutura de ponta a uma equipe altamente capacitada para oferecer a melhor experiência.",
            missao: "Promover saúde bucal e bem-estar integral através de tratamentos odontológicos personalizados, seguros e altamente eficazes para todos os nossos pacientes.",
            visao: "Ser referência nacional em inovação odontológica, reconhecida pela excelência técnica, calor humano e satisfação absoluta dos pacientes atendidos.",
            valores: "Ética inegociável, empatia, constante atualização científica, transparência nos procedimentos e compromisso com o bem-estar do cliente."
        },

        endereco: "Av. Paulista, 1500 - Conjunto 82 - Bela Vista, São Paulo - SP",
        telefone: "(11) 3456-7890 / (11) 98765-4321",
        horario: "Segunda a Sexta: 08:00 - 19:00<br>Sábado: 08:00 - 13:00",

        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7285.02369017896!2d-54.253867864608736!3d-24.083489206616523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f4afee5c29e2d5%3A0x535a5b38673f8180!2sPra%C3%A7a%20Castelo%20Branco!5e0!3m2!1spt-BR!2sbr",

        redes: {
            instagram: "https://instagram.com/",
            facebook: "https://facebook.com/",
            youtube: "https://youtube.com/"
        },

        especialidades: [
            { icone: "img/alinhador.svg", titulo: "Ortodontia & Alinhadores", descricao: "Alinhamento dentário com aparelhos estéticos e alinhadores invisíveis de alta tecnologia." },
            { icone: "img/implantodontia.svg", titulo: "Implantodontia Avançada", descricao: "Recupere sua mastigação e segurança com implantes de alta precisão e carga imediata." },
            { icone: "img/estetica.svg", titulo: "Estética Dental & Lentes", descricao: "Transforme a cor e o formato dos seus dentes com lentes de contato de porcelana e clareamento a laser." },
            { icone: "img/odontopediatria.svg", titulo: "Odontopediatria", descricao: "Atendimento lúdico e carinhoso para crianças, garantindo saúde bucal desde os primeiros anos." },
            { icone: "img/edodontia.svg", titulo: "Endodontia (Tratamento de Canal)", descricao: "Tratamento de canal em sessão única utilizando microscopia operatória e instrumentos rotatórios." },
            { icone: "img/periodontia.svg", titulo: "Periodontia & Enxertos", descricao: "Cuidados especializados para a gengiva e tecidos de sustentação, prevenindo sangramentos e perdas." }
        ],

        equipe: [
            { imagem: "img/lucas.svg", nome: "Dr. Lucas Mendes", cro: "CRO-SP 102.345", especialidade: "Especialista em Ortodontia & Invisalign Doctor" },
            { imagem: "img/felipe.svg", nome: "Dr. Felipe Rocha", cro: "CRO-SP 98.712", especialidade: "Especialista em Estética Dental & Lentes" },
            { imagem: "img/roberto.svg", nome: "Dr. Roberto Silva", cro: "CRO-SP 87.430", especialidade: "Mestre em Implantodontia e Cirurgia" },
            { imagem: "img/juliana.svg", nome: "Dra. Juliana Alencar", cro: "CRO-SP 114.901", especialidade: "Especialista em Odontopediatria e Prevenção" }
        ]
    },

    sebastiao: {
        nome: "sebastiao",
        tituloPagina: "Osebastiao",
        logo: "img/logo.png",
        imagemHero: "img/Dentista sorrindo e atendendo paciente.svg",

        whatsapp: "5511999999999",

        hero: {
            titulo: "Transformamos o seu <b style='color: #0066FF;'>sorriso</b> e renovamos sua autoestima.",
            descricao: "Tecnologia avançada, corpo clínico renomado e atendimento humanizado para garantir a saúde bucal de toda a sua família."
        },

        estatisticas: {
            pacientes: "15k+",
            aprovacao: "99.8%",
            experiencia: "18+"
        },

        sobre: {
            titulo: "Cuidando do seu sorriso com paixão e precisão",
            descricao: "Fundada com o propósito de humanizar o atendimento odontológico, a OdontoCare Prime combina infraestrutura de ponta a uma equipe altamente capacitada para oferecer a melhor experiência.",
            missao: "Promover saúde bucal e bem-estar integral através de tratamentos odontológicos personalizados, seguros e altamente eficazes para todos os nossos pacientes.",
            visao: "Ser referência nacional em inovação odontológica, reconhecida pela excelência técnica, calor humano e satisfação absoluta dos pacientes atendidos.",
            valores: "Ética inegociável, empatia, constante atualização científica, transparência nos procedimentos e compromisso com o bem-estar do cliente."
        },

        endereco: "Av. Paulista, 1500 - Conjunto 82 - Bela Vista, São Paulo - SP",
        telefone: "(11) 3456-7890 / (11) 98765-4321",
        horario: "Segunda a Sexta: 08:00 - 19:00<br>Sábado: 08:00 - 13:00",

        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7285.02369017896!2d-54.253867864608736!3d-24.083489206616523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f4afee5c29e2d5%3A0x535a5b38673f8180!2sPra%C3%A7a%20Castelo%20Branco!5e0!3m2!1spt-BR!2sbr",

        redes: {
            instagram: "https://instagram.com/",
            facebook: "https://facebook.com/",
            youtube: "https://youtube.com/"
        },

        especialidades: [
            { icone: "img/alinhador.svg", titulo: "Ortodontia & Alinhadores", descricao: "Alinhamento dentário com aparelhos estéticos e alinhadores invisíveis de alta tecnologia." },
            { icone: "img/implantodontia.svg", titulo: "Implantodontia Avançada", descricao: "Recupere sua mastigação e segurança com implantes de alta precisão e carga imediata." },
            { icone: "img/estetica.svg", titulo: "Estética Dental & Lentes", descricao: "Transforme a cor e o formato dos seus dentes com lentes de contato de porcelana e clareamento a laser." },
            { icone: "img/odontopediatria.svg", titulo: "Odontopediatria", descricao: "Atendimento lúdico e carinhoso para crianças, garantindo saúde bucal desde os primeiros anos." },
            { icone: "img/edodontia.svg", titulo: "Endodontia (Tratamento de Canal)", descricao: "Tratamento de canal em sessão única utilizando microscopia operatória e instrumentos rotatórios." },
            { icone: "img/periodontia.svg", titulo: "Periodontia & Enxertos", descricao: "Cuidados especializados para a gengiva e tecidos de sustentação, prevenindo sangramentos e perdas." }
        ],

        equipe: [
            { imagem: "img/lucas.svg", nome: "Dr. Lucas Mendes", cro: "CRO-SP 102.345", especialidade: "Especialista em Ortodontia & Invisalign Doctor" },
            { imagem: "img/felipe.svg", nome: "Dr. Felipe Rocha", cro: "CRO-SP 98.712", especialidade: "Especialista em Estética Dental & Lentes" },
            { imagem: "img/roberto.svg", nome: "Dr. Roberto Silva", cro: "CRO-SP 87.430", especialidade: "Mestre em Implantodontia e Cirurgia" },
            { imagem: "img/juliana.svg", nome: "Dra. Juliana Alencar", cro: "CRO-SP 114.901", especialidade: "Especialista em Odontopediatria e Prevenção" }
        ]
    },
    
};
