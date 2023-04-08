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


const editPokemon = (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('edit.ejs', {singlePokemon})
}

const submitEdit = (req, res) => {
    const id = req.params.id
    const updatedPokemon = req.body
    let foundPokemon = false
    pokemon.forEach((poke, index)=>{
        if(poke.id === id) {
            foundPokemon = true;
            pokemon[index] = Object.assign({}, poke, updatedPokemon)
            singlePokemon = poke
            res.redirect(`/pokemon/${id}`)
        }
    })
   
}

const deletePokemon = (req, res) => {
    console.log("deletePokemon")
    const id = req.params.id
    const pos = pokemon.findIndex(poke => poke.id === id)
    pokemon.splice(pos, 1); // starting point, number of things deleted
    res.redirect('/pokemon/')
}

const showOnePokemon = (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('show.ejs', {singlePokemon})
}



    module.exports = {
        getAllPokemon, sendNewPokemonForm, createNewPokemon, showOnePokemon, editPokemon, submitEdit, deletePokemon
    }