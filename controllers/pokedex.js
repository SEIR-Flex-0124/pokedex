

const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');


router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.get('/pokemon/:id', (req, res) => {
    // console.log(req.params);
    // console.log(fruits);
    const tasty = pokemon[req.params.id];
    // console.log(pokemon);
    res.render("show.ejs", { tasty: tasty });
})

router.post('/newPokemon', (req, res) => {
    console.log(req.body);
    pokemon.push({...req.body});
    res.redirect('/');
  })

module.exports = router;