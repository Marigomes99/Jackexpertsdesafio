const express = require('express');
const router = express.Router();
const { renderPage } = require('./renderPage'); // Ajuste para desestruturar a função corretamente

// Rota GET /
router.get('/', async (req, res) => {
    try {
        // Pega as variáveis de ambiente
        const userName = process.env.USER_NAME || 'Desconhecido'; // Um valor padrão
        const pageContent = process.env.PAGE_CONTENT || 'Conteúdo da página';

        // Renderiza a página usando a função
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
