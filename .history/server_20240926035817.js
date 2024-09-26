// server.js
const express = require('express');
const dotenv = require('dotenv');
const pageController = require('./controllers/pageController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usando o controller de páginas
app.use('/', pageController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
