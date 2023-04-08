const express = require('express');
const { getAllPokemon, sendNewPokemonForm, createNewPokemon, showOnePokemon, editPokemon, submitEdit, deletePokemon} = require('../controllers/pokemonController');
const router = express.Router()

// Pokemon Index
router.get("/", getAllPokemon)

router.get('/new', sendNewPokemonForm)

router.post('/', createNewPokemon)

router.get('/:id/edit', editPokemon)

router.put('/:id', submitEdit)

router.get('/:id', showOnePokemon)

router.delete('/:id', deletePokemon)

module.exports = router