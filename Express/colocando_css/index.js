const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const users = require('./users');

const basePath = path.join(__dirname, './templates');

// Ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)
// Pega o que vem do body e transforma em json
app.use(express.json());

// arquivos estaticos
app.use(express.static('public'))

// Deixando todas rotas padrão com /users.
app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});
// Middleware de página não encontrada.
app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
    next();
})

app.listen(port, () => {
    console.log('Servidor rodando!!!');
});
