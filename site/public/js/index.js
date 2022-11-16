function jogoSecreto(){
    window.location = "pico8.html"
}
var coracoesColetados = 0
function coletarCoracao(){
    coracoesColetados+=1
    console.log("Agora você tem "+ coracoesColetados +" corações")
}


function validarSessaoHome() {

        var email = sessionStorage.EMAIL_USUARIO;
        var nome = sessionStorage.NOME_USUARIO;
        var id = sessionStorage.ID_USUARIO;

        if (email != null && nome != null && id != null) {
            login.style.display = 'none';
            cadastro.style.display = 'none';
            forum.style.display = 'block';
            dashboard.style.display = 'block';
            ranking.style.display = 'block';
            jogo.style.display = 'block';
            sair.style.display = 'block';

        } else {
            login.style.display = 'block';
            cadastro.style.display = 'block';
            forum.style.display = 'none';
            dashboard.style.display = 'none';
            ranking.style.display = 'none';
            jogo.style.display = 'none';
            sair.style.display = 'none';
            }
        }

window.onload = validarSessaoHome()
