const express = require('express');
const path = require('path'); // Importa o módulo path
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Função para renderizar a página
const renderPage = (userName) => {
    return `
        <html>
            <head>
                <title>Bem-vindo</title>
                <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
                <h1>Olá, ${userName}!</h1>
                <p>Bem-vindo à nossa aplicação!</p>
            </body>
        </html>
    `;
};

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const userName = process.env.USER_NAME || 'Visitante';

// Rota principal
app.get('/', (req, res) => {
    res.send(renderPage(userName));
});

// Inicializa o servidor na porta especificada
const PORT = process.env.PORT || 3000; // Usar variável de ambiente ou 3000 como padrão
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
ervidor rodando na porta ${PORT}`);
});
