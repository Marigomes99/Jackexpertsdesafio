const express = require('express');
const path = require('path');
const app = express();

// Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Conteudo da pagina 
const pageContent = process.env.PAGE_CONTENT || 'Este desafio foi criado por Mari Gomes';
const userName = 'Mari Gomes';

// Arquivo
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="${userName}">
            <title>Desafio Jack Experts</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container">
                <h1>Desafio Jack Experts</h1>
                <h2>${pageContent}</h2>
                <p>Olá, meu nome é ${userName}, espero que aproveite o meu Desafio Jack Experts</p>
                <img src="imagem.jpg" alt="Descrição da imagem" class="image">
            </div>            
        </body>
        </html> 
    `);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
