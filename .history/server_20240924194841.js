const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares de segurança e CORS
app.use(helmet());
app.use(cors());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Desafio Jack Experts</title>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="text-section">
                    <h1>Bem-vindo ao Desafio Jack Experts</h1>
                    <p>Mari gomes &copy; Todos os direitos reservados.</p> <!-- Nome atualizado -->
                </div>
                <img src="/Firefly.jpg" alt="Firefly" class="image"> <!-- Certifique-se de que a imagem está no diretório correto -->
            </div>
        </div>
    </body>
    </html>
    `);
});

// Middleware para tratamento de rota não encontrada
app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicializando o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
