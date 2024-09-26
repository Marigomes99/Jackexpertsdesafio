const express = require('express');
const path = require('path'); // Importa o módulo path
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Função para renderizar a página
const renderPage = (userName) => {
    return `
    
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
const PORT = process.env.PORT || 3001; 
const PORT = process.env.PORT || 3002;
const PORT = process.env.PORT || 3003;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
