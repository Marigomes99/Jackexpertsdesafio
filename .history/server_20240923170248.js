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
                 <img src="Firefly%20A%20chibi%20character%20inspired%20by%20the%20cyberpunk%20style,%20with%20long%20straight%20black%20hair%20and%20big%20bro%20(3).jpg" alt="Descrição da imagem" class="image">

            </div>            
        </body>
        </html> 
    `);
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
