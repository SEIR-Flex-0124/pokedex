const express = require('express');
const app = express();
const PORT = 4000;
const Pokemon = require("./models/pokemon.js");
const methodOverride = require("method-override");


// middleware
app.set('view engine', 'ejs');
// takes data from submitied form, encodes it and makesa body key that we can use later on, hwere we append it to the array... (allows us to use req.body)
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride("_method")); 
//is part of methodoverride syntax

// index route
app.get("/pokemon", (req, res)=>{
    res.render("./index", {Pokemon})
})
app.get("/pokemon/new", (req, res)=>{
    // res.render("./new")
    res.render("./new")
})

// post Route
app.post('/pokemon', (req, res) => {
    let newPokemon = {
        name: req.body.name,
        id: (Pokemon.length + 1),
        type: req.body.type.split(","),
        img: req.body.img,
        misc: {
            classification: req.body.classification,
            weight: req.body.weight,
            height: req.body.height,
            abilities: {
                normal: req.body.nAbility,
                hidden: req.body.hAbility
            }
        }
    }
    console.log(newPokemon.id)
    Pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

// EDIT
app.get("/pokemon/:indexOfPokemon/edit", (req, res)=>{
    res.render("edit", {pokemon: Pokemon[req.params.indexOfPokemon], index: req.params.indexOfPokemon})
})
//update
app.put("/pokemon/:indexOfPokemon", (req, res)=>{
    Pokemon[req.params.indexOfPokemon] = req.body;
    res.redirect("/pokemon/:id")
})

//Delete
    app.delete("/pokemon/:id", (req, res)=>{
        Pokemon.splice(req.params.id, 1);
        res.redirect("/pokemon")
        });

// show route
app.get("/pokemon/:id", (req, res)=>{
    let index = req.params.id;
    // let singlePokemon = Pokemon.find(p => p.id == id);
    let singlePokemon = Pokemon[index]
    res.render("./show", {singlePokemon, index: req.params.id})  //, id: req.params.id
})

app.get("/*", (req, res)=>{
    res.send("This page is blank...")
})

app.listen(PORT, () => {
    console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
})