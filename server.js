const express = require('express');
const app = express();
const PORT = 4321;
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));
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
    res.render('show.ejs', {singlePoke})
})

// app.post('/pokemon', (req, res) => {
//     req.body.type.split
//     let newPokemon = req.body;
//     pokemon.push(newPokemon);
//     res.redirect('/pokemon');
//   })
app.post('/pokemon', (req, res) => {
    const name = req.body.name;
    const type = req.body.type.split(',').map(t => t.trim());
    const abilities = req.body.abilities.split(',').map(a => a.trim());
    const moves = req.body.moves.split(',').map(m => m.trim());
  
    const newPokemon = {
      name: name,
      type: type,
      misc: {
        abilities: {
          normal: abilities,
          hidden: [] // Assuming no hidden abilities for simplicity
        }
      },
      moves: {
        // Assuming all moves are level-up moves for simplicity
        level_up: moves.map(move => {
          return {
            name: move,
            level: 1 // Default to level 1, adjust as needed
          };
        })
      }
    };
  
    data.push(newPokemon);
  
    res.redirect('/pokemon');
  });

app.get('/:id/edit', (req, res) => {
    const pokemonToBeEdited = pokemon[req.params.id];
    res.render('pokemon/edit.ejs', {pokemonToBeEdited, idx: req.params.id});
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})