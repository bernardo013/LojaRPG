const form = document.querySelector(".login-form");
const btnLogin = document.querySelector(".btn-login");
const msg = document.querySelector(".msg-error-login");


    form.addEventListener("submit", (e) => {
        const nomeInput = document.querySelector(".input-nome");
        const senhaInput = document.querySelector(".input-senha");


         localStorage.setItem('nome', nomeInput)
         localStorage.setItem('senha', senhaInput)



        let validaForm = true;

        //função que cria um objeto com os valores digitados no input e adiciona eles no localStorage
        //usei o método stringify para converter o objeto para JSON.
        function usuarioLogado() {
            const usuario = {
                nome: nomeInput.value,
                senha: senhaInput.value,
            }
            localStorage.setItem('usuario' , JSON.stringify(usuario))
        }

        let nomeSemEspaco = String(nomeInput.value.trim());
        let senhaSemEspaco = senhaInput.value.trim();

        //Validação nome 
        if(nomeSemEspaco.length >= 6  && nomeSemEspaco.length < 20) {   
            usuarioLogado()
        } else {
            msg.innerHTML = `<p style="color: red; font-size: 19px;"><strong>NOME</strong> deve ter no mínimo 5 caracteres</p>`
            validaForm = false;
        }

        //Validação senha 
        if(senhaSemEspaco.length > 6 && senhaSemEspaco.length <= 15 ) {
            usuarioLogado()
        } else {
            msg.innerHTML = `<p style="color: red; font-size: 19px;"><strong>SENHA</strong> deve ter no mínimo 8 caracteres.</p>`
            validaForm = false;
        }
        
        if(!validaForm) {
            e.preventDefault();
        }
    }) 

