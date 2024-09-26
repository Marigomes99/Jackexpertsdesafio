const express = require('express');
const path = require('path'); // Importa o módulo path
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
app.listen(PORT_3001, () => {
    console.log(`Servidor escutando na porta ${PORT_3001}`);
});

app.listen(PORT_3002, () => {
    console.log(`Servidor escutando na porta ${PORT_3002}`);
});

app.listen(PORT_3003, () => {
    console.log(`Servidor escutando na porta ${PORT_3003}`);
});
// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Função para renderizar a página
const renderPage = (userName) => {
    return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/style.css">
        <title>Página de Avaliação</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap');
        </style>
    </head>
    <body>
        <div class="image-container">
            <img class="image-fixed" src="/canva.png" alt="Imagem Canva">
        </div>
        
        <div class="rating-container">
            <div class="rating-box">
                <h2 class="handjet-title">Avalie nossa página!</h2>
                <p>Como você avalia nossa página?</p>
                <div class="rating-buttons">
                    <button class="rating-button">⭐️ 5 Estrelas</button>
                    <button class="rating-button">⭐️ 4 Estrelas</button>
                    <button class="rating-button">⭐️ 3 Estrelas</button>
                    <button class="rating-button">⭐️ 2 Estrelas</button>
                    <button class="rating-button">⭐️ 1 Estrela</button>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p>&copy; 2024. Todos os direitos reservados.</p>
        </footer>
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

// Inicializa o servidor
app.listen(PORT, '0.0.0.0', () => { // Escuta em todas as interfaces de rede
    console.log(`Servidor rodando na porta ${PORT}`);
});
