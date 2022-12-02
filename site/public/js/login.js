function verificarEmail(){



}

function verificarSenha(){



}

function entrar() {
    aguardar();

    var emailVar = Email.value;
    var senhaVar = Senha.value;

    if (emailVar == "" || senhaVar == "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Todos os campos estão vazios!'
          })
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Login realizado com sucesso!'
              })

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.IMG_USUARIO = json.img;
                sessionStorage.PERSONAGEM_FAV = json.persoFav;

                setTimeout(function () {
                    window.location = "./dashboard/mural.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}

function trocarTema(){
    personagem = sessionStorage.PERSONAGEM_FAV
    if(personagem == undefined){
        sessionStorage.setItem('PERSONAGEM_FAV', 'madeleine')
    }
    console.log(sessionStorage.PERSONAGEM_FAV)
    if(personagem == "madeleine"){
        sessionStorage.setItem("PERSONAGEM_FAV", "badeleine");
        document.getElementById("imgIcone").src = "../assets/img/roxo.png"
    }else if(personagem == "badeleine"){
        sessionStorage.setItem("PERSONAGEM_FAV", "theo");
        document.getElementById("imgIcone").src = "../assets/img/laranja.png"
    }else if(personagem == "theo"){
        sessionStorage.setItem("PERSONAGEM_FAV", "oshiro");
        document.getElementById("imgIcone").src = "../assets/img/green.png"
    }else if(personagem == "oshiro"){
        sessionStorage.setItem("PERSONAGEM_FAV", "vovo");
        document.getElementById("imgIcone").src = "../assets/img/amarelo.png"
    }else if(personagem == "vovo"){
        sessionStorage.setItem("PERSONAGEM_FAV", "madeleine"); 
        document.getElementById("imgIcone").src = "../assets/img/red.png"
    }
    corPersonagem()
}

function corPersonagem() {

    var personagem = sessionStorage.PERSONAGEM_FAV;
    if (personagem == 'madeleine') {
        document.getElementById("cor").style.color = "#ea422c"
        document.getElementById("cor2").style.color = "#ea422c"
        document.getElementById("cor3").style.color = "#ea422c"
        document.getElementById("botao").style.background = "#ea422c" 
        document.getElementById("botao").style.color = "#000" 
      
    } else if (personagem == 'badeleine') {
        document.getElementById("cor").style.color = "#db4ce4"
        document.getElementById("cor2").style.color = "#db4ce4"
        document.getElementById("cor3").style.color = "#db4ce4"
        document.getElementById("botao").style.background = "#db4ce4" 
        document.getElementById("botao").style.color = "#000" 
        
    } else if (personagem == 'theo') {
        document.getElementById("cor").style.color = "#e47c2c"
        document.getElementById("cor2").style.color = "#e47c2c"
        document.getElementById("cor3").style.color = "#e47c2c"
        document.getElementById("botao").style.background = "#e47c2c" 
        document.getElementById("botao").style.color = "#000" 
        
    } else if (personagem == 'oshiro') {
        document.getElementById("cor").style.color = "#7cbc44"
        document.getElementById("cor2").style.color = "#7cbc44"
        document.getElementById("cor3").style.color = "#7cbc44"
        document.getElementById("botao").style.background = "#7cbc44" 
        document.getElementById("botao").style.color = "#000" 
       
    } else if (personagem == 'vovo') {
        document.getElementById("cor").style.color = "#fcec7c"
        document.getElementById("cor2").style.color = "#fcec7c"
        document.getElementById("cor3").style.color = "#fcec7c"
        document.getElementById("botao").style.background = "#fcec7c" 
        document.getElementById("botao").style.color = "#000" 
       
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

