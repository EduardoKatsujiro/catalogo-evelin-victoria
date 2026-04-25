const produtos = [
    { 
        nome: "Malbec X 100ml", 
        marca: "Boticário", 
        preco: "189,90", 
        img: "img/malbec.png" 
    },
    { 
        nome: "Eudora Velvet Sensual", 
        marca: "Eudora", 
        preco: "79,90", 
        img: "img/velvet.png" 
    },
    { 
        nome: "Lily Essence 75ml", 
        marca: "Boticário", 
        preco: "219,90", 
        img: "img/lily.png" 
    }
];

function renderizar(lista) {
    const container = document.getElementById('catalogo');
    container.innerHTML = lista.map(p => `
        <div class="produto-card">
            <img src="${p.img}" alt="${p.nome}">
            <p style="color: #C5A36D; font-weight: bold; font-size: 12px;">${p.marca.toUpperCase()}</p>
            <h3>${p.nome}</h3>
            <p class="preco">R$ ${p.preco}</p>
            <a href="https://wa.me/5547999999999?text=Oi Evelin! Vi no catálogo e quero o ${p.nome}" 
               target="_blank" class="btn-whatsapp">
               Pedir no WhatsApp
            </a>
        </div>
    `).join('');
}

function buscar() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const filtrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(termo) || 
        p.marca.toLowerCase().includes(termo)
    );
    renderizar(filtrados);
}

renderizar(produtos);
