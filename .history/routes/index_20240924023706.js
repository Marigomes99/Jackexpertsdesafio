const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Rota principal
router.get('/', (req, res) => {
    res.send(renderPage(userName, pageContent));
});

// Adicione a rota de submissão aqui
router.post('/submit', [
    body('mari gomes').isString().notEmpty(),
    body('mariaaionvivi@gmail.com').isEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('Dados recebidos com sucesso!');
});

module.exports = router;
