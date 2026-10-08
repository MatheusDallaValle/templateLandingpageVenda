const slug = new URLSearchParams(window.location.search).get("clinica") || "demonstracao";
const clinica = clinicas[slug] || clinicas.demonstracao;

const setHTML = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value ?? "";
};

const setAttr = (id, attr, value) => {
    const el = document.getElementById(id);
    if (el && value) el.setAttribute(attr, value);
};

const whatsappUrl = `https://wa.me/${String(clinica.whatsapp).replace(/\D/g, "")}`;

document.title = clinica.tituloPagina || clinica.nome;
setAttr("logoHeader", "src", clinica.logo);
setAttr("heroImagem", "src", clinica.imagemHero);

setHTML("heroTitulo", clinica.hero.titulo);
setHTML("heroDescricao", clinica.hero.descricao);
setHTML("statPacientes", clinica.estatisticas.pacientes);
setHTML("statAprovacao", clinica.estatisticas.aprovacao);
setHTML("statExperiencia", clinica.estatisticas.experiencia);

setHTML("sobreTitulo", clinica.sobre.titulo);
setHTML("sobreDescricao", clinica.sobre.descricao);
setHTML("missao", clinica.sobre.missao);
setHTML("visao", clinica.sobre.visao);
setHTML("valores", clinica.sobre.valores);

setHTML("endereco", clinica.endereco);
setHTML("telefone", clinica.telefone);
setHTML("horario", clinica.horario);
setAttr("mapa", "src", clinica.mapa);

setHTML("footerNome", clinica.nome);
setHTML("footerDescricao", `Clínica odontológica completa focada no<br>seu conforto, saúde e estética.`);

["ctaHeader", "button1"].forEach(id => setAttr(id, "href", whatsappUrl));
setAttr("instagram", "href", clinica.redes.instagram);
setAttr("facebook", "href", clinica.redes.facebook);
setAttr("youtube", "href", clinica.redes.youtube);

document.getElementById("listaEspecialidades").innerHTML = clinica.especialidades.map(item => `
    <div class="cartaoEspecialidades">
        <img src="${item.icone}" alt="${item.titulo}">
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
        <a href="${whatsappUrl}" target="_blank" rel="noopener">
            saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
        </a>
    </div>
`).join("");

document.getElementById("listaEquipe").innerHTML = clinica.equipe.map(item => `
    <div class="cartaoEquipe">
        <img src="${item.imagem}" alt="${item.nome}" style="width: 278px;">
        <div class="espacoEquipe">
            <h3>${item.nome}</h3>
            <p class="cro">${item.cro}</p>
            <p class="especialidadeEquipe">${item.especialidade}</p>
            <div class="linksEquipe">
                <a href="${clinica.redes.linkedin || '#'}"><img src="img/linkedin.svg" alt="LinkedIn"></a>
                <a href="${clinica.redes.instagram}" target="_blank" rel="noopener"><img src="img/instagram.svg" alt="Instagram"></a>
            </div>
        </div>
    </div>
`).join("");
