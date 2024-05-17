const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(`ESTAMOS BUSCANDO PELO USUÁRIO ${id}`);
    
    res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log('Servidor rodando!!!');
});