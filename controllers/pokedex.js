const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');
const myTeam = require('../models/myTeam');

router.get('/', (req, res) => {
    res.render('index.ejs', { pokemon: pokemon });
});

router.get('/new', (req, res) => {
    res.render("new.ejs")
})

router.get('/home', (req, res) => {
    res.render('home.ejs', {pokemon: pokemon });
});

router.get('/pokemon', (req, res) => {
    res.render('pokemon.ejs', {pokemon: pokemon });
});

router.post('/new', (req, res) => {
    const newPokemon = {
        id: `${pokemon.length + 1 }`,
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            hp: 50,
            attack: 50,
            defense: 50,
            spattack: 50,
            spdefense: 50,
            speed: 50,
          },
        misc: {
            classification: "misc",
            height: "4",
            weight: "89",
        }
    };
    console.log(newPokemon);
    pokemon.push(newPokemon);
    
    res.redirect('/pokemon');
});

router.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedPokemon = pokemon.find(p => p.id === id);
    console.log(pokemon[151]);
    res.render('show.ejs', { selectedPokemon, myTeam, pokemon} );
});

router.get('/pokemon/:id/edit', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon.find(p => p.id === id);
    res.render('edit.ejs', { myTeam: myTeam, selectedPokemon: selectedPokemon, pokemon: pokemon });
});

router.put('/pokemon/:id/edit', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon.find(p => p.id === id);
    selectedPokemon.name = req.body.name;
    res.redirect('/pokemon');
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
});

router.delete('/myteam/:id', (req,res) => {
    const id = req.params.id;
    const index = myTeam.findIndex(p => p.id === id);
    myTeam.splice(index, 1);
    res.redirect('/myteam');
})
module.exports = router;