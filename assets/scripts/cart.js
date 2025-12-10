const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', () => {
    const id = localStorage.getItem('id')
    const IdTratado = JSON.parse(id)

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const carrinho = document.querySelector('.container-detalhes')
            const produtos = JSON.parse(xhr.responseText)


            produtos.forEach((e) => {
                if(e.id == IdTratado)
                carrinho.innerHTML += `
                <section class="container-detalhes">
                    <img src="/assets/images/quest.png" alt="" class="detalhes-img">
                    <h3 class="detalhes-nome">${e.nome}</h3>
                    <p class="detalhes-preco">${e.preco}</p>
                    <p class="detalhes-descricao">aa</p>
                    <button>Continuar</button>
                    <button>Voltar para o catálogo</button>
                </section>
                `
           })
        }
    }
})
