const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/pokedex', (req, res) => {
    res.render('index.ejs', {pokemon: pokemon})
});

app.get('/pokedex/new', (req, res) => {
    res.render('new.ejs')
});

app.get('/pokedex/:id', (req, res) => {
    const eachPokemon = pokemon[req.params.id];
    res.render('show.ejs', {eachPokemon: eachPokemon, idx: req.params.id})
});







app.listen(4000, () => {
    console.log('listening on port 4000')
})
