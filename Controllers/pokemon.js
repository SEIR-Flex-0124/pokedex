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
    const pokemonCard = Pokemon[req.params.id]
    res.render('show.ejs', {pokemonCard})
})

router.post('/', (req, res) => {
    Pokemon.push(req.body)
    res.redirect(`/pokemon/${Pokemon.length - 1}`)
})

module.exports = router;