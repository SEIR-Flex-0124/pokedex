const express = require('express');
const pokemon = require('./models/Pokemon');
const app = express();
const port = 4000;
const pokemons = require ('./models/Pokemon');
app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
  });
//middleware
app.set ('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));


app.get('/pokemon/new', (req,res) => {
    res.render("new.ejs")
})


app.get('/pokemon/:id', (req,res) => {
    const pokemons = pokemon[req.params.id];
    res.render("show.ejs", {pokemons});
});

app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {pokemon});
});

app.post('/pokemon', (req,res) => {
    let newPokemon = req.body;
    pokemon.unshift(newPokemon);
    res.redirect('/pokemon')
});



//this go to the end
app.listen(port, () => {
    console.log('Express is listening on port: ', port);
})