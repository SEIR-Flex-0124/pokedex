const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

//index route
router.get('/', (req, res) => {
    res.render('index.ejs', {pokemon})
})


//new route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.post('/', (req, res) => {
    let newPokemon = req.body;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

//edit route
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {pokemon: pokemon[req.params.id], idx: req.params.id});
})

router.put('/:id', (req, res) => {
    let idx = req.params.id;
    let updatedPokemon = req.body;
    pokemon[idx] = updatedPokemon;
    res.redirect('/pokemon')
})

//delete route
router.get('/:id/delete', (req, res) => {
    const singlePokemon = pokemon[req.params.id];
    res.render('delete.ejs', {singlePokemon, idx: req.params.id});
})

router.delete('/:id', async (req, res, next) => {
    try{
        pokemon.splice(req.params.id, 1)
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err);
        next();
    }
})

//show route
router.get('/:id', (req, res) => {
    const singlePokemon = pokemon[req.params.id];
    res.render('show.ejs', {singlePokemon, idx: req.params.id})
})

module.exports = router;