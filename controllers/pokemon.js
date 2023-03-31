const express = require('express');
const router = express.Router();
const pokemon = require('../models/Pokemon')

router.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon})
})

router.get("/pokemon/:id", (req, res) => {
    const individualPokemon = pokemon[req.params.id];
    //console.log(individualPokemon)
    res.render("show.ejs", ({individualPokemon}))
})



module.exports = router;