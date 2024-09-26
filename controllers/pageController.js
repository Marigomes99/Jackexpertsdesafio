// controllers/pageController.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json()); // Para suportar JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // Para suportar dados de formulários

// Rota principal
app.get('/', (req, res) => {
    try {
        // Renderize sua página HTML aqui (exemplo)
        const page = `<h1>${process.env.USER_NAME}</h1><p>${process.env.PAGE_CONTENT}</p>`;
        res.send(page); // Envie a página renderizada como resposta
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota de submissão
app.post('/submit', [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Se não houver erros, processe os dados
    const { name, email } = req.body;
    console.log(`Nome: ${name}, Email: ${email}`);
    res.send('Dados recebidos com sucesso!');
});

module.exports = app; // Exporta a instância do aplicativo
