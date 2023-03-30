const express = require('express');
const app = express();
const PORT = 4321;
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello Worlds')
})

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})

app.get('/pokemon/:id', (req, res) => {
    let singlePoke = pokemon[req.params.id]
    console.log(singlePoke);
    res.render('show.ejs', {singlePoke})
})

app.post('/pokemon', (req, res) => {
    // req.body.type.split
    // console.log(req.body)
    // let newPokemon = req.body;
    const newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
        }
    }
    console.log(newPokemon);
    newPokemon.id = pokemon.length;
    pokemon.push(newPokemon);
    res.redirect('/pokemon');
  })
// app.post('/pokemon', (req, res) => {
//     console.log(req.body);
//     const name = req.body.name;
//     const type = req.body.type;
//     const image = req.body.img;
//     const attack = req.body.stats.attack;
//     const defense = req.body.stats.defense;
//     const speed = req.body.stats.speed;
    
//     const newPokemon = {
//       name: name,
//       type: type,
//       img: image,
//       stats: {
//         attack: attack,
//         defense: defense,
//         speed: speed,
//       }
//      }
//     // console.log(newPokemon);
//     newPokemon.id = pokemon.length;
//     pokemon.push(newPokemon);
//     res.redirect('/pokemon');
//     });

app.get('/:id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})