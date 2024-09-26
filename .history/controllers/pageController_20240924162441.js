// controllers/pageController.js

const renderPage = (userName, pageContent) => {
    return `<h1>${userName}</h1><p>${pageContent}</p>`; // Atualizado para incluir pageContent
};

app.get('/', async (req, res) => {
    try {
        const page = renderPage(process.env.USER_NAME, process.env.PAGE_CONTENT || 'Conteúdo da página');
        res.send(page);
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = { renderPage };
