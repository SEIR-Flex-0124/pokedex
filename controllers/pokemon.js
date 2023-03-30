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
    const id = req.params.id;
    const pokeman = pokemon[id];
    if (!pokeman) {
    res.redirect('/pokemon');
    } else {
    res.render("pokemon/show.ejs", {pokeman});
      }
})

router.get('/pokemon/:id/edit', (req, res) => {
    const pokemonEdit = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonEdit, idx: req.params.id})
})

router.post('/pokemon', (req, res) =>{
    let newPokemon = {
    id: pokemon.length,
    name: req.body.name,
    img: req.body.img,
    type: [req.body.type],
    stats:{
    hp: req.body['stats.hp'],
    attack: req.body['stats.attack'],
    defense: req.body['stats.defense'],
    },
    };
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

router.put('/pokemon/:id', (req, res) =>{
    let updatedPokemon = req.body;
    pokemon[req.params.id] = updatedPokemon;
    res.redirect(`/pokemon/${req.params.id}`);
})

router.get('/pokemon/:id/delete', (req, res) =>{
    const pokemonToBeDeleted = pokemon[req.params.id];
    res.render(`pokemon/delete.ejs`, {pokemonToBeDeleted, idx: req.params.id})
})

router.delete('/pokemon/:id', (req, res) =>{
   let deletedPokemon = pokemon[req.params.id];
   console.log(deletedPokemon);
   pokemon.splice(req.params.id, 1);
   res.redirect('/pokemon') 
})

module.exports = router;
