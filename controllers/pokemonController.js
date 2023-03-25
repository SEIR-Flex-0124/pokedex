const pokemon = require('../models/pokemon.js')

//-----------PURE LOGIC FOR HANDLING THE REQUESTS----------------------//

// INDEX:
const getAllPokemon = (req, res) => {
    res.render('index.ejs', {pokemon})
}

// New Pokemon Form:
const sendNewPokemonForm = (req, res) => {
    res.render('new.ejs')
}

// Post New Pokemon:
const postNewPokemon = (req, res) => {
    pokemon.unshift(req.body);
    res.redirect('/pokemon')
}

// Show one Pokemon:
const showOnePokemon = (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('show.ejs', {singlePokemon})
}

// Edit & Update Pokemon:
const editPokemon = (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('edit.ejs', {singlePokemon})
}

const updatePokemon = (req, res) => {
  const id = req.params.id
  const newPokemon = req.body
  let pokeIndex;
  pokemon.map((p, i) => {
    if(p.id === id){
        pokeIndex = i
    }
  })
  pokemon.splice(pokeIndex, 1, newPokemon)
  res.redirect('/pokemon')
}


// Delete Route:
// router.delete('/:id', (req, res) => {
// 	pokemon.splice(req.params.id, 1);
// 	res.redirect('/pokemon')
// });

module.exports = {
    getAllPokemon,
    sendNewPokemonForm,
    postNewPokemon,
    showOnePokemon,
    editPokemon,
    updatePokemon
}