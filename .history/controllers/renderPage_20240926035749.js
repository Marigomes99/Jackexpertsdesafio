// controllers/renderPage.js
function renderPage(userName, pageContent) {
    return `<h1>${userName}</h1><p>${pageContent}</p>`;
}

module.exports = { renderPage }; // Esta exportação deve estar correta
