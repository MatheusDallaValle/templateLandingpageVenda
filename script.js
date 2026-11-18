(() => {
    "use strict";

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("clinica") || "demonstracao";
    const config = clinicas[slug] || clinicas.demonstracao;
    if (!config) return;

    const $ = (id) => document.getElementById(id);
    const text = (id, value) => {
        const element = $(id);
        if (element) element.textContent = value == null ? "" : String(value);
    };
    const attr = (id, name, value) => {
        const element = $(id);
        if (element && value) element.setAttribute(name, value);
    };
    const hide = (element, shouldHide = true) => {
        if (element) element.hidden = shouldHide;
    };
    const make = (tag, className, value) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (value != null) element.textContent = String(value);
        return element;
    };
    const addImage = (parent, src, alt, className) => {
        if (!src) return;
        const image = document.createElement("img");
        image.src = src;
        image.alt = alt || "";
        if (className) image.className = className;
        image.loading = "lazy";
        parent.appendChild(image);
    };
    const validUrl = (value) => {
        if (!value) return "";
        try {
            const url = new URL(value, window.location.href);
            return ["http:", "https:"].includes(url.protocol) ? url.href : "";
        } catch { return ""; }
    };
    const setLink = (element, value, hideWhenMissing = true) => {
        if (!element) return;
        const url = validUrl(value);
        if (url) {
            element.href = url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
            hide(element, false);
        } else {
            element.removeAttribute("href");
            hide(element, hideWhenMissing);
        }
    };
    const whatsapp = String(config.contato?.whatsapp || "").replace(/\D/g, "");
    const whatsappUrl = /^\d{10,15}$/.test(whatsapp) ? `https://wa.me/${whatsapp}` : "";
    const cta = (id) => {
        const element = $(id);
        if (!element) return;
        // Sem WhatsApp cadastrado, o botão continua visível e leva à área de contato.
        setLink(element, whatsappUrl, false);
        if (!whatsappUrl) {
            element.href = "#contato";
            element.removeAttribute("target");
            element.removeAttribute("rel");
            element.title = "Adicione o WhatsApp da clínica no config.js para ativar o agendamento.";
        }
    };
    const section = (id, enabled) => hide($(id), enabled === false);

    // Identidade visual
    const identity = config.identidade || {};
    document.title = identity.tituloPagina || identity.nome || "Clínica odontológica";
    attr("logoHeader", "src", identity.logo);
    text("footerNome", identity.nome);
    const root = document.documentElement;
    if (identity.corPrincipal) root.style.setProperty("--cor-principal", identity.corPrincipal);
    if (identity.corSecundaria) root.style.setProperty("--cor-secundaria", identity.corSecundaria);
    if (identity.corDestaque) root.style.setProperty("--cor-destaque", identity.corDestaque);
    if (identity.corFundoBotao) root.style.setProperty("--cor-fundo-botao", identity.corFundoBotao);

    // Navegação e chamadas para ação
    const nav = config.navegacao || {};
    ["inicio", "sobre", "especialidades", "equipe", "contato"].forEach((key) => {
        document.querySelectorAll(`[data-nav="${key}"]`).forEach((el) => { el.textContent = nav[key] || ""; });
    });
    // Menu hamburguer para telas menores. No desktop, a navegação permanece aberta.
    const menuButton = $("menuHamburguer");
    const mainMenu = $("menuPrincipal");
    if (menuButton && mainMenu) {
        const closeMenu = () => {
            mainMenu.classList.remove("menuAberto");
            menuButton.classList.remove("ativo");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        };
        menuButton.addEventListener("click", () => {
            const isOpen = mainMenu.classList.toggle("menuAberto");
            menuButton.classList.toggle("ativo", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        });
        mainMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    const buttons = config.botoes || {};
    text("ctaHeaderTexto", buttons.agendar);
    text("button1Texto", buttons.heroPrincipal);
    text("button2", buttons.heroSecundario);
    cta("ctaHeader");
    cta("button1");

    // Hero
    text("heroTitulo", config.hero?.titulo);
    text("heroDescricao", config.hero?.descricao);
    attr("heroImagem", "src", config.imagens?.hero);

    // Estatísticas: só aparecem quando o cliente fornece dados reais.
    const stats = config.estatisticas?.itens || [];
    const statsContainer = $("statsContainer");
    if (statsContainer) {
        statsContainer.replaceChildren();
        stats.forEach((item) => {
            if (!item.valor || !item.rotulo) return;
            const card = make("div", "info");
            card.append(make("h3", "", item.valor), make("p", "", item.rotulo));
            statsContainer.appendChild(card);
        });
    }
    section("statsContainer", config.secoes?.estatisticas === false || stats.length === 0);

    // Sobre e cards de missão/visão/valores
    text("sobreEtiqueta", config.sobre?.etiqueta);
    text("sobreTitulo", config.sobre?.titulo);
    text("sobreDescricao", config.sobre?.descricao);
    const aboutCards = $("sobreCards");
    if (aboutCards) {
        aboutCards.replaceChildren();
        (config.sobre?.cards || []).forEach((item) => {
            const card = make("div", "cartao");
            addImage(card, item.icone, item.titulo);
            card.append(make("h3", "", item.titulo), make("p", "", item.texto));
            aboutCards.appendChild(card);
        });
    }
    section("sobre", config.secoes?.sobre);

    // Benefícios / diferenciais
    const benefits = $("beneficiosLista");
    if (benefits) {
        benefits.replaceChildren();
        (config.beneficios?.itens || []).forEach((item) => {
            const card = make("div", "beneficio");
            addImage(card, item.icone, "");
            const content = make("div", "textoBeneficio");
            content.append(make("h2", "", item.titulo), make("p", "", item.descricao));
            card.appendChild(content);
            benefits.appendChild(card);
        });
    }
    section("beneficiosSobre", config.secoes?.beneficios);

    // Especialidades
    text("especialidadesEtiqueta", config.especialidades?.etiqueta);
    text("especialidadesTitulo", config.especialidades?.titulo);
    text("especialidadesDescricao", config.especialidades?.descricao);
    const specialties = $("listaEspecialidades");
    if (specialties) {
        specialties.replaceChildren();
        (config.especialidades?.itens || []).forEach((item) => {
            const card = make("article", "cartaoEspecialidades");
            addImage(card, item.icone, item.titulo);
            card.append(make("h3", "", item.titulo), make("p", "", item.descricao));
            if (whatsappUrl) {
                const link = make("a", "", buttons.saibaMais || "Saiba mais");
                link.href = whatsappUrl;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                card.appendChild(link);
            }
            specialties.appendChild(card);
        });
    }
    if (specialties && !(config.especialidades?.itens || []).length) {
        const empty = make("article", "cartaoEspecialidades estadoVazio");
        empty.append(make("h3", "", "Adicione as especialidades da clínica"), make("p", "", "Cadastre os tratamentos oferecidos no arquivo config.js para preencher esta área."));
        specialties.appendChild(empty);
    }
    section("especialidades", config.secoes?.especialidades);

    // Equipe: nenhum profissional fictício é incluído por padrão.
    text("equipeEtiqueta", config.equipe?.etiqueta);
    text("equipeTitulo", config.equipe?.titulo);
    text("equipeDescricao", config.equipe?.descricao);
    const team = $("listaEquipe");
    if (team) {
        team.replaceChildren();
        (config.equipe?.itens || []).forEach((person) => {
            const card = make("article", "cartaoEquipe");
            addImage(card, person.imagem, person.nome, "fotoEquipe");
            const body = make("div", "espacoEquipe");
            body.append(make("h3", "", person.nome));
            if (person.registro) body.appendChild(make("p", "cro", person.registro));
            if (person.especialidade) body.appendChild(make("p", "especialidadeEquipe", person.especialidade));
            const links = make("div", "linksEquipe");
            const instagram = validUrl(person.instagram);
            if (instagram) {
                const link = make("a"); link.href = instagram; link.target = "_blank"; link.rel = "noopener noreferrer";
                addImage(link, "img/instagram.svg", "Instagram"); links.appendChild(link);
            }
            if (links.childElementCount) body.appendChild(links);
            card.appendChild(body);
            team.appendChild(card);
        });
    }
    if (team && !(config.equipe?.itens || []).length) {
        const empty = make("article", "cartaoEquipe estadoVazioEquipe");
        const body = make("div", "espacoEquipe");
        body.append(make("h3", "", "Adicione os profissionais"), make("p", "especialidadeEquipe", "Inclua somente nomes, fotos e registros confirmados no config.js."));
        empty.appendChild(body);
        team.appendChild(empty);
    }
    section("equipe", config.secoes?.equipe);

    // Contato e mapa
    const contact = config.contato || {};
    text("endereco", contact.endereco);
    text("telefone", contact.telefone);
    text("horario", contact.horario);
    text("footerDescricao", config.rodape?.descricao);
    text("contatoEtiqueta", config.contatoTexto?.etiqueta);
    text("contatoTitulo", config.contatoTexto?.titulo);
    text("contatoDescricao", config.contatoTexto?.descricao);
    text("contatoInformacoes", config.contatoTexto?.informacoes);
    text("enderecoLabel", config.contatoTexto?.endereco);
    text("telefoneLabel", config.contatoTexto?.telefone);
    text("horarioLabel", config.contatoTexto?.horario);
    const mapUrl = validUrl(contact.mapa);
    if (mapUrl && mapUrl.includes("google.com/maps")) attr("mapa", "src", mapUrl);
    else hide($("mapa"));
    section("contato", config.secoes?.contato);

    // Redes sociais sem links genéricos ou destinos fictícios.
    ["instagram", "facebook", "youtube"].forEach((network) => {
        const element = $(network);
        setLink(element, config.redes?.[network], false);
        if (element && !validUrl(config.redes?.[network])) {
            // Mantém o ícone visível no template, sem apontar para um perfil inventado.
            element.removeAttribute("href");
            element.setAttribute("aria-disabled", "true");
            element.setAttribute("tabindex", "-1");
            element.title = `Adicione o link do ${network} no config.js`;
        } else if (element) {
            element.removeAttribute("aria-disabled");
            element.removeAttribute("tabindex");
            element.removeAttribute("title");
        }
    });
})();
