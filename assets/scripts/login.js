const nome = document.querySelector(".input-nome");
const senha = document.querySelector(".input-senha");
const form = document.querySelector('.login-form')
const btnLogin = document.querySelector(".btn-login")


    form.addEventListener("submit", (e) => {
        let validaForm = true;
        let nomeSemEspaco = String(nome.value.trim())
        let senhaSemEspaco = senha.value.trim()

        if(nomeSemEspaco.length >= 5  && nomeSemEspaco.length < 20) {
            //Redirecionar para o catálogo. 

        } else {
            console.log('nome deve ter mais de 5 caracteres e menos de 20 caracteres')
            validaForm = false;
        }


        if(senhaSemEspaco.length > 2 && senhaSemEspaco.length <= 10 ) {
            //Redirecionar para o catálogo. 
        } else {
            console.log('senha deve ter mais de 2 caracteres e menos de 10 caracteres')
            validaForm = false;
        }

        if(!validaForm) {
            e.preventDefault();
        }
    }) 

