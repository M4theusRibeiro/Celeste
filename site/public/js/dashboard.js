function corPersonagem() {
    var personagem = sessionStorage.PERSONAGEM_FAV;
    if (personagem == 'madeleine') {

        document.getElementById("cor").style.color = "#ea422c"
        document.getElementById("cor2").style.color = "#ea422c"
       
    } else if (personagem == 'badeleine') {
        
        document.getElementById("cor").style.color = "#db4ce4"
        document.getElementById("cor2").style.color = "#db4ce4"

    } else if (personagem == 'theo') {
        document.getElementById("cor").style.color = "#e47c2c"
        document.getElementById("cor2").style.color = "#e47c2c"
       
    } else if (personagem == 'oshiro') {
        document.getElementById("cor").style.color = "#7cbc44"
        document.getElementById("cor2").style.color = "#7cbc44"
   
    } else if (personagem == 'vovo') {
        document.getElementById("cor").style.color = "#fcec7c"
        document.getElementById("cor2").style.color = "#fcec7c"
        
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