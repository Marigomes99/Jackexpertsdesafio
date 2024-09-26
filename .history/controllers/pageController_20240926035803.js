// controllers/pageController.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const { renderPage } = require('./renderPage'); // Importando a função renderPage

const router = express.Router(); // Usando um roteador em vez da instância do app

// Rota principal
router.get('/', (req, res) => {
    try {
        // Renderize sua página HTML aqui usando a função renderPage
        const pageContent = 'Bem-vindo ao Desafio Jack Experts!';
        const page = renderPage('Desafio Jack Experts', pageContent); // Usando a função renderPage
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota de submissão
router.post('/submit', [
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

module.exports = router; // Exporta o roteador
