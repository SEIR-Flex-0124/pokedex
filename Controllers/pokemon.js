const express = require('express');
const router = express.Router();
const Pokemon = require('../Models/Pokemon');

router.get('/', (req, res) => {
res.render('index.ejs', {Pokemon})
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})


router.get('/:id', (req, res) => {
    const idx = req.params.id
    const pokemonCard = Pokemon[idx]
    res.render('show.ejs', {pokemonCard, idx})
})

router.post('/', (req, res) => {
    console.log(req.body)
    const type = req.body.type.split(" ");
    console.log(type.length)
    const stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed
    }
    const newPokemon = {
        id: req.body.id,
        name: req.body.name,
        img: req.body.img,
        type: type,
        stats: stats,
    }
    Pokemon.push(newPokemon)
    res.redirect(`/pokemon/${Pokemon.length - 1}`)
})

router.get('/:id/edit', (req, res) => {
    const idx = req.params.id
    let pokemonToBeEdited = Pokemon[idx]
    res.render('edit.ejs', {pokemonToBeEdited, idx})
})

router.put('/:id', (req, res) => {
    let updatedPokemon = req.body;
    let idx = req.params.id
    Pokemon[idx] = updatedPokemon
    res.redirect('/pokemon')
})

router.get('/:id/delete', (req, res) => {
    const idx = req.params.id
    let pokemonToBeDeleted = Pokemon[idx]
    res.render('delete.ejs', {pokemonToBeDeleted, idx})
})

router.delete('/:id', (req, res) => {
    const idx = req.params.id
    Pokemon.splice(idx, 1);
    res.redirect('/pokemon')
})

module.exports = router;

