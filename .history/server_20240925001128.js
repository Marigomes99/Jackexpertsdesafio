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
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <div class="container">
                <div class="image-container">
                    <img class="image-fixed" src="/canva.png" alt="Design do Canva">
                </div>
                <div class="evaluation-container">
                    <h2>Avalie esta página</h2>
                    <textarea placeholder="Deixe seu comentário aqui..."></textarea>
                    <button type="submit">Enviar</button>
                </div>
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
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos primeiro
app.use('/', router); 


// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
