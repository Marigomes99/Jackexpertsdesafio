const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares de segurança e CORS
app.use(helmet());
app.use(cors());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css"> 
        <title>Desafio Jack Experts</title>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="text-section">
                    <h1>Bem-vindo ao Desafio Jack Experts</h1>
                    <p>Mari Gomes &copy; Todos os direitos reservados.</p>
                </div>
                <img src="/Firefly.jpg" alt="Firefly" class="image">
            </div>
        </div>
        <canvas id="fireworks-canvas"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
        <script>
            const canvas = document.getElementById('fireworks-canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Chamar a função para soltar fogos de artifício ao carregar a página
            window.onload = function() {
                createFireworks();
            };

            function createFireworks() {
                const x = Math.random() * canvas.width;
                const y = Math.random() * (canvas.height / 2);
                const count = Math.floor(Math.random() * 50) + 50;

                for (let i = 0; i < count; i++) {
                    const angle = Math.random() * 2 * Math.PI;
                    const radius = Math.random() * 100;
                    const dx = Math.cos(angle) * radius;
                    const dy = Math.sin(angle) * radius;
                    const size = Math.random() * 5 + 2;

                    ctx.fillStyle = \`hsl(\${Math.random() * 360}, 100%, 50%)\`; // Use crase para a interpolação
                    ctx.beginPath();
                    ctx.arc(x + dx, y + dy, size, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        </script>
    </body>
    </html>
    `);
});

// Middleware para tratamento de rota não encontrada
app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Inicializando o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(\`Servidor rodando na porta \${PORT}\`); // Use crase para a interpolação
});
