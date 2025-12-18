//evento que indica que se o DOM já estiver carregado depois do html ele executa o que estiver dentro da arrow funciton.
document.addEventListener("DOMContentLoaded", () => {
  var xhr = new XMLHttpRequest();

  //pegar id 
  const urlObj = new URL(window.location.href);
  const params = new URLSearchParams(urlObj.search);
  const id = params.get("id");
  console.log(id);

  //indica que quando o status do meu readyState for 4, que representa solicitação concluida e resposta pronta.
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var list = document.querySelector(".lista-itens");
      var listParse = JSON.parse(xhr.responseText);

      //cria o componente dos produtos
      listParse.forEach((element) => {
        list.innerHTML += ` 
                <ul class="lista-itens">
                    <li>
                        <article class="produtos">
                         <img class="detalhes-img" src="${element.img}" alt="${element.nome}">
                            <h3 class="detalhes-nome">${element.nome}</h3>
                            <p class="detalhes-preco-index">Preço: <img src="/assets/images/moeda.png" alt="moeda" class="icone-moeda-produto"> ${element.preco} de ouro</p>
                        <a href="./assets/pages/detail.html?id=${element.id}"><button class="btn-produtos">Ver mais</button></a>
                        </article>
                        </li>
                    </ul>`;
      });
    }
  };
  xhr.open("GET", "produtos.json");
  xhr.send();
  TrocaNome();
  AtualizaOuro();
});

function TrocaNome() {
  //transforma o json em objeto novamente.
  const usuarioIndex = JSON.parse(localStorage.getItem("usuario"));

  //verifica se o usuario está correto e se o nome está correto,
  // se sim faz a troca de nome do botão para o nome do usuário
  if (usuarioIndex && usuarioIndex.nome) {
    const btnLogin = document.querySelector(".btn-login-cabecalho");
    btnLogin.innerHTML = usuarioIndex.nome;
  }
}

function AtualizaOuro() {
  const usuarioIndex = JSON.parse(localStorage.getItem("usuario"));
  
  if (usuarioIndex && usuarioIndex.ouro >= 500) {
    const qntOuro = document.querySelector(".qntOuro");
    qntOuro.innerHTML = `<img src="./assets/images/moeda.png" alt="moeda" class="icone-moeda-header"> ouro: ${usuarioIndex.ouro} `;
  }
}
