const express = require('express');
const path = require('path'); // Importa o módulo path
const router = express.Router();
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
const PORT = 3001; // Usando a porta 3001

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Função para renderizar a página
const renderPage = (userName) => {
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
                    background-color: #f5f5f5; /* Cor de fundo do projeto */
                }
                .iframe-fixed {
                    position: fixed; /* Mantém o iframe fixo na tela */
                    top: 50%; /* Alinha verticalmente */
                    left: 50%; /* Alinha horizontalmente */
                    transform: translate(-50%, -50%); /* Centraliza */
                    width: 800px; /* Nova largura do iframe */
                    height: 600px; /* Nova altura do iframe */
                    border: none;
                }
                .container {
                    text-align: center; /* Centraliza o texto */
                    color: #333; /* Cor do texto */
                    padding: 20px; /* Espaçamento */
                    z-index: 1; /* Garante que o conteúdo apareça sobre o iframe */
                    position: relative; /* Permite que o conteúdo fique abaixo do iframe */
                    margin-top: 620px; /* Espaçamento acima do link */
                }
                /* Estilo para o link */
                a {
                    text-decoration: none; /* Remove sublinhado do link */
                    color: #007BFF; /* Cor do link */
                    font-weight: bold; /* Negrito */
                }
                a:hover {
                    text-decoration: underline; /* Sublinha ao passar o mouse */
                }
            </style>
        </head>
        <body>
            <div class="iframe-fixed">
                <iframe loading="lazy" src="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
            </div>
            <div class="container">
                <h2>Bem-vindo ao Meu Projeto!</h2>
                <p>Acesse o link abaixo para visualizar o design:</p>
                <a href="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?utm_content=DAGRuDIZuM0&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Acesse o Meu Desafio Jack Experts</a>
            </div>            
        </body>
        </html>
    `;
};

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const userName = process.env.USER_NAME || 'Mari Gomes';

// Rota principal
router.get('/', (req, res) => {
    res.send(renderPage(userName));
});

// Adiciona o roteador ao aplicativo
app.use('/', router);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
