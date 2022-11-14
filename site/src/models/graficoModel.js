var database = require("../database/config");


function obterGrafico() {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(persoFav) from usuario where persoFav = 'madeleine'`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(persoFav) as madeleine, (select count(persoFav) from usuario where persoFav = 'badeleine') as badeleine,(select count(persoFav) from usuario where persoFav = 'theo') as theo, (select count(persoFav) from usuario where persoFav = 'oshiro') as oshiro, (select count(persoFav) from usuario where persoFav = 'vovo') as vovo from usuario where persoFav = 'madeleine' ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function obterGraficoSentimento() {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(sentimento) as ansiedade from usuario where sentimento = 'ansiedade';`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(sentimento) as fracasso,
     (select count(sentimento) from usuario where sentimento = 'ansiedade') as ansiedade,
     (select count(sentimento) from usuario where sentimento = 'solidao') as solidao,
     (select count(sentimento) from usuario where sentimento = 'desesperanca') as desesperanca,
     (select count(sentimento) from usuario where sentimento = 'inseguranca') as inseguranca,
     (select count(sentimento) from usuario where sentimento = 'inadequacao') as inadequacao
    from usuario where sentimento = 'fracasso';`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterGrafico,
    obterGraficoSentimento
}
