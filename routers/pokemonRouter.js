const express = require("express");
const { getAllPokemon, sendNewPokemonForm, postNewPokemon, showOnePokemon, editPokemon, updatePokemon } = require("../controllers/pokemonController");
const router = express.Router();

router.get('/', getAllPokemon)

router.get('/new', sendNewPokemonForm)

router.post('/', postNewPokemon)

router.get('/:id', showOnePokemon)

router.get('/:id/edit', editPokemon)

router.put('/:id', updatePokemon)

module.exports = router
