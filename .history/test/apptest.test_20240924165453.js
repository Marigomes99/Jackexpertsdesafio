// test/apptest.test.js
const request = require('supertest');
const app = require('../controllers/pageController'); // Importe a instância do aplicativo
require('dotenv').config(); // Carrega variáveis de ambiente

// Teste para verificar a rota principal
describe('GET /', () => {
    it('Deve retornar a página renderizada', async () => {
        const response = await request(app).get('/');
        console.log(response.text); // Isso ajudará a ver o que está sendo retornado na resposta
        expect(response.status).toBe(200);
        expect(response.text).toContain('Desafio Jack Experts'); // Verifica se o título está presente
    });
});

// Teste para a rota de submissão
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

it('Deve retornar a página renderizada', async () => {
    jest.setTimeout(10000); // Aumenta o tempo limite para 10 segundos
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Desafio Jack Experts');
});
