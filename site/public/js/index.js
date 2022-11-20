
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
    
    
    function jogoSecreto(){
        window.location = "pico8.html"
    }
        window.onload = function()
    {
        var layers = [];
        var banner = document.querySelectorAll(".banner")[0];
    
        // create layer data
        {
            var layerElements = document.querySelectorAll(".layer");
            for (var i = 0; i < layerElements.length; i ++)
            {
                layers.push(
                {
                    element: layerElements[i],
                    scroll: layerElements[i].getAttribute("data-scroll"),
                    offset: layerElements[i].getAttribute("data-yoffset")
                });
            }
            layerElements = null;
        }
    
        // update a speicifc layer offset
        function updateLayerOffset(scroll, layer)
        {
            var offset = -((scroll * layer.scroll) - layer.offset * (banner.clientHeight / 3680));
            layer.element.style.transform = "translate3d(0, " + offset + "px, 0)";
        }
    
        function updateScrollValue()
        {
            var scroll = window.scrollY;
            for (var i = 0; i < layers.length; i ++)
                    updateLayerOffset(scroll, layers[i]);
        }
    
        
        document.addEventListener("scroll", updateScrollValue);
        window.addEventListener("resize", updateScrollValue);
        updateScrollValue();
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
                document.getElementById("cor").style.color = "#ea422c"
                document.getElementById("cor2").style.color = "#ea422c"
                document.getElementById("cor3").style.color = "#ea422c"
            } else if (personagem == 'badeleine') {
                document.getElementById("cor").style.color = "#db4ce4"
                document.getElementById("cor2").style.color = "#db4ce4"
                document.getElementById("cor3").style.color = "#db4ce4"
            } else if (personagem == 'theo') {
                document.getElementById("cor").style.color = "#e47c2c"
                document.getElementById("cor2").style.color = "#e47c2c"
                document.getElementById("cor3").style.color = "#e47c2c"
            } else if (personagem == 'oshiro') {
                document.getElementById("cor").style.color = "#7cbc44"
                document.getElementById("cor2").style.color = "#7cbc44"
                document.getElementById("cor3").style.color = "#7cbc44"
            } else if (personagem == 'vovo') {
                document.getElementById("cor").style.color = "#fcec7c"
                document.getElementById("cor2").style.color = "#fcec7c"
                document.getElementById("cor3").style.color = "#fcec7c"
                document.getElementById("cor4").style.color = "#fcec7c"
            }
        }




window.onload = validarSessaoHome()
