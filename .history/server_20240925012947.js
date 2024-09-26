const express = require('express');
const path = require('path'); // Importa o módulo path
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
const PORT = process.env.PORT || 3001; // Usando a porta definida nas variáveis de ambiente ou 3001 como padrão

// Middleware para servir arquivos estáticos (CSS e imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Função para renderizar a página
const renderPage = (userName) => {
    return `
       <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css"> <!-- Link para o CSS -->
    <title>Página de Avaliação</title>
</head>
<body>

    <!-- Contêiner para a imagem do Canva -->
    <div class="image-container">
        <img class="image-fixed" src="/canva.png" alt="Imagem Canva">
    </div>

    <!-- Seção de Avaliação -->
    <div class="rating-container">
        <div class="rating-box">
            <h2>Avalie esta página</h2>
            <p>Olá, ${userName}! Como você avalia nossa página?</p>
            <button>Avaliar</button>
        </div>
    </div>

    <!-- Rodapé -->
    <footer class="footer">
        <p>mari© 2024 Maria Vitória. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
    `;
};

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const userName = process.env.USER_NAME || 'Mari Gomes';

// Rota principal
app.get('/', (req, res) => {
    res.send(renderPage(userName));
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
