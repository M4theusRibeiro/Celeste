const nomeUsuario = sessionStorage.NOME_USUARIO;
console.log(nomeUsuario)

function atualizarFeed() {
    
    //aguardar();
    fetch("/ranking/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                console.log("Nenhum resultado encontrado!!")
                throw "Nenhum resultado encontrado!!";
            }
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
              
                for (let i = 0; i < resposta.length; i++) {
                    var ranking = resposta[i];

                    if (i == 0) {
                        nome1.innerHTML = ranking.nome
                        pontuacao1.innerHTML = ranking.pontuacao
                        document.getElementById("foto1").src = ranking.img;    
                    } else if (i == 1) {
                        nome2.innerHTML = ranking.nome
                        pontuacao2.innerHTML = ranking.pontuacao
                        document.getElementById("foto2").src = ranking.img;
                    } else if (i == 2) {
                        nome3.innerHTML = ranking.nome
                        pontuacao3.innerHTML = ranking.pontuacao
                        document.getElementById("foto3").src = ranking.img;
                    } else if (i == 3) {
                        nome4.innerHTML = ranking.nome
                        pontuacao4.innerHTML = ranking.pontuacao
                        document.getElementById("foto4").src = ranking.img;
                    } else if (i == 4) {
                        nome5.innerHTML = ranking.nome
                        pontuacao5.innerHTML = ranking.pontuacao
                        document.getElementById("foto5").src = ranking.img;
                    } else if (i == 5) {
                        nome6.innerHTML = ranking.nome
                        pontuacao6.innerHTML = ranking.pontuacao
                        document.getElementById("foto6").src = ranking.img;
                    } else if (i == 6) {
                        nome7.innerHTML = ranking.nome
                        pontuacao7.innerHTML = ranking.pontuacao
                        document.getElementById("foto7").src = ranking.img;
                    } else if (i == 7) {
                        nome8.innerHTML = ranking.nome
                        pontuacao8.innerHTML = ranking.pontuacao
                        document.getElementById("foto8").src = ranking.img;
                    }
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}





function corPersonagem() {
    
    const personagem = sessionStorage.PERSONAGEM_FAV;

    if (personagem == 'madeleine') {
        document.getElementById("cor").style.color = "#ea422c"
    
    } else if (personagem == 'badeleine') {
        document.getElementById("cor").style.color = "#db4ce4"
  
    } else if (personagem == 'theo') {
        document.getElementById("cor").style.color = "#e47c2c"
   
    } else if (personagem == 'oshiro') {
        document.getElementById("cor").style.color = "#7cbc44"
      
    } else if (personagem == 'vovo') {
        document.getElementById("cor").style.color = "#fcec7c"
    }

      setTimeout(() => {
        var nome1 = document.getElementById("nome1").innerHTML;
        var nome2 = document.getElementById("nome2").innerHTML;
        var nome3 = document.getElementById("nome3").innerHTML;
        var nome4 = document.getElementById("nome4").innerHTML;
        var nome5 = document.getElementById("nome5").innerHTML;
        var nome6 = document.getElementById("nome6").innerHTML;
        var nome7 = document.getElementById("nome7").innerHTML;
        var nome8 = document.getElementById("nome8").innerHTML;
       
        if(nomeUsuario == nome1){
            if (personagem == 'madeleine') {
                document.getElementById("nome1").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome1").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome1").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome1").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome1").style.color = "#fcec7c"
            }   

        } else if(nomeUsuario == nome2){
            if (personagem == 'madeleine') {
                document.getElementById("nome2").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome2").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome2").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome2").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome2").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome3){
            if (personagem == 'madeleine') {
                document.getElementById("nome3").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome3").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome3").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome3").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome3").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome4){
            if (personagem == 'madeleine') {
                document.getElementById("nome4").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome4").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome4").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome4").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome4").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome5){
            if (personagem == 'madeleine') {
                document.getElementById("nome5").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome5").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome5").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome5").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome5").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome6){
            if (personagem == 'madeleine') {
                document.getElementById("nome6").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome6").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome6").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome6").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome6").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome7){
            if (personagem == 'madeleine') {
                document.getElementById("nome7").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome7").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome7").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome7").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome7").style.color = "#fcec7c"
            } 
        }else if(nomeUsuario == nome8){
            if (personagem == 'madeleine') {
                document.getElementById("nome8").style.color = "#ea422c"
            
            } else if (personagem == 'badeleine') {
                document.getElementById("nome8").style.color = "#db4ce4"
          
            } else if (personagem == 'theo') {
                document.getElementById("nome8").style.color = "#e47c2c"
           
            } else if (personagem == 'oshiro') {
                document.getElementById("nome8").style.color = "#7cbc44"
              
            } else if (personagem == 'vovo') {
                document.getElementById("nome8").style.color = "#fcec7c"
            } 
        }

  }, 100);
}



