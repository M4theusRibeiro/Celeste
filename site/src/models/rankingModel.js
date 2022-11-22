var database = require("../database/config");

console.log("estou em Router")

function salvarRecorde(pontos, id){
    console.log("Acessei o Ranking MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", pontos,id);
    var instrucao = `
        update ranking set pontuacao = '${pontos}' where idRanking = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    console.log("Acessei o Ranking MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select u.img, u.nome, r.pontuacao from usuario u join ranking r on r.idRanking = u.fkRanking order by r.pontuacao desc limit 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarRecorde,
    listar
}
