/* Impostação do sequelize */
const sequelize = require('sequelize');

/* Impostação da conexão com o banco de dados */
const conection = require('../database/database');

/* Impostação da model de categoria */
const categoria = require('./categoriaModel');

const livro = conection.define(
    'tbl_livro',
    {
        titulo:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        preco:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        imagem_peq:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        imagem_grd:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        detalhes:{
            type: sequelize.TEXT,
            allowNull: false
        },
    }
);

/*
A chave primaria (1) de categoria vira uma chave estrangeira (N) em livro
*/
categoria.hasMany(livro);

/*
A chave estrangeia de livro (N) é a chave primaria de categoria (1)
*/
livro.belongsTo(categoria);

//livro.sync({force:false});


module.exports = livro;

