const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');


router.post('/save', (req, res) => {

    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome é ${name} e a idade ${age} anos.`)
    res.sendFile(`${basePath}/usersform.html`)
});

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)      
});  

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`ESTAMOS BUSCANDO PELO USUÁRIO ${id}`);
    res.sendFile(`${basePath}/users.html`);
}); 

module.exports = router;
