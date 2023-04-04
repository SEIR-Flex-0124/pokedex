const express = require('express');
const router = express.Router();
const Pokemon = require('../Models/Pokemon');

router.get('/', (req, res) => {
res.render('index.ejs', {Pokemon})
})

router.get('/:id', (req, res) => {
    const pokemonCard = Pokemon[req.params.id]
    res.render('show.ejs', {pokemonCard})
})

module.exports = router;