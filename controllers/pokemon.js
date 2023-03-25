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

router.get('/pokemon/:id/edit', (req, res) => {
    const pokemonEdit = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonEdit, idx: req.params.id})
})

router.post('/pokemon', (req, res) =>{
    let newPokemon = req.body;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

router.put('/pokemon/:id', (req, res) =>{
    let updatedPokemon = req.body;
    pokeom[req.params.id] = updatedPokemon;
    res.redirect(`/pokemon/${req.params.id}`);
})

router.get('/pokemon/:id/delete', (req, res) =>{
    const pokemonToBeDeleted = pokemon[req.params.id];
    res.render(`pokemon/delete`, {pokemonToBeDeleted, idx: req.params.id})
})

router.delete('/pokemon/:id', (req, res) =>{
   let deletedPokemon = pokemon[req.params.id];
   console.log(deletedPokemon);
   pokemon.splice(req.params.id, 1);
   res.redirect('/pokemon') 
})

module.exports = router;
