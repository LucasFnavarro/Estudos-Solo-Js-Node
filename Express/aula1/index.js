const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const basePath = path.join(__dirname, 'template');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
});

app.get('/contatos', (req, res) => {
    res.end('Página de contatos.')
});

app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port} 🚀`);
});
