{
    "name": "projeto-jack-experts",
    "version": "1.0.0",
    "description": "Um projeto para o Desafio Jack Experts",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "test": "jest",
        "build": "echo 'No build step needed'" // Comando de build adicionado
    },
    "dependencies": {
        "compression": "^1.7.4",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.0",
        "express-validator": "^7.2.0",
        "helmet": "^5.0.2",
        "jsonwebtoken": "^9.0.2",
        "morgan": "^1.10.0",
        "projeto-jack-experts": "file:"
    },
    "author": "Mari Gomes",
    "license": "ISC",
    "repository": {
        "type": "git",
        "url": "https://github.com/Marigomes99/projeto-jack-experts.git"
    },
    "keywords": [
        "express",
        "desafio",
        "jack experts"
    ],
    "devDependencies": {
        "jest": "^29.7.0",
        "supertest": "^6.3.4"
    }
}
