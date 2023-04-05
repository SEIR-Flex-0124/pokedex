const express = require('express');
const app = express();
const PORT = 4000;
const Pokemon = require("./models/pokemon.js");
const methodOverride = require("method-override");


// middleware
app.set('view engine', 'ejs');
// takes data from submitied form, encodes it and makesa body key that we can use later on, hwere we append it to the array... (allows us to use req.body)
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride("_method")); 
//is part of methodoverride syntax
app.use(express.json());
// to connect css(was static)




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
        id: parseInt(Pokemon.length + 1),
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
    console.log(newPokemon);
    Pokemon.push(newPokemon);
    res.redirect('/pokemon');
})

// EDIT
app.get("/pokemon/:indexOfPokemon/edit", (req, res)=>{
    let pokemon = Pokemon[req.params.indexOfPokemon]
    res.render("edit", {pokemon, index: req.params.indexOfPokemon})
})
//update
app.put("/pokemon/:indexOfPokemon", (req, res)=>{
    // Pokemon[req.params.indexOfPokemon] = req.body;

    let editedPokemon = {
        name: req.body.name,
        id: parseInt(Pokemon.length + 1),
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
    Pokemon[req.params.indexOfPokemon] = editedPokemon

    res.redirect("/pokemon")
})

//Delete
    app.delete("/pokemon/:id", (req, res)=>{
        Pokemon.splice(req.params.id, 1);
        res.redirect("/pokemon")
        });

// show route
app.get("/pokemon/:id", (req, res)=>{
    console.log("start app get")
    let index = req.params.id;
    let singlePokemon = Pokemon.find(p => p.id == index);
    
    // loop over pokemon attay to find matching id
    res.render("./show", {singlePokemon, index});
    console.log("stop app get")
})

app.get("/*", (req, res)=>{
    res.send("This page is blank...")
})

app.listen(PORT, () => {
    console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
})