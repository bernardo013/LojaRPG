const form = document.querySelector(".login-form");
const btnLogin = document.querySelector(".btn-login");
const msg = document.querySelector(".msg-error-login");


    function salvarLogin() {
        const nome = document.querySelector(".input-nome");
        const senha = document.querySelector(".input-senha");

        localStorage.setItem('nome', nome.value);
        localStorage.setItem('senha', senha.value);

    }

    function pegarLogin(chave){
       return localStorage.getItem(chave)

    }

    form.addEventListener("submit", (e) => {
        const nomeInput = document.querySelector(".input-nome");
        const senhaInput = document.querySelector(".input-senha");

        let validaForm = true;


        let nomeSemEspaco = String(nome.value.trim());
        let senhaSemEspaco = senha.value.trim();

        //Validação nome 
        if(nomeSemEspaco.length >= 6  && nomeSemEspaco.length < 20) {   
            salvarLogin()
        } else {
            msg.innerHTML = `<p style="color: red; font-size: 19px;"><strong>NOME</strong> deve ter no mínimo 5 caracteres</p>`
            validaForm = false;
        }

        //Validação senha 
        if(senhaSemEspaco.length > 6 && senhaSemEspaco.length <= 15 ) {
            salvarLogin()
        } else {
            msg.innerHTML = `<p style="color: red; font-size: 19px;"><strong>SENHA</strong> deve ter no mínimo 8 caracteres.</p>`
            validaForm = false;
        }
        
        if(!validaForm) {
            e.preventDefault();
        }
    }) 

