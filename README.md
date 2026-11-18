# Template de Landing Page Odontológica

Template responsivo feito em **HTML, CSS e JavaScript puro**. A personalização de cada cliente fica concentrada em `config.js`; o `script.js` lê os dados e preenche a página sem precisar duplicar o projeto.

## Estrutura

- `index.html`: estrutura das seções e elementos da página.
- `css/reset.css`: reset de estilos.
- `css/style.css`: visual, responsividade e variáveis de cor.
- `config.js`: configurações de cada clínica.
- `script.js`: aplicação dos dados na página e criação dos cards.
- `img/`: imagens, ícones e logotipos.

## Como visualizar

Abra `index.html` no navegador ou publique a pasta em uma hospedagem estática. Para visualizar uma configuração específica, use `?clinica=identificador`:

```text
index.html?clinica=demonstracao
index.html?clinica=nome-da-clinica
```

## Como cadastrar uma clínica

1. Abra `config.js`.
2. Duplique o objeto `demonstracao` dentro de `clinicas`.
3. Troque o nome da chave por um identificador simples, sem espaços (por exemplo, `clinicaCentro`).
4. Preencha os dados em `identidade`, `contato`, `redes`, `hero`, `sobre`, `especialidades`, `equipe` e `rodape`.
5. Adicione as imagens necessárias à pasta `img/` e informe os caminhos relativos, como `img/logo-cliente.png`.
6. Abra `index.html?clinica=clinicaCentro` para conferir a versão personalizada.

## O que pode ser personalizado

- Nome da clínica, título da página e logotipo.
- Cores principais, secundárias e fundos de destaque.
- Imagem e textos da primeira dobra (hero).
- Texto e cards da seção Sobre.
- Benefícios/diferenciais exibidos na seção Sobre.
- Especialidades e seus ícones, títulos e descrições.
- Profissionais, fotos, registros, especialidades e Instagram individual.
- WhatsApp, telefone, endereço, horário, mapa e redes sociais.
- Textos de botões, títulos, etiquetas e rodapé.
- Exibição ou ocultação das seções em `secoes`.
- Estatísticas opcionais, somente quando houver números reais confirmados.

## Cuidados antes de publicar

- O objeto `demonstracao` contém textos de orientação e imagens de demonstração. Substitua-os por conteúdo aprovado pelo cliente.
- Não publique estatísticas, depoimentos, especialidades, registros profissionais, credenciais ou resultados sem confirmação.
- O WhatsApp deve conter código do país + DDD + número, somente dígitos (ex.: `5544999999999`). Sem um número válido, os botões continuam visíveis e levam à seção de contato; ao cadastrar o número, passam a abrir o WhatsApp.
- Use links completos `https://` para redes sociais. Os ícones permanecem visíveis no rodapé, mas ficam desativados até que os links sejam cadastrados.
- O mapa aceita um endereço de incorporação do Google Maps (`https://www.google.com/maps/...`). Se não houver mapa válido, o iframe é ocultado.
- Confirme autorização de uso de fotos, logotipos e depoimentos.
- Teste em celular e computador antes de entregar.

## Segurança e funcionamento

Os textos fornecidos em `config.js` são inseridos como texto (`textContent`), não como HTML. Isso evita que conteúdo digitado pelo cliente seja interpretado como marcação ou script. Para manter esse comportamento, escreva os textos sem tags HTML.

As listas de especialidades, equipe, cards Sobre e benefícios são criadas pelo JavaScript a partir dos arrays da configuração. Listas vazias não geram profissionais ou tratamentos fictícios: as áreas de equipe e especialidades exibem um aviso de preenchimento para facilitar a visualização do template.

## Observações técnicas

- Não é necessário instalar dependências ou usar framework.
- O projeto pode ser publicado em hospedagem estática.
- O parâmetro `?clinica=` seleciona a configuração; se não existir, o sistema usa `demonstracao`.
