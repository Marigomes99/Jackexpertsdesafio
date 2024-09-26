// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); // Importar o módulo 'path'
const pageController = require('./controllers/pageController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definir a pasta para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos da pasta 'public'

// Usando o controller de páginas
app.use('/', pageController);

// Rota para servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Altere para o caminho correto do seu arquivo HTML
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

