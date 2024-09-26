const express = require('express');
const router = express.Router();

// Exemplo de rota
router.get('/', async (req, res) => {
    try {
        const page = 'Desafio Jack Experts'; // ou a lógica para renderizar a página
        res.send(page); // Retorna a página renderizada
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router; // Certifique-se de exportar o router corretamente
