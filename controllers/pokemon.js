const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/pokemon', (req, res) =>{
    res.render('pokemon/index.ejs', {pokemon: pokemon})
})

router.get('/pokemon/new', (req,res) =>{
    res.render("pokemon/new.ejs")
})

router.get('/pokemon/:id', (req,res) =>{
    const pokeman = pokemon[req.params.id];
    res.render("pokemon/show.ejs", {pokeman: pokeman});
})

router.post('/pokemon', (req, res) =>{
    let newPokemon = req.body;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

module.exports = router;
