const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Permite CORS para todas as rotas
app.use(helmet()); // Middleware de segurança
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para servir arquivos estáticos
app.use(express.json()); // Middleware para analisar JSON

// Roteador
const routes = require('./routes/index'); // Importa as rotas
app.use('/', routes); // Usa as rotas

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
