const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')
const methodOverride = require('method-override');


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.render('index.ejs', {pokemon: pokemon})
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



app.post('/pokedex', (req, res) => {
    let newPokemon = {
        name: req.body.name,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense
        },
        img: req.body.img,
    }
    res.redirect('/pokedex');
    pokemon.unshift(newPokemon);
    console.log(newPokemon)
});

app.get('/:id/delete', (req, res) => {
    const deletePokemon = pokemon[req.params.id];
    res.render(`delete`, {deletePokemon: deletePokemon, idx: req.params.id})
});

app.delete('/:id', (req, res) => {
    let deletedPokemon = pokemon[req.params.id];
    console.log(deletedPokemon)
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokedex')
});



app.get('/:id/edit', (req, res) => {
    const editPokemon = pokemon[req.params.id]
    res.render('edit.ejs', {editPokemon, idx: req.params.id});
});

app.put('/:id', (req,res) => {
    let updatedPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
         stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense
    }
}
    console.log(updatedPokemon);
    pokemon[req.params.id] = updatedPokemon;
    res.redirect(`/pokedex/${req.params.id}`)
})

app.listen(4000, () => {
    console.log('listening on port 4000')
})
