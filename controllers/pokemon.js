const express = require('express');
const router = express.Router();
const pokemon = require('../models/Pokemon')

router.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon})
})

router.get("/pokemon/new", (req, res) =>{
    res.render("new.ejs")
})

router.get("/pokemon/:id", (req, res) => {
    const individualPokemon = pokemon[req.params.id];
    //console.log(individualPokemon)
    res.render("show.ejs", ({individualPokemon, idx: req.params.id}))
})

router.post("/pokemon", (req, res) => {
    let newPokemon = req.body
    //console.log(newPokemon)
    pokemon.push(newPokemon)
    //console.log(req.body)
    res.redirect("/pokemon")
})


router.get("/pokemon/:id/edit", (req, res) => {
    const editPokemon = pokemon[req.params.id];
    console.log(editPokemon);
    res.render("./edit.ejs", {editPokemon, idx: req.params.id});
})

router.put("/pokemon/:id", (req, res) => {
    let updatedPokemon = req.body;
    console.log(updatedPokemon);
    pokemon[req.params.id] = updatedPokemon
    res.redirect("/pokemon")

})

// router.put('/:id', (req, res) => {
//     let updatedFruit = req.body;
//     if(!updatedFruit.color) updatedFruit.color = "Blue"
//     if(updatedFruit.readyToEat === 'true') updatedFruit.readyToEat = true;
//     else updatedFruit.readyToEat = false;
//     console.log(updatedFruit);
//     fruits[req.params.id] = updatedFruit;
//     res.redirect(`/fruits/${req.params.id}`);
// })

// router.delete("/pokemon/:id", (req, res) => {
//     pokemon.splice(req.params.id);
//     res.redirect("/pokemon");
// })



module.exports = router;