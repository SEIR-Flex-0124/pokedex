const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');
const myTeam = require('../models/myTeam');

router.get('/', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

router.get('/home', (req, res) => {
    res.render('home.ejs', {pokemon: pokemon });
});

router.get('/pokemon', (req, res) => {
    res.render('pokemon.ejs', {pokemon: pokemon });
});

router.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon.find(p => p.id === id);
    res.render('show.ejs', { selectedPokemon, myTeam} );
    console.log(selectedPokemon)
});

router.get('/myteam', (req, res) => {
    res.render('myTeam.ejs', { myTeam: myTeam });
});

router.post('/myteam', (req, res) => {
    const selectedPokemonId = req.body.id;
    const selectedPokemon = pokemon.find(p => p.id === selectedPokemonId);
    if (selectedPokemon) {
        myTeam.push(selectedPokemon);
        res.render('myTeam.ejs', { myTeam: myTeam });
    };

router.get('/myteam/:id', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = myTeam.find(p => p.id === id);
    res.render('myTeamShow.ejs', { myTeam: myTeam, selectedPokemon: selectedPokemon });
});

router.post('/myteam/:id/edit', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = myTeam.find(p => p.id === id);
    selectedPokemon.name = req.body.name;
    res.redirect('/myteam');
});

});
module.exports = router;