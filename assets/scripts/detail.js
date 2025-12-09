const xhr = new XMLHttpRequest();
const nomeVarNoLocalStorage = "id";

document.addEventListener("DOMContentLoaded", () => {
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
            <img src="/assets/images/quest.png" alt="" class="detalhes-img">
            <div class="detalhes-info">
                <h3 class="detalhes-nome">${element.nome}</h3>
                <p class="detalhes-preco">${element.preco}</p>
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
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search);
    const id = params.get("id");

    const arrTemp = localStorage.getItem(nomeVarNoLocalStorage);
    var arr = arrTemp ? JSON.parse(arrTemp) : []

    arr = [...arr, id];

    localStorage.setItem(nomeVarNoLocalStorage, JSON.stringify(arr));

    document.querySelector(".btn-add-carrinho");

}
