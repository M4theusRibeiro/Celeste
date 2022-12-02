
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
    
   
    
    
    function jogoSecreto(){
        window.location = "pico8.html"
    }
   

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

        function corPersonagem() {
            var personagem = sessionStorage.PERSONAGEM_FAV;
            if (personagem == 'madeleine') {
                document.getElementById("imgIcone").src = "../assets/img/red.png"
                document.getElementById("botao").style.background = "#ea422c" 
                document.getElementById("botao").style.color = "#000" 
                document.getElementById("cor").style.color = "#ea422c"
                document.getElementById("cor2").style.color = "#ea422c"
                document.getElementById("cor3").style.color = "#ea422c"
                document.getElementById("cor4").style.color = "#ea422c"
                document.getElementById("cor5").style.color = "#ea422c"
            } else if (personagem == 'badeleine') {
                document.getElementById("imgIcone").src = "../assets/img/roxo.png"
                document.getElementById("botao").style.background = "#db4ce4" 
                document.getElementById("botao").style.color = "#000" 
                document.getElementById("cor").style.color = "#db4ce4"
                document.getElementById("cor2").style.color = "#db4ce4"
                document.getElementById("cor3").style.color = "#db4ce4"
                document.getElementById("cor4").style.color = "#db4ce4"
                document.getElementById("cor5").style.color = "#db4ce4"
            } else if (personagem == 'theo') {
                document.getElementById("imgIcone").src = "../assets/img/laranja.png"
                document.getElementById("botao").style.background = "#e47c2c" 
                document.getElementById("botao").style.color = "#000" 
                document.getElementById("cor").style.color = "#e47c2c"
                document.getElementById("cor2").style.color = "#e47c2c"
                document.getElementById("cor3").style.color = "#e47c2c"
                document.getElementById("cor4").style.color = "#e47c2c"
                document.getElementById("cor5").style.color = "#e47c2c"
            } else if (personagem == 'oshiro') {
                document.getElementById("imgIcone").src = "../assets/img/green.png"
                document.getElementById("botao").style.background = "#7cbc44" 
                document.getElementById("botao").style.color = "#000" 
                document.getElementById("cor").style.color = "#7cbc44"
                document.getElementById("cor2").style.color = "#7cbc44"
                document.getElementById("cor3").style.color = "#7cbc44"
                document.getElementById("cor4").style.color = "#7cbc44"
                document.getElementById("cor5").style.color = "#7cbc44"
            } else if (personagem == 'vovo') {
                document.getElementById("imgIcone").src = "../assets/img/amarelo.png"
                document.getElementById("botao").style.background = "#fcec7c" 
                document.getElementById("botao").style.color = "#000" 
                document.getElementById("cor").style.color = "#fcec7c"
                document.getElementById("cor2").style.color = "#fcec7c"
                document.getElementById("cor3").style.color = "#fcec7c"
                document.getElementById("cor4").style.color = "#fcec7c"
                document.getElementById("cor5").style.color = "#fcec7c"
            }
        }
        var personagem = sessionStorage.PERSONAGEM_FAV;
        function temaAtual(){
            if(personagem == "madeleine"){
                document.getElementById("imgIcone").src = "../assets/img/red.png"
            }else if(personagem == "badeleine"){
                document.getElementById("imgIcone").src = "../assets/img/roxo.png"
            }else if(personagem == "theo"){
                document.getElementById("imgIcone").src = "../assets/img/laranja.png"
            }else if(personagem == "oshiro"){
                document.getElementById("imgIcone").src = "../assets/img/green.png"
            }else if(personagem == "vovo"){
                document.getElementById("imgIcone").src = "../assets/img/amarelo.png"
            }
        }
window.onload = validarSessaoHome()
