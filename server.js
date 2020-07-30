const express = require('express');
const server = express();

const Sequelize = require('sequelize');
const sequelize = require('./conexionBaseDatos');

server.listen(3000,()=>{
    console.log('servidor iniciando...')
});

server.get('/home',(req, res) => {
    res.send("hola");
});


