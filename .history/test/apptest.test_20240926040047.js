const request = require('supertest');
const app = require('../controllers/pageController'); // Ajuste o caminho conforme necessário
require('dotenv').config(); // Carrega variáveis de ambiente

describe('GET /', () => {
    it('Deve retornar a página renderizada com o nome do usuário', async () => {
        jest.setTimeout(10000); // Aumenta o tempo limite para 10 segundos
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        // Verifica se o título e a mensagem de boas-vindas estão presentes
        expect(response.text).toContain(process.env.USER_NAME); // Verifica se o nome do usuário está presente
        expect(response.text).toContain(process.env.PAGE_CONTENT); // Verifica se o conteúdo da página está presente
    });
});

describe('POST /submit', () => {
    it('Deve retornar erro se o nome não for fornecido', async () => {
        const response = await request(app).post('/submit').send({ email: 'test@example.com' });
        expect(response.status).toBe(400);
        expect(response.body.errors).toEqual(expect.arrayContaining([
            expect.objectContaining({ msg: 'Nome é obrigatório' })
        ]));
    });

    it('Deve retornar erro se o email não for válido', async () => {
        const response = await request(app).post('/submit').send({ name: 'Test User', email: 'invalidEmail' });
        expect(response.status).toBe(400);
        expect(response.body.errors).toEqual(expect.arrayContaining([
            expect.objectContaining({ msg: 'Email inválido' })
        ]));
    });

    it('Deve retornar sucesso com dados válidos', async () => {
        const response = await request(app).post('/submit').send({ name: 'Test User', email: 'test@example.com' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Dados recebidos com sucesso!');
    });
});
