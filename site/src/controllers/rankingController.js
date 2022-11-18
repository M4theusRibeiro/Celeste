var rankingModel = require("../models/rankingModel");

function salvarRecorde(req,res){
    var nome = req.body.nomeServer;
    var pontos = req.body.pontosServer;
    var id = req.body.idServer

    if (nome == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (pontos == undefined) {
        res.status(400).send("A descrição está indefinido!");
    }  else if(id == undefined){
        res.status(400).send("A descrição está indefinido!");
    }else{

        rankingModel.salvarRecorde(nome, pontos, id)
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

function listar(req, res) {
    rankingModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ranking: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    salvarRecorde,
    listar
}