const express = require('express');
const router = express.Router();
let pokemon = require('../models/Pokemon');


router.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon})
})

router.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})

router.get('/pokemon/:id', (req, res) => {
    const singlePoke = pokemon[req.params.id]
    console.log(singlePoke);
    res.render('show.ejs', {singlePoke: singlePoke, idx: req.params.id})
})

router.post('/pokemon', (req, res) => {
    // req.body.type.split
    // console.log(req.body)
    // let newPokemon = req.body;
    const newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
        }
    }
    console.log(newPokemon);
    newPokemon.id = pokemon.length;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
  })

router.get('/pokemon/:id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})

router.put('/pokemon/:id', (req, res) => {
    let updatedPokemon = req.body;
    console.log(updatedPokemon);
    pokemon[req.params.id] = updatedPokemon;
    res.redirect(`/pokemon/${req.params.id}`);
})

router.get('/pokemon/:id/delete', (req, res) => {
    const pokemonToBeDeleted = pokemon[req.params.id];
    console.log(pokemonToBeDeleted);
    res.render('delete.ejs', {pokemonToBeDeleted, idx: req.params.id});
})

router.delete('/pokemon/:id', (req, res) => {
    let deletedPokemon = pokemon[req.params.id];
    console.log(deletedPokemon);
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
})

module.exports = router;
