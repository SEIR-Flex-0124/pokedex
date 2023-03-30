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
    let singlePoke = pokemon[req.params.id]
    console.log(singlePoke);
    res.render('show.ejs', {singlePoke})
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

  router.get('/:id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})

module.exports = router;
