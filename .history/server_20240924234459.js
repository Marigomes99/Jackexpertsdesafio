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
                    display: flex; /* Usando flexbox para centralizar */
                    align-items: center; /* Alinha verticalmente */
                    justify-content: center; /* Alinha horizontalmente */
                    overflow: hidden; /* Remove rolagem da página */
                }
                .iframe-container {
                    width: 100vw; /* Largura total da janela */
                    height: 100vh; /* Altura total da janela */
                    position: relative; /* Necessário para posicionamento do iframe */
                }
                .iframe-fixed {
                    position: absolute; /* Mantém o iframe absoluto dentro do contêiner */
                    top: 0; /* Alinha ao topo do contêiner */
                    left: 0; /* Alinha à esquerda do contêiner */
                    width: 100%; /* Largura total do iframe */
                    height: 100%; /* Altura total do iframe */
                    border: none; /* Remove a borda do iframe */
                }
                .container {
                    display: none; /* Esconde o container de texto */
                }
            </style>
        </head>
        <body>
            <div class="iframe-container">
                <iframe class="iframe-fixed" loading="lazy" src="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
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
