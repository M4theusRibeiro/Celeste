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
var gifMorango = "./assets/img/gif/Strawberry.gif"
function comecarJogo() {
      var duration = 60*1; //
      var display = document.querySelector("#timer")
      var timerAtivo = document.querySelector("#timer").innerHTML;
      console.log(timerAtivo)

    for(var i = 0; i < 60; i++){
        var numeroAleatorio = Number(Math.random() * 20).toFixed(0);
        console.log("Botão clicado" + numeroAleatorio)
        
    }



    if(timerAtivo == startTimer(duration, display)){
    
    }
        else{
            var numeroAleatorio = Number(Math.random() * 100).toFixed(0);
            console.log("Botão clicado" + numeroAleatorio)
            if (numeroAleatorio != 0) {
                localMorango = document.getElementById("um");
            
            }
        }
    

}
function pegarMorango() {
    var localMorango = document.getElementById("um"); 
    var posicaoMorango = document.getElementById 
    var numeroAleatorio = Number(Math.random() * 20).toFixed(0);
    
    if (localMorango == "vinte") {
        console.log("Morango voador coletado " + numeroAleatorio)
        totalMorangos += 2
    }
    totalMorangos++
    pontos.innerHTML = totalMorangos
}