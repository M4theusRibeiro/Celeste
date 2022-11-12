var graficoModel = require("../models/graficoModel");

function obterGrafico(req, res) {

    console.log(`Recuperando os dados`);

    graficoModel.obterGrafico().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterGraficoSentimento(req, res) {

    console.log(`Recuperando os dados`);

    graficoModel.obterGraficoSentimento().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    obterGrafico,
    obterGraficoSentimento,
  
}