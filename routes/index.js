const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
require('dotenv').config(); // Carrega variáveis de ambiente

// Função para renderizar a página
const renderPage = (userName, pageContent) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="${userName}">
            <title>Desafio Jack Experts</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container">
                <h1>Desafio Jack Experts</h1>
                <h2>${pageContent}</h2>
                <p>Olá, meu nome é ${userName}, espero que aproveite o meu Desafio Jack Experts</p>
                
                <!-- Código de incorporação do Canva -->
                <div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
                    <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
                        src="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?utm_content=DAGRuDIZuM0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Seja bem vindo ao Meu Desafio Jack Experts</a> de ${userName}
            </div>            
        </body>
        </html>
    `;
};

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const pageContent = process.env.PAGE_CONTENT || 'Este desafio foi criado por Mari Gomes';
const userName = process.env.USER_NAME || 'Mari Gomes';

// Rota principal
router.get('/', (req, res) => {
    res.send(renderPage(userName, pageContent));
});

// Rota de submissão
router.post('/submit', [
    body('name').isString().notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('Dados recebidos com sucesso!');
});

module.exports = router;
