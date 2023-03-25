const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

router.get('', (req, res) => {
    res.render('index.ejs', {pokemon})
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.get('/:id', (req, res) => {
    const singlePokemon = pokemon[req.params.id];
    res.render('show.ejs', {singlePokemon, idx: req.params.id})
})

router.get('/:id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})


module.exports = router;