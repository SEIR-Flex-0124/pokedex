const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

router.get('/home', (req, res) => {
    res.render('home.ejs', {pokemon: pokemon });
});

module.exports = router;