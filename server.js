// server.js
const express = require('express');
const app = express();
const port = 3556;

// Importando as rotas
const championsRoutes = require('./routes');

// Usando as rotas
app.use('/champions', championsRoutes);

// Iniciar o servidor
app.listen(3556, () => {
    console.log(`Servidor rodando em http://192.168.50.113:${port}`);
});
