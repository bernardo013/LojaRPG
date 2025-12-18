const xhr = new XMLHttpRequest();
const nomeVarNoLocalStorage = "id";

document.addEventListener("DOMContentLoaded", () => {
    const carrinho = [];
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get("id");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var detalhe = document.querySelector(".detalhes-card");
            var produtos = JSON.parse(xhr.responseText);

            produtos.forEach((element) => {
                if (element.id == id) {
                    detalhe.innerHTML = `
            <img class="detalhes-img" src="${element.img}" alt="${element.nome}">
            <div class="detalhes-info">
                <h3 class="detalhes-nome">${element.nome}</h3>
                <p class="detalhes-preco"><strong>Preço: <img src="/assets/images/moeda.png" alt="moeda" class="icone-moeda-detail"> ${element.preco} de ouro</strong></p>
                <p class="detalhes-descricao">${element.descricao}</p>
                <div class="detalhes-btn">
                    <button class="btn-add-carrinho" onclick="guardarProduto()">Adicionar ao Carrinho</button>
                    <a href="/index.html">
                        <button class="btn-voltar">Voltar ao Catálogo</button>
                    </a>
                </div>
            </div>`;
                }
            });
        }
    };

    xhr.open("GET", "/produtos.json");
    xhr.send();
});

function guardarProduto() {
    document.querySelector(".btn-add-carrinho");
    //captura id em formato de string
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get("id");

    //procura o id no localstorage
    const arrTemp = localStorage.getItem(nomeVarNoLocalStorage);
    //valida se ele existe, se não, transforma arr em um array vazio. 
    var arr = arrTemp ? JSON.parse(arrTemp) : []

    //adiciona o id dentro desse array vazio.
    arr = [...arr, id];

    //transforma o id em string novamente. Pois o localStorage só aceita strings.
    localStorage.setItem(nomeVarNoLocalStorage, JSON.stringify(arr));

    //redireciona para o carrinho junto com o id adicionado ao array.
    window.location.href = "./cart.html"
}
