// controllers/pageController.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router(); // Use router ao invés de app

// Middleware para suportar JSON e dados de formulários
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Rota principal
router.get('/', (req, res) => {
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

// Exporte o router
module.exports = router; // Exporta o router

