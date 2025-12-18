const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    const idProdutosCarrinhoBase = localStorage.getItem('id')
    const idProdutosCarrinho = JSON.parse(idProdutosCarrinhoBase)


    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const carrinho = document.querySelector('.container-detalhes-main-cart')
			const totalOuroCarrinho = document.querySelector('.p-valor-total')
            const produtos = JSON.parse(xhr.responseText)

            console.log('p', produtos)

            produtos.map((element) => {
                //some testa se algum elemento do array passa na condição
                if (idProdutosCarrinho.find((idDoCarrinho) => idDoCarrinho == element.id)) {
                    console.log('entrou', element)
                    carrinho.innerHTML += `             
                            <article class="container-detalhes-cart">
                                <div class="detalhes-info-cart">
                                     <img class="detalhes-img-cart" src="${element.img}" alt="${element.nome}">   
                                    <h3 class="detalhes-nome-cart">${element.nome}</h3>
                                    <p class="detalhes-preco-cart">Preço: <img src="/assets/images/moeda.png" alt="moeda" class="icone-moeda-cart"> ${element.preco} de ouro</p>
                                    <p class="detalhes-descricao-cart">${element.descricao}</p>
                            </article>   

                        <a href="/index.html" class="link-carrinho">
                            <button class="btn-FinalizarCompra">Finalizar Compra</button>
                        </a> 
                `}
            })

let total = 0 
            if (idProdutosCarrinho.length > 0) {
                idProdutosCarrinho.forEach((id) => {
                    const produto = produtos.find((p) => String(p.id) == String(id))
                    if (produto) {
                        total += Number(produto.preco)
                    }
                })
            }
	// exibe o total de ouro do carrinho
		if (totalOuroCarrinho) {
			totalOuroCarrinho.textContent = `Total: ${total} de ouro`
		}
			localStorage.setItem('totalOuroCarrinho', String(total))
        }
    }
    xhr.open('GET', '/produtos.json')
    xhr.send()
})


