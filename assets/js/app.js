const dados = [
    {
        id: 1,
        titulo: "Trilhas em BH",
        descricao: "Veja opções de trilhas em Belo Horizonte.",
        conteudo: "Belo Horizonte e seu entorno oferecem diversas opções de trilhas com visuais incríveis da Serra do Curral, cachoeiras e vegetação típica do cerrado e mata atlântica. Ideal para quem busca aventura e contato com a natureza.",
        categoria: "Ecoturismo",
        localizacao: "Parque das Mangabeiras / Serra do Curral",
        imagem: "./assets/img/trilha.png"
    },
    {
        id: 2,
        titulo: "Arquitetura",
        descricao: "Conheça a arquitetura de Belo Horizonte.",
        conteudo: "A capital mineira destaca-se pelo Conjunto Arquitetônico da Pampulha, projetado por Oscar Niemeyer e reconhecido como Patrimônio Cultural da Humanidade. Além disso, o centro da cidade abriga belos prédios em estilo Art Déco e Neoclássico.",
        categoria: "Patrimônio & Arquitetura",
        localizacao: "Orla da Lagoa da Pampulha",
        imagem: "./assets/img/igrejaPampulha.png"
    },
    {
        id: 3,
        titulo: "Cultura",
        descricao: "Veja as opções de acesso à cultura em Belo Horizonte.",
        conteudo: "O Circuito Liberdade reúne diversos museus e centros culturais de destaque nacional, como o CCBB BH, o Memorial Minas Gerais Vale e o Museu das Minas e do Metal, oferecendo uma rica programação gratuita de exposições e espetáculos.",
        categoria: "Cultura & Arte",
        localizacao: "Praça da Liberdade - Funcionários",
        imagem: "./assets/img/ccbb.png"
    }
];

// Função para renderizar os cards na Home
function renderizarHome() {
    const container = document.getElementById("cartoes");
    if (!container) return; // Se não estiver na index, interrompe

    container.innerHTML = "";

    dados.forEach(item => {
        const card = document.createElement("div");
        card.className = "cartao";
        
        card.innerHTML = `
            <a href="detalhes.html?id=${item.id}">
                <img class="imagem-do-cartao" src="${item.imagem}" alt="${item.titulo}">
            </a>
            <section class="corpo-do-cartao">
                <p class="nome-da-opcao">
                    <a href="detalhes.html?id=${item.id}">${item.titulo}</a>
                </p>
                <p class="descricao-da-opcao">${item.descricao}</p>
            </section>
        `;
        
        container.appendChild(card);
    });
}

// Carrega os detalhes na página Detalhes (detalhes.html)
function renderizarDetalhes() {
    const detalheContainer = document.getElementById("detalhes-conteudo");
    if (!detalheContainer) return; // Se não estiver em detalhes.html, interrompe

    // Pega o id passado na URL
    const params = new URLSearchParams(window.location.search);
    const idItem = parseInt(params.get("id"));

    // Busca pelo ID
    const itemEncontrado = dados.find(item => item.id === idItem);

    if (itemEncontrado) {
        detalheContainer.innerHTML = `
            <div class="cartao-detalhe">
                <h2>${itemEncontrado.titulo}</h2>
                <img src="${itemEncontrado.imagem}" alt="${itemEncontrado.titulo}" class="imagem-detalhes">
                <p class="categoria-tag"><strong>Categoria:</strong> ${itemEncontrado.categoria}</p>
                <p><strong>Localização:</strong> ${itemEncontrado.localizacao}</p>
                <p class="conteudo-texto">${itemEncontrado.conteudo}</p>
                <a href="index.html" class="botao-voltar">← Voltar para a página inicial</a>
            </div>
        `;
    } else {
        detalheContainer.innerHTML = `
            <div class="cartao-detalhe">
                <h2>Item não encontrado</h2>
                <p>O item solicitado não existe ou foi removido.</p>
                <a href="index.html" class="botao-voltar">← Voltar para a página inicial</a>
            </div>
        `;
    }
}

// Inicializa funções com a página carregada
document.addEventListener("DOMContentLoaded", () => {
    renderizarHome();
    renderizarDetalhes();
});