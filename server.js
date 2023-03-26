const express = require('express');
const app = express();
const PORT = 4000
const pokemonList = require('./models/pokemon.js')
const methodOverride = require('method-override')



//Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride('_method'))


//Routes

app.get('/', (req, res) => {
    res.send("You've wandered into the long grass...")
})

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon: pokemonList})
})

app.get('/pokemon/new', (req, res) =>{
    res.render('new.ejs')
})

app.get('/pokemon/edit/:id/', (req, res) => {
    let id = req.params.id
    let thisPokemon = pokemonList[id]
    res.render('edit', {pokemon: thisPokemon, id})
})

app.get('/pokemon/:id', (req, res) => {
    let id = req.params.id
    let thisPokemon = pokemonList[id]
    res.render('show.ejs', {pokemon: thisPokemon, id})
})

app.post('/pokemon', (req, res) => {
    let pokemonInput = req.body
    const newPokemon = {
    name: pokemonInput.name,
    img: pokemonInput.img,
    type:
      pokemonInput.type.split(',').map(t => t.trim()),
    stats: {
      hp: pokemonInput.hp,
      attack: pokemonInput.atk,
      defense: pokemonInput.def,
      spattack: "",
      spdefense: "",
      speed: ""
    }
    }
    pokemonList.splice(0, 0, newPokemon)
    res.redirect('/pokemon')
})

app.put('/pokemon/:id', (req, res) => {
    let pokemonInput = req.body
    const newPokemon = {
    name: pokemonInput.name,
    img: pokemonInput.img,
    type:
      pokemonInput.type.split(',').map(t => t.trim()),
    stats: {
      hp: pokemonInput.hp,
      attack: pokemonInput.atk,
      defense: pokemonInput.def,
      spattack: "",
      spdefense: "",
      speed: ""
    }
    }
    pokemonList.splice(0, 0, newPokemon)
    res.redirect('/pokemon')
})

app.get('/pokemon/delete/:id', (req, res) => {
    let id = req.params.id
    let thisPokemon = pokemonList[id]
    res.render('delete.ejs', {pokemon: thisPokemon, id})
})

app.delete('/pokemon/:id', (req, res) => {
    let id = req.params.id
    pokemonList.splice(id, 1)
    res.redirect('/pokemon')
})



app.listen(PORT, () => {
    console.log(`I choose you, port ${PORT}!`)
});