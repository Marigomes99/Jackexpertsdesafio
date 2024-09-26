// controllers/pageController.js
exports.renderPage = (userName, pageContent) => {
    return `<h1>${userName}</h1><p>${pageContent}</p>`; // Exemplo simples de renderização
};

app.get('/', async (req, res) => {
    try {
        const page = renderPage(process.env.USER_NAME, process.env.PAGE_CONTENT);
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});
