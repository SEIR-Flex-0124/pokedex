

const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');


router.get('/pokemon/new', (req, res) => {
    res.render('pokemon/new.ejs')
});

router.get('/pokemon/:id', (req, res) => {
    // console.log(req.params);
    // console.log(fruits);
    const tasty = pokemon[req.params.id];
    // console.log(pokemon);
    res.render("show.ejs", { tasty: tasty });
})

module.exports = router;