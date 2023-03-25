const pokemon = require("../models/pokemon.js");

//-----------PURE LOGIC FOR HANDLING THE REQUESTS----------------------

// INDEX
const getAllPokemon = (req, res) => {
    res.render("index.ejs", { pokemon: pokemon });
    }

// New Pokemon Form
const sendNewPokemonForm = (req, res) => {
    res.render('new.ejs')
}

const createNewPokemon = (req, res) => {
    pokemon.push(req.body)
    console.log(req.body)
    res.redirect('/pokemon')
}

const showOnePokemon = (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('show.ejs', {singlePokemon})
}

const editPokemon = (req, res) => {
    res.render('edit.ejs', {singlePokemon: pokemon[req.params.indexOfPokemonArray], index: req.params.indexOfPokemonArray})
}

const submitEdit = (req, res) => {
    pokemon[req.params.indexOfPokemonArray] = req.body;
    res.redirect('/pokemon')
}


    module.exports = {
        getAllPokemon, sendNewPokemonForm, createNewPokemon, showOnePokemon, editPokemon, submitEdit
    }