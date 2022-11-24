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

//Mudar cor 
function corPersonagem() {

    var personagem = sessionStorage.PERSONAGEM_FAV;
    if (personagem == 'madeleine') {
        document.getElementById("cor").style.color = "#ea422c"
        document.getElementById("botao").style.background = "#ea422c" 
        document.getElementById("botao").style.color = "#000" 
        document.getElementById("botao2").style.background = "#ea422c" 
        document.getElementById("botao2").style.color = "#000" 
    } else if (personagem == 'badeleine') {
        document.getElementById("cor").style.color = "#db4ce4"
        document.getElementById("botao").style.background = "#db4ce4" 
        document.getElementById("botao").style.color = "#000" 
        document.getElementById("botao2").style.background = "#db4ce4" 
        document.getElementById("botao2").style.color = "#000" 
    } else if (personagem == 'theo') {
        document.getElementById("cor").style.color = "#e47c2c"
        document.getElementById("botao").style.background = "#e47c2c" 
        document.getElementById("botao").style.color = "#000" 
        document.getElementById("botao2").style.background = "#e47c2c" 
        document.getElementById("botao2").style.color = "#000" 
    } else if (personagem == 'oshiro') {
        document.getElementById("cor").style.color = "#7cbc44"
        document.getElementById("botao").style.background = "#7cbc44" 
        document.getElementById("botao").style.color = "#000" 
        document.getElementById("botao2").style.background = "#7cbc44" 
        document.getElementById("botao2").style.color = "#000" 
    } else if (personagem == 'vovo') {
        document.getElementById("cor").style.color = "#fcec7c"
        document.getElementById("botao").style.background = "#fcec7c" 
        document.getElementById("botao").style.color = "#000" 
        document.getElementById("botao2").style.background = "#fcec7c" 
        document.getElementById("botao2").style.color = "#000" 
    }
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
    var  lista_posicoes = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze];
    for(var i = 0; i < lista_posicoes.length; i++){
        lista_posicoes[i].innerHTML = ``;
    }
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
    var lista_posicoes = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze];

    console.log("O numero antigo era "+ nAntigo);
    numeroAleatorio = Number(Math.random() * 23).toFixed(0);
  
    if(nAntigo != numeroAleatorio){
        if(morangoDouradoPosicao == numeroAleatorio){
            trocarPosicaoMorango()
        }else{
            if(numeroAleatorio == 1){
                console.log("Deu um");
                for(var i = 0; i < 15; i++){
                    if(i == 0){
                        um.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
    
            }else if(numeroAleatorio == 2){
                console.log("Deu dois");

                for(var i = 0; i < 15; i++){
                    if(i == 1){
                        dois.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 3){
                console.log("Deu três");

                for(var i = 0; i < 15; i++){
                    if(i == 2){
                        tres.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 4){
                console.log("Deu quatro");

                for(var i = 0; i < 15; i++){
                    if(i == 3){
                        quatro.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 5){
                console.log("Deu cinco");

                for(var i = 0; i < 15; i++){
                    if(i == 4){
                        cinco.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 6){
                console.log("Deu seis");

                for(var i = 0; i < 15; i++){
                    if(i == 5){
                        seis.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 7){
                console.log("Deu sete");

               for(var i = 0; i < 15; i++){
                    if(i == 6){
                        sete.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 8){
                console.log("Deu oito");

                for(var i = 0; i < 15; i++){
                    if(i == 7){
                        oito.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 9){
                console.log("Deu nove");

                for(var i = 0; i < 15; i++){
                    if(i == 8){
                        nove.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
            }else if(numeroAleatorio == 10){
                console.log("Deu dez");

                for(var i = 0; i < 15; i++){
                    if(i == 9){
                        dez.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }

            }else if(numeroAleatorio == 11){
                console.log("Deu onze");
               
                for(var i = 0; i < 15; i++){
                    if(i == 10){
                        onze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
                
            }else if(numeroAleatorio == 12){
                console.log("Deu doze");
               
                for(var i = 0; i < 15; i++){
                    if(i == 11){
                        doze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
                
            }else if(numeroAleatorio == 13){
                console.log("Deu treze");
                
                for(var i = 0; i < 15; i++){
                    if(i == 12){
                        treze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
                
            }else if(numeroAleatorio == 14){
                console.log("Deu quatorze");
               
                for(var i = 0; i < 15; i++){
                    if(i == 13){
                        quatorze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
                
            }else if(numeroAleatorio == 15){
                console.log("Deu quinze");
                
                for(var i = 0; i < 15; i++){
                    if(i == 14){
                        quinze.innerHTML = `<img onclick="pegarMorango()" src="../assets/img/gif/morangoCheio.gif">`;
                    }else{
                        lista_posicoes[i].innerHTML = ``;
                    }
                }
                

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
    var lista_posicoes = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze];
    numeroAleatorio = Number(Math.random() * 15).toFixed(0);
    console.log("Morango Dourado!!!!");
    morangoDouradoPosicao = numeroAleatorio;

    if(numeroAleatorio == 1){
        console.log("Deu um");

        for(var i = 0; i < 15; i++){
            if(i == 0){
                um.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 2){
        console.log("Deu dois");

        for(var i = 0; i < 15; i++){
            if(i == 1){
                dois.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 3){
        console.log("Deu três");

        for(var i = 0; i < 15; i++){
            if(i == 2){
                tres.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 4){
        console.log("Deu quatro");

        for(var i = 0; i < 15; i++){
            if(i == 3){
                quatro.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 5){
        console.log("Deu cinco");

        for(var i = 0; i < 15; i++){
            if(i == 4){
                cinco.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 6){
        console.log("Deu seis");

        for(var i = 0; i < 15; i++){
            if(i == 5){
                seis.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 7){
        console.log("Deu sete");

        for(var i = 0; i < 15; i++){
            if(i == 6){
                sete.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 8){
        console.log("Deu oito");

       for(var i = 0; i < 15; i++){
            if(i == 7){
                oito.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 9){
        console.log("Deu nove");

        for(var i = 0; i < 15; i++){
            if(i == 8){
                nove.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 10){
        console.log("Deu dez");

        for(var i = 0; i < 15; i++){
            if(i == 9){
                dez.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 11){
        console.log("Deu onze");
        onze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;

        for(var i = 0; i < 15; i++){
            if(i == 10){
                onze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 12){
        console.log("Deu doze");

        for(var i = 0; i < 15; i++){
            if(i == 11){
                doze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 13){
        console.log("Deu treze");

        for(var i = 0; i < 15; i++){
            if(i == 12){
                treze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
    }else if(numeroAleatorio == 14){
        console.log("Deu quatorze");

        for(var i = 0; i < 15; i++){
            if(i == 13){
                quatorze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 15){
        console.log("Deu quinze");
        for(var i = 0; i < 15; i++){
            if(i == 14){
                quinze.innerHTML = `<img onclick="pegarMorangoDourado()" src="../assets/img/gif/morangoDourado.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
    }
}

//Gerar um morango voador
function gerarMorangoVoador(){
    var lista_posicoes = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze];
    numeroAleatorio = Number(Math.random() * 15).toFixed(0);
    console.log("Morango Voador!!!!");

    if(numeroAleatorio == 1){
        console.log("Deu um");

        for(var i = 0; i < 15; i++){
            if(i == 0){
                um.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 2){
        console.log("Deu dois");

        for(var i = 0; i < 15; i++){
            if(i == 1){
                dois.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 3){
        console.log("Deu três");

        for(var i = 0; i < 15; i++){
            if(i == 2){
                tres.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 4){
        console.log("Deu quatro");

        for(var i = 0; i < 15; i++){
            if(i == 3){
                quatro.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }

    }else if(numeroAleatorio == 5){
        console.log("Deu cinco");
       
        for(var i = 0; i < 15; i++){
            if(i == 4){
                cinco.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
        
    }else if(numeroAleatorio == 6){
        console.log("Deu seis");
      
        for(var i = 0; i < 15; i++){
            if(i == 5){
                seis.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
        
    }else if(numeroAleatorio == 7){
        console.log("Deu sete");
     
        for(var i = 0; i < 15; i++){
            if(i == 6){
                sete.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
        
    }else if(numeroAleatorio == 8){
        console.log("Deu oito");
      
        for(var i = 0; i < 15; i++){
            if(i == 7){
                oito.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
        
    }else if(numeroAleatorio == 9){
        console.log("Deu nove");
     
        for(var i = 0; i < 15; i++){
            if(i == 8){
                nove.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 10){
        console.log("Deu dez");
      
        for(var i = 0; i < 15; i++){
            if(i == 9){
                dez.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 11){
        console.log("Deu onze");
    
        for(var i = 0; i < 15; i++){
            if(i == 10){
                onze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 12){
        console.log("Deu doze");
      
        for(var i = 0; i < 15; i++){
            if(i == 11){
                doze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 13){
        console.log("Deu treze");
     
        for(var i = 0; i < 15; i++){
            if(i == 12){
                treze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 14){
        console.log("Deu quatorze");
    
        for(var i = 0; i < 15; i++){
            if(i == 13){
                quatorze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
      
    }else if(numeroAleatorio == 15){
        console.log("Deu quinze");
        
        for(var i = 0; i < 15; i++){
            if(i == 13){
                quatorze.innerHTML = `<img onclick="pegarMorangoVoador()" src="../assets/img/gif/morangoVoador.gif">`;
            }else{
                lista_posicoes[i].innerHTML = ``;
            }
        }
    }
}

//Função de salvar o recorde no banco
    function salvarRecorde() {
    
        var pontosVar = totalMorangos;
        var idVar = sessionStorage.ID_USUARIO

        fetch("/ranking/recorde", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
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