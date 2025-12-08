const xhr = new XMLHttpRequest()

document.addEventListener('DOMContentLoaded', () => {
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search)
    const id = params.get("id");

    xhr.onreadystatechange = function() {
     if (xhr.readyState == 4 && xhr.status == 200) {
      var detalhe = document.querySelector(".detalhes-card");
      var produtos = JSON.parse(xhr.responseText);
        

        produtos.forEach(element => {
            if(element.id == id) {
            detalhe.innerHTML = `
            <img src="/assets/images/quest.png" alt="" class="detalhes-img">
            <div class="detalhes-info">
                <h3 class="detalhes-nome">${element.nome}</h3>
                <p class="detalhes-preco">${element.preco}</p>
                <p class="detalhes-descricao">${element.descricao}</p>
                <div class="detalhes-btn">
                    <button class="btn-add-carrinho">Adicionar ao carrinho</button>
                    <a href="/index.html">
                        <button class="btn-voltar">Voltar ao Catálogo</button>
                    </a>
                </div>
            </div>`;
            guardarProduto();
        }})
      }
     }

     
     xhr.open("GET", '/produtos.json')
     xhr.send()   
})


    function guardarProduto(){
        const urlObj = new URL(window.location.href);
        const params = new URLSearchParams(urlObj.search)
        const id = params.get("id");

        const btn = document.querySelector(".btn-add-carrinho").addEventListener('click', (addLocal) => {
            addLocal = localStorage.setItem('id', String(id))
        })
    }
