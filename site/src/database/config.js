const mysql = require("mysql2");
const sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
const sqlServerConfig = {
    server: "SEU_SERVIDOR",
    database: "SEU_BANCO_DE_DADOS",
    user: "SEU_USUARIO",
    password: "SUA_SENHA",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
    }
};

// CONEXÃO DO MYSQL WORKBENCH (LOCAL)
const mySqlConfig = {
    host: "roundhouse.proxy.rlwy.net",
    port: 30541, // Adicione a porta correta aqui
    user: "root",
    password: "kuwBhMgDHNhPvRzNgNboSDDXFMlzGedI",
    database: "Celeste"
};

function executar(instrucao) {
    // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise((resolve, reject) => {
            sql.connect(sqlServerConfig).then(() => {
                return sql.query(instrucao);
            }).then(resultados => {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(erro => {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', erro => {
                console.log("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise((resolve, reject) => {
            const conexao = mysql.createConnection(mySqlConfig);
            conexao.connect(err => {
                if (err) {
                    console.error('Erro ao conectar ao MySQL:', err);
                    reject(err);
                    return;
                }
                conexao.query(instrucao, (erro, resultados) => {
                    if (erro) {
                        conexao.end();
                        reject(erro);
                        return;
                    }
                    console.log(resultados);
                    conexao.end();
                    resolve(resultados);
                });
            });
            conexao.on('error', erro => {
                console.log("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js");
        });
    }
}

module.exports = {
    executar
};
