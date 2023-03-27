const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

router.get('/home', (req, res) => {
    res.render('home.ejs', {pokemon: pokemon });
});

router.get('/pokemon', (req, res) => {
    res.render('pokemon.ejs', {pokemon: pokemon });
});

router.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon.find(p => p.id === id);
    console.log(selectedPokemon)
    res.render('show.ejs', { selectedPokemon });
});

module.exports = router;