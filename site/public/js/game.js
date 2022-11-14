function startTimer(duration, display){
    var timer = duration, minutes, seconds;


setInterval(function(){
minutes  = parseInt(timer / 60, 10);
seconds  = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;


display.textContent = minutes + ":" + seconds;

if(--timer < 0){
    timer = duration;
}
},1000);

}

//codigo game
var totalMorangos = 0
morangosAtuais = totalMorangos
var gifMorango = "./assets/img/gif/Strawberry.gif"
var jogo = 1;
function comecarJogo() {
    if(jogo == 1){
        console.log("O jogo começou");
        trocarPosicaoMorango();
    }else if(jogo == 2){
        alert("O tempo acabou");
    }else{
        alert("Você perdeu");
    }
}
var tempo = 0;
function trocarPosicaoMorango(){
 


        // tempo == 40
        //     console.log("Finalizando jogo")
        //     setTimeout(()=>{

        //     },0);
        
        tempoDeJogo = setInterval(()=>{
            tempo += 1.5;
            console.log("Trocando posição, tempo corrido: "+ tempo+"s");
       
        numeroAleatorio = Number(Math.random() * 15).toFixed(0)

    if(numeroAleatorio == 1){
        console.log("Deu um");
        um.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 2){
        console.log("Deu dois");
        dois.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``

    }else if(numeroAleatorio == 3){
        console.log("Deu três");
        tres.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 4){
        console.log("Deu quatro");
        quatro.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 5){
        console.log("Deu cinco");
        cinco.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;
        
        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 6){
        console.log("Deu seis");
        seis.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 7){
        console.log("Deu sete");
        sete.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 8){
        console.log("Deu oito");
        oito.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 9){
        console.log("Deu nove");
        nove.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 10){
        console.log("Deu dez");
        dez.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 11){
        console.log("Deu onze");
        onze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 12){
        console.log("Deu doze");
        doze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML =``;dois.innerHTML =``;tres.innerHTML =``;quatro.innerHTML =``;cinco.innerHTML =``;seis.innerHTML =``;sete.innerHTML =``;oito.innerHTML =``;nove.innerHTML =``;dez.innerHTML =``;onze.innerHTML =``;treze.innerHTML =``;quatorze.innerHTML =``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 13){
        console.log("Deu treze");
        treze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 14){
        console.log("Deu quatorze");
        quatorze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 15){
        console.log("Deu quinze");
        quinze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/StrawberryFly.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;
    }
  }
,1500)
}

function pegarMorango() {
    totalMorangos++
    pontos.innerHTML = totalMorangos
}