

const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));

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

router.delete('/pokemon/:id', (req, res) => {
	pokemon.splice(req.params.id, 1); //remove the item from the array
	res.redirect('/');  //redirect back to index route
});
module.exports = router;