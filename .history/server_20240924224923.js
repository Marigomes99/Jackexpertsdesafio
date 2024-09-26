const express = require('express');
const path = require('path'); // Importa o módulo path
const router = express.Router();
const { body, validationResult } = require('express-validator');
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
const PORT = 3001; // Alterado para usar a porta 3001

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para tratar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Função para renderizar a página
const renderPage = (userName, pageContent) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="${userName}">
            <link rel="stylesheet" href="/style.css"> <!-- Link para o CSS -->
            <style>
                /* Adicionando CSS do Canva */
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%; /* Define a altura para 100% */
                }
                .iframe-container {
                    position: absolute; /* Altera de relative para absolute */
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); /* Centraliza o iframe */
                    width: 1024px; /* Largura do iframe */
                    height: 768px; /* Altura do iframe */
                    overflow: hidden;
                    border: none;
                }
                .iframe-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding: 0;
                    margin: 0;
                }
                .container {
                    position: relative; /* Adiciona posição relativa para o container */
                    z-index: 1; /* Garante que o conteúdo apareça sobre o iframe */
                    text-align: center; /* Centraliza o texto */
                    color: #333; /* Cor do texto */
                    padding: 20px; /* Espaçamento */
                }
            </style>
        </head>
        <body>
            <div class="iframe-container">
                <iframe loading="lazy" src="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
            </div>
            <div class="container">
                <a href="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?utm_content=DAGRuDIZuM0&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Acesse o Meu Desafio Jack Experts</a>
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

// Adiciona o roteador ao aplicativo
app.use('/', router);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
