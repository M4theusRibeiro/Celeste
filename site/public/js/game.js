//Código do timer
function startTimer(duration, display){
    var timer = duration, minutes, seconds;

displayTotal = setInterval(function(){
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
var totalMorangos = 0;
var tempoDeJogo = 0;
morangosAtuais = totalMorangos;
var jogoRodando = 'não'

//Função que inicia o jogo
function comecarJogo(){
    totalMorangos = 0;
    tempoDeJogo = 0;
    
if(jogoRodando == 'não'){
    pontos.innerHTML = 0;
    setTimeout(()=>{

        var tempoTotal = 60 * 1;
        var display = document.querySelector("#timer")
        startTimer(tempoTotal, display);

        tempo = setInterval(()=>{

            tempoDeJogo += 2;
            console.log("Trocando posição, tempo corrido: "+ tempoDeJogo+"s");
            numeroAleatorio = Number(Math.random() * 15).toFixed(0);
            jogoRodando = 'sim'
        
                if(tempoDeJogo < 60){
                    trocarPosicaoMorango()
                } else{
                    //Parar o jogo quando der o tempo
                    clearInterval(tempo);
                    limparCampos();
                    jogoRodando = 'não';
                    alert("O jogo acabou!!!! Parabéns, você fez "+ totalMorangos +" pontos")
                }   },2000)

    },0)
    
}else{
    console.log("O jogo já está rodando!")
}
}

//Limpar campos dos morangos
function limparCampos(){
    um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
}

//Pegar morango comum(Soma mais 1 ponto)
function pegarMorango() {
    totalMorangos++;
    trocarPosicaoMorango();
    pontos.innerHTML = totalMorangos;
}
//Pegar morango dourado(Soma mais 3 pontos)
function pegarMorangoDourado(){
    totalMorangos += 3;
    trocarPosicaoMorango();
    pontos.innerHTML = totalMorangos;
}
//Pegar morango voador(Tira 10 segundos do total do tempo)

function pegarMorangoVoador(){
    var tempoMenos = 0
    tempoMenos = tempoDeJogo - 10
    //Adicionar mais tempo
        if(tempoMenos <= 0){
            tempoDeJogo = 0;
        }else {
            tempoDeJogo += -10
        }

    console.log("O tempo agora é "+ tempoDeJogo)
    trocarPosicaoMorango();
    pontos.innerHTML = totalMorangos;
}

//Trocar a posição atual do morango
var nAntigo = 0
function trocarPosicaoMorango(){

    console.log("O numero antigo era "+ nAntigo);
    numeroAleatorio = Number(Math.random() * 23).toFixed(0);
  
    if(nAntigo != numeroAleatorio){
        if(morangoDouradoPosicao == numeroAleatorio){
            trocarPosicaoMorango()
        }else{
            if(numeroAleatorio == 1){
                console.log("Deu um");
                um.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 2){
                console.log("Deu dois");
                dois.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``
    
            }else if(numeroAleatorio == 3){
                console.log("Deu três");
                tres.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 4){
                console.log("Deu quatro");
                quatro.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 5){
                console.log("Deu cinco");
                cinco.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 6){
                console.log("Deu seis");
                seis.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 7){
                console.log("Deu sete");
                sete.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 8){
                console.log("Deu oito");
                oito.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 9){
                console.log("Deu nove");
                nove.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 10){
                console.log("Deu dez");
                dez.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 11){
                console.log("Deu onze");
                onze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 12){
                console.log("Deu doze");
                doze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML =``;dois.innerHTML =``;tres.innerHTML =``;quatro.innerHTML =``;cinco.innerHTML =``;seis.innerHTML =``;sete.innerHTML =``;oito.innerHTML =``;nove.innerHTML =``;dez.innerHTML =``;onze.innerHTML =``;treze.innerHTML =``;quatorze.innerHTML =``;quinze.innerHTML =``;
    
            }else if(numeroAleatorio == 13){
                console.log("Deu treze");
                treze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 14){
                console.log("Deu quatorze");
                quatorze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quinze.innerHTML = ``;
    
            }else if(numeroAleatorio == 15){
                console.log("Deu quinze");
                quinze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoCheio.gif">`;
    
                um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;
            }else if(numeroAleatorio == 16 || numeroAleatorio == 17 || numeroAleatorio == 18 || numeroAleatorio == 19 || numeroAleatorio == 20){
              gerarMorangoDourado() 
            }else if(numeroAleatorio == 21 || numeroAleatorio == 22 || numeroAleatorio == 23){
                gerarMorangoVoador()
            }
            
            
        }
    }
        else{
            //Chama a propria função caso o número antigo for igual ao numero atual para não repetir as divs
            trocarPosicaoMorango()
        }
    nAntigo = numeroAleatorio
    console.log("O numero antigo agora é "+ nAntigo);  
}
var morangoDouradoPosicao = 0
//Gerar um morango dourado
function gerarMorangoDourado(){
    numeroAleatorio = Number(Math.random() * 15).toFixed(0);
    console.log("Morango Dourado!!!!");
    morangoDouradoPosicao = numeroAleatorio;
    if(numeroAleatorio == 1){
        console.log("Deu um");
        um.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 2){
        console.log("Deu dois");
        dois.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``

    }else if(numeroAleatorio == 3){
        console.log("Deu três");
        tres.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 4){
        console.log("Deu quatro");
        quatro.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 5){
        console.log("Deu cinco");
        cinco.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
        
        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 6){
        console.log("Deu seis");
        seis.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 7){
        console.log("Deu sete");
        sete.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 8){
        console.log("Deu oito");
        oito.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 9){
        console.log("Deu nove");
        nove.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 10){
        console.log("Deu dez");
        dez.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 11){
        console.log("Deu onze");
        onze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 12){
        console.log("Deu doze");
        doze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML =``;dois.innerHTML =``;tres.innerHTML =``;quatro.innerHTML =``;cinco.innerHTML =``;seis.innerHTML =``;sete.innerHTML =``;oito.innerHTML =``;nove.innerHTML =``;dez.innerHTML =``;onze.innerHTML =``;treze.innerHTML =``;quatorze.innerHTML =``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 13){
        console.log("Deu treze");
        treze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 14){
        console.log("Deu quatorze");
        quatorze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 15){
        console.log("Deu quinze");
        quinze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;
    }
}

//Gerar um morango voador
function gerarMorangoVoador(){
    numeroAleatorio = Number(Math.random() * 15).toFixed(0);
    console.log("Morango Voador!!!!");

    if(numeroAleatorio == 1){
        console.log("Deu um");
        um.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 2){
        console.log("Deu dois");
        dois.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``

    }else if(numeroAleatorio == 3){
        console.log("Deu três");
        tres.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 4){
        console.log("Deu quatro");
        quatro.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 5){
        console.log("Deu cinco");
        cinco.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
        
        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 6){
        console.log("Deu seis");
        seis.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 7){
        console.log("Deu sete");
        sete.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 8){
        console.log("Deu oito");
        oito.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 9){
        console.log("Deu nove");
        nove.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 10){
        console.log("Deu dez");
        dez.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 11){
        console.log("Deu onze");
        onze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 12){
        console.log("Deu doze");
        doze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML =``;dois.innerHTML =``;tres.innerHTML =``;quatro.innerHTML =``;cinco.innerHTML =``;seis.innerHTML =``;sete.innerHTML =``;oito.innerHTML =``;nove.innerHTML =``;dez.innerHTML =``;onze.innerHTML =``;treze.innerHTML =``;quatorze.innerHTML =``;quinze.innerHTML =``;

    }else if(numeroAleatorio == 13){
        console.log("Deu treze");
        treze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;quatorze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 14){
        console.log("Deu quatorze");
        quatorze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quinze.innerHTML = ``;

    }else if(numeroAleatorio == 15){
        console.log("Deu quinze");
        quinze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;

        um.innerHTML = ``;dois.innerHTML = ``;tres.innerHTML = ``;quatro.innerHTML = ``;cinco.innerHTML = ``;seis.innerHTML = ``;sete.innerHTML = ``;oito.innerHTML = ``;nove.innerHTML = ``;dez.innerHTML = ``;onze.innerHTML = ``;doze.innerHTML = ``;treze.innerHTML = ``;quatorze.innerHTML = ``;
    }
}

//Função de salvar o recorde no banco
    function salvarRecorde() {
    
        var nomeVar = Nome.value;
        var pontosVar = totalMorangos;
        var idVar = sessionStorage.ID_USUARIO

        fetch("/ranking/recorde", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                pontosServer: pontosVar,
                idServer: idVar
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
    
    
                setTimeout(() => {
                    window.location = "../dashboard/ranking.html";
                }, "2000")
                
            } else {
                throw ("Houve um erro ao tentar registrar seus pontos!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    
        return false;
    }