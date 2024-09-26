// controllers/pageController.js
const express = require('express');
const app = express();
const { renderPage } = require('./renderPage'); // Certifique-se de que você tenha essa função

app.get('/', async (req, res) => {
    try {
        const page = renderPage(process.env.USER_NAME, process.env.PAGE_CONTENT || 'Conteúdo da página');
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Exporte o app
module.exports = app;
