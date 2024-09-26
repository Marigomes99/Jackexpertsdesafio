const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const { body, validationResult } = require('express-validator'); // Importando o express-validator
require('dotenv').config();

const app = express();
app.use(cors()); // Permite CORS para todas as rotas
app.use(helmet()); // Middleware de segurança
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para servir arquivos estáticos
app.use(express.json()); // Middleware para analisar JSON

// Roteador
const routes = require('./routes/index'); // Importa as rotas
app.use('/', routes); // Usa as rotas

// Rota principal
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/style.css"> <!-- Referência correta para o CSS -->
        <title>Desafio Jack Experts</title>
    </head>
    <body>
        <div class="container">
            <h1>Bem-vindo ao Desafio Jack Experts</h1>
            <img src="/Firefly.jpg" alt="Firefly" class="image"> <!-- Caminho para a imagem -->
        </div>
    </body>
    </html>
    `);
});

// Rota de submissão
app.post('/submit', [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Se os dados forem válidos, você pode retornar uma resposta de sucesso
    res.status(200).send('Dados recebidos com sucesso!');
});

// Middleware de tratamento de erros para rotas não encontradas
app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
