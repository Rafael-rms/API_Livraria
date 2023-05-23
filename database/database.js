/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

// 
/* 
CRIAÇÃO DA CONEXÃO COM O BANCO DE DADOS
Parametros:
1 - nome do banco
2 - usuario
3 - senha
4 - objeto json que determina as configuraçoes da conexão
    4.1 - host do banco
    4.2 - porta lógica
    4.3 - dialeto sql
    4.4 - timezone -3
*/
const conection = new sequelize(
    'pw2_api_livraria',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = conection;