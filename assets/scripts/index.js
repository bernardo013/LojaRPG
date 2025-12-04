//evento que indica que se o DOM já estiver carregado depois do html ele executa o que estiver dentro da arrow funciton.
document.addEventListener("DOMContentLoaded", () => {
        //transforma o json em objeto novamente. 
    const usuarioIndex = JSON.parse(localStorage.getItem("usuario"));
            
        //verifica se o usuario está correto e se o nome está correto,
        // se sim faz a troca de nome do botão para o nome do usuário
    if (usuarioIndex && usuarioIndex.nome) {
        const btnLogin = document.querySelector(".btn-login-cabecalho");
        btnLogin.innerHTML = usuarioIndex.nome;
    }
});