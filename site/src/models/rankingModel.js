var database = require("../database/config");

console.log("estou em Router")

function salvarRecorde(nome, pontos, idUsuario){
    console.log("ACESSEI O Ranking MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nome, pontos, idUsuario);
    var instrucao = `
        INSERT INTO ranking (nome, pontuacao, fkUsuario) VALUES ('${nome}', '${pontos}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    salvarRecorde
}
