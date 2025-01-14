# Imagem base do Node.js
FROM node:18-alpine AS build

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências (somente as de produção)
RUN npm install --production

# Copia o restante dos arquivos
COPY . .

# Cria um usuário não root
RUN addgroup -S app && adduser -S appuser -G app

# Altera o usuário para não root
USER appuser

# Expondo a porta da aplicação
EXPOSE 300

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
