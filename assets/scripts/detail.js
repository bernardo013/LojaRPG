const detalhe = document.querySelector('.detalhes-card')

document.addEventListener("DOMContentLoaded", () => {
  const urlObj = new URL(window.location.href);
  const params = new URLSearchParams(urlObj.search);
  const id = params.get("id");

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const detalhe = document.querySelector('.detalhes-card')
            const produtos = JSON.parse(xhr.responseText)
       

            produtos.map(produto => {
                if(produto.id == id) {
                    detalhe.innerHTML = `
                <img> src="/assets/images/quest.png" alt="" class="detalhes-img">
                <div> class="detalhes-info">
                    <h3> class="${produto.nome}"></h3>

                    <p> class="detalhes-preco">${produto.preco}</p>

                    <p> class="detalhes-descricao">${produto.detalhe}</p>
                    <div class="detalhes-btn">
                        <button class="btn-add-carrinho"></button>

                        <a href="/index.html">
                            <button class="btn-voltar"></button>
                        </a>
                    </div>
                </div>`
                }
            })

         xhr.open("GET", "produtos.json")
         xhr.send()
    }
    }
})