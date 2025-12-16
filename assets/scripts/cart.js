const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    const idProdutosCarrinhoBase = localStorage.getItem('id')
    const idProdutosCarrinho = JSON.parse(idProdutosCarrinhoBase)

    // idProdutosCarrinho = [0, 1, 2, 3]

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const carrinho = document.querySelector('.container-detalhe')
            const produtos = JSON.parse(xhr.responseText)

            console.log('p', produtos)

            produtos.map((e) => {
                //quero saber se o id do produto está dentro do array de ids do carrinho
                //some testa se algum elemento do array passa na condição
                if (idProdutosCarrinho.find((idDoCarrinho) => idDoCarrinho == e.id)) {
                    console.log('entrou', e)
                    carrinho.innerHTML += `
                <nav class="detalhes-card-cart">
                    <img src="/assets/images/quest.png" alt="" class="detalhes-img">
                    <h3 class="detalhes-nome">${e.nome}</h3>
                    <p class="detalhes-preco">${e.preco}</p>
                    <p class="detalhes-descricao">aa</p>
                </nav>
                `}
            })
        }
    }
    xhr.open('GET', '/produtos.json')
    xhr.send()
})
