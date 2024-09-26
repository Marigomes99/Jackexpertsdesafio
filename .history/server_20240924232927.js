const express = require('express');
const path = require('path'); // Importa o módulo path
const router = express.Router();
const { body, validationResult } = require('express-validator');
require('dotenv').config(); // Carrega variáveis de ambiente

const app = express();
const PORT = 3001; // Alterado para usar a porta 3001

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para tratar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Função para renderizar a página
const renderPage = (userName, pageContent) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="${userName}">
            <link rel="stylesheet" href="/style.css"> <!-- Link para o CSS -->
            <style>
                /* Adicionando CSS do Canva */
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%; /* Define a altura para 100% */
                    background-color: #f5f5f5; /* Cor de fundo do projeto */
                }
                .iframe-fixed {
                    position: fixed; /* Mantém o iframe fixo na tela */
                    top: 50%; /* Alinha verticalmente */
                    left: 50%; /* Alinha horizontalmente */
                    transform: translate(-50%, -50%); /* Centraliza */
                    width: 800px; /* Nova largura do iframe */
                    height: 600px; /* Nova altura do iframe */
                    border: none;
                }
                .container {
                    text-align: center; /* Centraliza o texto */
                    color: #333; /* Cor do texto */
                    padding: 20px; /* Espaçamento */
                    z-index: 1; /* Garante que o conteúdo apareça sobre o iframe */
                    position: relative; /* Permite que o conteúdo fique abaixo do iframe */
                    margin-top: 620px; /* Espaçamento acima do formulário */
                }
                /* Estilo para o formulário */
                form {
                    background-color: #f9f9f9; /* Fundo do formulário */
                    padding: 20px; /* Espaçamento interno */
                    border-radius: 5px; /* Bordas arredondadas */
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra */
                    max-width: 400px; /* Largura máxima do formulário */
                    margin: 0 auto; /* Centraliza o formulário */
                }
                input[type="text"], input[type="email"] {
                    width: 100%; /* Largura total */
                    padding: 10px; /* Espaçamento interno */
                    margin-bottom: 10px; /* Espaçamento abaixo dos campos */
                    border: 1px solid #ccc; /* Borda */
                    border-radius: 4px; /* Bordas arredondadas */
                }
                button {
                    padding: 10px 15px; /* Espaçamento interno */
                    border: none; /* Sem borda */
                    background-color: #007BFF; /* Cor do botão */
                    color: white; /* Cor do texto */
                    border-radius: 4px; /* Bordas arredondadas */
                    cursor: pointer; /* Muda o cursor ao passar o mouse */
                }
                button:hover {
                    background-color: #0056b3; /* Cor ao passar o mouse */
                }
            </style>
        </head>
        <body>
            <div class="iframe-fixed">
                <iframe loading="lazy" src="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
            </div>
            <div class="container">
                <h2>Formulário de Contato</h2>
                <form action="/submit" method="POST">
                    <input type="text" name="name" placeholder="Seu Nome" required>
                    <input type="email" name="email" placeholder="Seu Email" required>
                    <button type="submit">Enviar</button>
                </form>
                <a href="https://www.canva.com/design/DAGRuDIZuM0/IvcfhTw-2ocqRIUzShbD6Q/view?utm_content=DAGRuDIZuM0&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Acesse o Meu Desafio Jack Experts</a>
            </div>            
        </body>
        </html>
    `;
};

// Conteúdo da página a partir do ConfigMap (variáveis de ambiente)
const pageContent = process.env.PAGE_CONTENT || 'Este desafio foi criado por Mari Gomes';
const userName = process.env.USER_NAME || 'Mari Gomes';

// Rota principal
router.get('/', (req, res) => {
    res.send(renderPage(userName, pageContent));
});

// Rota de submissão
router.post('/submit', [
    body('name').isString().notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('Dados recebidos com sucesso!');
});

// Adiciona o roteador ao aplicativo
app.use('/', router);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
