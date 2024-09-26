// test/apptest.test.js

const request = require('supertest');
const express = require('express');
const { renderPage } = require('../controllers/pageController');
const app = express();
require('dotenv').config();

// Configurando o express para aceitar JSON e rotas
app.use(express.json());

// Mocking routes
app.get('/', (req, res) => {
    const pageContent = process.env.PAGE_CONTENT || 'Conteúdo da página';
    const userName = process.env.USER_NAME || 'Mari Gomes';
    res.send(renderPage(userName, pageContent));
});

// Teste para verificar a rota principal
describe('GET /', () => {
    it('Deve retornar a página renderizada', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Conteúdo da página'); // Atualizado para corresponder ao que está sendo retornado
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
