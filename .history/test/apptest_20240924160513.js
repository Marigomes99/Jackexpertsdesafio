// __tests__/pageController.test.js

const { renderPage } = require('../controllers/pageController');

test('Deve renderizar a página corretamente', () => {
    const userName = 'Test User';
    const pageContent = 'Conteúdo de Teste';
    const result = renderPage(userName, pageContent);
    
    expect(result).toContain(userName);
    expect(result).toContain(pageContent);
});
