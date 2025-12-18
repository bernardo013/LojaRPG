const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    const idProdutosCarrinhoBase = localStorage.getItem('id')
    const idProdutosCarrinho = JSON.parse(idProdutosCarrinhoBase)

    // idProdutosCarrinho = [0, 1, 2, 3]

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const carrinho = document.querySelector('.container-detalhes-main-cart')
            const produtos = JSON.parse(xhr.responseText)

            console.log('p', produtos)

            produtos.map((element) => {
                //quero saber se o id do produto está dentro do array de ids do carrinho
                //some testa se algum elemento do array passa na condição
                if (idProdutosCarrinho.find((idDoCarrinho) => idDoCarrinho == element.id)) {
                    console.log('entrou', element)
                    carrinho.innerHTML += `             
                        <main class="container-detalhes-main-cart">
                            <article class="container-detalhes-cart">

                                <div class="detalhes-info-cart">
                                     <img class="detalhes-img-cart" src="${element.img}" alt="${element.nome}">   
                                    <h3 class="detalhes-nome-cart">${element.nome}</h3>
                                    <p class="detalhes-preco-cart">Preço: <img src="/assets/images/moeda.png" alt="moeda" class="icone-moeda-cart"> ${element.preco} de ouro</p>
                                    <p class="detalhes-descricao-cart">${element.descricao}</p>

                                
                                    <div class="controle-quantidade">
                                        <button class="btn-quantidade-diminuir" onclick="diminuirQuantidade(${element.id})">-</button>
                                        <span class="quantidade">0</span>
                                        <button class="btn-quantidade-aumentar" onclick="addQuantidade()">+</button>
                                    </div>
                                </div>
                            </article>                        
                        </main>
                `}
            })
        }
    }
    xhr.open('GET', '/produtos.json')
    xhr.send()
})


function addQuantidade() {
    let quantidade = document.querySelector('.quantidade'); 
    let valor = parseInt(quantidade.textContent);
    valor++;
    quantidade.textContent = valor;
}
function diminuirQuantidade() { }
let quantidade = document.querySelector('.quantidade');
let valor = parseInt(quantidade.textContent);
if (valor >= 1) {
    valor--;
    quantidade.textContent = valor;
}
