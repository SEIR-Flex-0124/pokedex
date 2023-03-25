const express = require("express");
const app = express();

// access pokemon.js
const pokemons = require("./models/pokemon")

//Middleware
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

//Index
app.get("/pokemon", (req,res) => {
    res.render("index",{pokemons})
})

//Show
app.get("/pokemon/:id", (req,res) => {
    let pokemon = pokemons[req.params.id]
    res.render("show", {pokemon: pokemon})
})




//Global wrong pages
app.get("/*", (req,res) => {
    res.send("Wrong link!")
})

// Listen
app.listen(3000, () => {
    console.log(`🏝️ Server is listening to PORT 3000 🎧`)
})
