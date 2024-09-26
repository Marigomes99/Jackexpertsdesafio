const express = require('express');
const router = express.Router();
const renderPage = require('./renderPage'); // Assegure-se de que este caminho está correto

// Rota GET /
router.get('/', async (req, res) => {
    try {
        // Supondo que você queira usar USER_NAME e PAGE_CONTENT das variáveis de ambiente
        const userName = process.env.USER_NAME || 'Desconhecido'; // Um valor padrão
        const pageContent = process.env.PAGE_CONTENT || 'Conteúdo da página';

        // Verifique se renderPage está retornando uma string HTML correta
        const page = renderPage(userName, pageContent);
        
        // Envia a página renderizada como resposta
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Exporte o roteador
module.exports = router;
