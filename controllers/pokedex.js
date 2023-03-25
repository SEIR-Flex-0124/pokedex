const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});