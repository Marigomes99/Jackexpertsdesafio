// test/apptest.test.js
const request = require('supertest');
const express = require('express');
const { renderPage } = require('../controllers/pageController');
const app = express();
require('dotenv').config();

// Configurando o express para aceitar JSON e rotas
app.use(express.json());

// Mocking da rota GET
app.get('/', (req, res) => {
    const pageContent = process.env.PAGE_CONTENT || 'Este desafio foi criado por Mari Gomes';
    const userName = process.env.USER_NAME || 'Mari Gomes';
    res.send(renderPage(userName, pageContent));
});

// Implementação da rota POST /submit
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Validação simples
    if (!name) {
        return res.status(400).json({ errors: [{ msg: 'Nome é obrigatório' }] });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ errors: [{ msg: 'Email inválido' }] });
    }

    // Se tudo estiver certo
    res.status(200).send('Dados recebidos com sucesso!');
});

// Testes
describe('GET /', () => {
    it('Deve retornar a página renderizada', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Desafio Jack Experts'); // Verifica se o título está presente
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
