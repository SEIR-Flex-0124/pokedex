const express = require('express');
const app = express();
const methodOverride = require('method-override');

// linking our model
const pokemon = require('./pokemon');

// middleware
// takes our data from a submitted form
app.use(express.urlencoded({ extended:false }));
app.set('view engine', 'ejs');
// the _ needs to always be included
app.use(methodOverride('_method'));

// index
app.get('/pokemon', (req, res) => {
  res.render('index', {pokemon})
})

// New route
app.get('/pokemon/new', (req, res) => {
  res.render('new');
})

// show route
app.get('/pokemon/:id', (req, res) => {
  let singlePokemon = pokemon[req.params.id];
  res.render('show', {singlePokemon});
})

app.post('/pokemon', (req, res) => {
  let newPokemon = {
      name: req.body.name,
      id: (pokemon.length + 1),
      type: req.body.type,
      img: req.body.img,
      misc: {
          classification: req.body.classification,
          weight: req.body.weight,
          height: req.body.height,
          abilities: {
              normal: req.body.nability,
              hidden: req.body.hability
          }
      }
  }

  newPokemon.misc.abilities.normal
  pokemon.push(newPokemon);
  res.redirect('/pokemon');
})


//FALLBACK route
app.get('/*', (req, res) => {
  res.send("You've done it now... Try again")
});

app.listen(4000, () => {
  console.log('🏝️ Server is listening to 4000 🎧')
});