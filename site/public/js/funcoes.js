// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    Swal.fire({
        title: 'Tem certeza que deseja sair?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Não, quero ficar!',
        confirmButtonText: 'Sim, quero sair!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          sessionStorage.clear();
 
          window.location = "../index.html";
        }
      })
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
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

