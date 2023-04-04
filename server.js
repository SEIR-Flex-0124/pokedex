const express = require('express');
const pokemon = require('./models/Pokemon');
const app = express();
const port = 4000;
const methodOverride = require("method-override")
app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
  });
//middleware
app.set ('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride('_method'))



app.get('/pokemon/new', (req,res) => {
    res.render("new.ejs")
})



app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {pokemon});
});

app.post('/pokemon', (req,res) => {
    const type = req.body.type.split(',').map(t => t.trim());
    const newPokemon = {...req.body, type: type}
    pokemon.unshift(newPokemon);
    res.redirect('/pokemon');
  });

app.get('/pokemon/edit/:id', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('edit.ejs', {pokemonToBeEdited: pokemonToBeEdited, idx: req.params.id});
});

app.get('/pokemon/:id', (req,res) => {
    const pokemons = pokemon[req.params.id];
    res.render("show.ejs", {pokemons: pokemons, idx: req.params.id});
});


app.put('/pokemon/edit/:id', (req,res) => {
    const type = req.body.type.split(',').map(t => t.trim());
    const editedPokemon = {...req.body, type: type}
    pokemon[req.params.id] = editedPokemon;
    res.render('show.ejs', {pokemons: pokemon[req.params.id], idx: req.params.id})
});

app.get('/pokemon/delete/:id', async (req, res, next) => {
    try {
        const pokemonToDelete = await pokemon.findById(req.params.id);
        res.render('delete.ejs', {pokemons: pokemonToDelete})
    } catch(err) {
        next();
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const deletedPokemon = await pokemon.findByIdAndDelete(req.params.id);
        res.redirect('/pokemon');
    } catch(err) {
        console.log(err);
        next();
    }
})

//this go to the end
app.listen(port, () => {
    console.log('Express is listening on port: ', port);
})