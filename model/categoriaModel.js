/* Impostação do sequelize */
const sequelize = require('sequelize');

/* Impostação da conexão com o banco de dados */
const conection = require('../database/database');

/*
Definição da estrutura da tabela de categoria
Parametros:
1 - nome da tabela
2 - um ou mais objetos json vão representar os campos, seus tipos e regras de preenchimentos
*/

const categoria = conection.define(
    'tbl_categoria',
    {
        nome_categoria:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

 //categoria.sync({force:true});  //sincroniza com o banco de dados. Cria tabela

module.exports = categoria;