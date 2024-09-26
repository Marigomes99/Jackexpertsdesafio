app.get('/', async (req, res) => {
    try {
        const page = await renderPage(); // Certifique-se de que isso não lança erro
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});
