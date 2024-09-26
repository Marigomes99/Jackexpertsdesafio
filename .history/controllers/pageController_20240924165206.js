const express = require('express');
const { renderPage } = require('./renderPage'); // Importa a função corretamente
const router = express.Router();

// Rota GET /
router.get('/', async (req, res) => {
    try {
        const userName = process.env.USER_NAME || 'Desconhecido';
        const pageContent = process.env.PAGE_CONTENT || 'Conteúdo da página';
        const page = renderPage(userName, pageContent);
        res.send(page); // Retorna a página renderizada
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Exporte o roteador
module.exports = router;
