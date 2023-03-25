const express = require('express');
const { getAllPokemon, sendNewPokemonForm, createNewPokemon, showOnePokemon, editPokemon, submitEdit} = require('../controllers/pokemonController');
const router = express.Router()

// Pokemon Index
router.get("/", getAllPokemon)

router.get('/new', sendNewPokemonForm)

router.post('/', createNewPokemon)

router.get('/:indexOfPokemonArray/edit', editPokemon)

router.put('/:id', submitEdit)

router.get('/:id', showOnePokemon)

module.exports = router