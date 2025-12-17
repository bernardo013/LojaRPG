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

            produtos.map((e) => {
                //quero saber se o id do produto está dentro do array de ids do carrinho
                //some testa se algum elemento do array passa na condição
                if (idProdutosCarrinho.find((idDoCarrinho) => idDoCarrinho == e.id)) {
                    console.log('entrou', e)
                    carrinho.innerHTML += `             
                        <main class="container-detalhes-main-cart">
                            <article class="container-detalhes-cart">

                                <div class="detalhes-info-cart">
                                    <img src="/assets/images/quest.png" class="detalhes-img-cart">

                                    <h3 class="detalhes-nome-cart">${e.nome}</h3>
                                    <p class="detalhes-preco-cart">${e.preco}</p>
                                    <p class="detalhes-descricao-cart">${e.descricao}</p>

                                
                                    <div class="controle-quantidade">
                                        <button class="btn-quantidade-diminuir" onclick="diminuirQuantidade()">-</button>
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
function diminuirQuantidade() {}
        let quantidade = document.querySelector('.quantidade');
        let valor = parseInt(quantidade.textContent);
        if (valor >= 1) {
            valor--;
            quantidade.textContent = valor;
        }
