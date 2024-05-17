import express from 'express';
import {engine} from 'express-handlebars';
import pool from './db/conn';

const app = express();



app.listen(3000, () => {
    console.log('SERVIDOR RODANDO...')
})