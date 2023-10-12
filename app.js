//importando Express

const express = require('express');

//Variavel para ter acesso as funcionalidades do express

const app= express();

app.use(express.static(`${__dirname}/publico`)) //todas as pastas (html, css, js) devem estar dentro da pasta principal (publico)

//Para home.html

app.get(`/`, function (req,res) {
    res.sendFile(`${__dirname}/publico/html/home.html`) //nao esquecer de colocar html no final ( ex: home.html)
});

// //Para contato.html

app.get(`/`, function (req,res) {
    res.sendFile(`${__dirname}/publico/html/contato.html`)
});

//Para cadastro.html

app.get(`/`, function (req,res) {
    res.sendFile(`${__dirname}/publico/html/cadastro.html`)
});

//Porta 

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});

//localhost:4000
