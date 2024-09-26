const express = require('express');
const path = require('path'); // Importa o módulo path
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();

// Middleware para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const userName = process.env.USER_NAME || 'Visitante';

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envia o arquivo index.html
});

// Inicializa o servidor na porta especificada
const PORT = process.env.PORT || 3000; // Usar variável de ambiente ou 3000 como padrão
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
