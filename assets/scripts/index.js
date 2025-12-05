//evento que indica que se o DOM já estiver carregado depois do html ele executa o que estiver dentro da arrow funciton.
document.addEventListener("DOMContentLoaded", () => {
    var xhr = new XMLHttpRequest()

    //indica que quando o status do meu readyState for 4, que representa solicitação concluida e resposta pronta. 
    xhr.onreadystatechange = function(){ 
    if(xhr.readyState == 4 && xhr.status == 200) {
        var list = document.querySelector('.lista-itens')
        var listParse = JSON.parse(xhr.responseText)

    listParse.map((element) => {
                list.innerHTML += ` 
                <ul class="lista-itens">
                    <li>
                        <article class="produtos">
                            <h3>${element.nome}</h3>
                            <p>Preço:${element.preco}</p>
                        <a href="./assets/pages/detail.html?teste=valor"><button class="btn-produtos">Ver mais</button></a>
                        </article>
                        </li>
                    </ul>`
         })
       
    }
}
    xhr.open("GET", "produtos.json")
    xhr.send()


        //transforma o json em objeto novamente. 
    const usuarioIndex = JSON.parse(localStorage.getItem("usuario"));
            
        //verifica se o usuario está correto e se o nome está correto,
        // se sim faz a troca de nome do botão para o nome do usuário
    if (usuarioIndex && usuarioIndex.nome) {
        const btnLogin = document.querySelector(".btn-login-cabecalho");
        btnLogin.innerHTML = usuarioIndex.nome;
    }
});


