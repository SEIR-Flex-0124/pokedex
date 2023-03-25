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

// show route
app.get("/pokemon/:id", (req, res)=>{
    // let id = req.params.id;
    // let singlePokemon = Pokemon.find(p => p.id == id);
    let singlePokemon = Pokemon[req.params.id]
    res.render("./show", {singlePokemon})
})

app.get("/*", (req, res)=>{
    res.send("This page is blank...")
})

app.listen(PORT, () => {
    console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
})