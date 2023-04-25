

const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));

router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.get('/pokemon/:id', (req, res) => {
    const tasty = pokemon[req.params.id];
    res.render("show.ejs", { tasty: tasty });
})

router.post('/newPokemon', (req, res) => {
    console.log(req.body);
    pokemon.push({...req.body});
    res.redirect('/');
  })

router.delete('/pokemon/:id', (req, res) => {
	pokemon.splice(req.params.id, 1);
	res.redirect('/');  
});

router.get('/pokemon/:id/edit', (req, res) => {
	res.render(
		'edit.ejs', 
		{ 
			pokemon: pokemon[req.params.id],
			index: req.params.id 
		}
	);
});

router.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.body;
    res.redirect('/');
});

module.exports = router;