var rankingModel = require("../models/rankingModel");

function salvarRecorde(req,res){
    console.log("estou em controler")
    var nome = req.body.nomeServer;
    var pontos = req.body.pontosServer;
    var idUsuario = req.body.userServer;

    console.log(nome)
    console.log(pontos)
    console.log(idUsuario)

    if (nome == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (pontos == undefined) {
        res.status(400).send("A descrição está indefinido!");
    }  else {

        rankingModel.salvarRecorde(nome, pontos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    salvarRecorde
}