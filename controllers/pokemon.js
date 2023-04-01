const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/pokemon', (req, res) =>{
    res.render('pokemon/index', {pokemon: pokemon})
})

router.get('/pokemon/new', (req,res) =>{
    res.render("pokemon/new")
})

router.get('/pokemon/:id', (req,res) =>{
    const index = parseInt(req.params.id);
    const pokeman = pokemon[index];
    res.render("pokemon/show", {pokeman, index});
})

router.get('/pokemon/:id/edit', (req, res) => {
    const index = parseInt(req.params.id);
    const pokemonEdit = pokemon[index];
    res.render('pokemon/edit', {pokemonEdit, index});
})

router.post('/pokemon', (req, res) =>{
    let newPokemon = {
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
    let updatedPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: [req.body.type],
    stats:{
    hp: req.body['stats.hp'],
    attack: req.body['stats.attack'],
    defense: req.body['stats.defense'],
    },
};
    pokemon[req.params.id] = updatedPokemon;
    res.redirect(`/pokemon/${req.params.id}`);
})

router.get('/pokemon/:id/delete', (req, res) =>{
    const index = parseInt(req.params.id);
    const pokemonToBeDeleted = pokemon[index];
    res.render(`pokemon/delete`, {pokemonToBeDeleted, idx: index})
})

router.delete('/pokemon/:id', (req, res) =>{
   const index = parseInt(req.params.id);
   let deletedPokemon = pokemon[index];
   console.log(deletedPokemon);
   pokemon.splice(index, 1);
   res.redirect('/pokemon') 
})

module.exports = router;
