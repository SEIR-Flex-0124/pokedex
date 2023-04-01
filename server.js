const express = require("express");
const app = express();
const methodOverride = require("method-override");

// access pokemon.js
const pokemons = require("./models/pokemon");

//Middleware
app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride('_method'));
app.use((req,res,next) => {
    next()
})
app.use(express.static(__dirname + '/public'));

//Index
app.get("/pokemon", (req,res) => {
    res.render("index",{pokemons})
})

//New
app.get("/pokemon/new", (req,res) => {
    res.render("new");
})

//Show
app.get("/pokemon/:index", (req,res) => {
    let pokemon = pokemons[req.params.index]
    res.render("show", {pokemon: pokemon})
})

//Delete
app.delete("/pokemon/:id", (req,res) => {
    let indexNum = pokemons.findIndex((p) => p.id === req.params.id);
    pokemons.splice(indexNum, 1);
    res.redirect("/pokemon")
})

//Edit
app.get("/pokemon/:id/edit", (req,res) => {
    let indexNum = pokemons.findIndex((p) => p.id === req.params.id);
    
    res.render("edit.ejs", {
        pokemon: pokemons[indexNum],
        index: indexNum
    });
})

app.put("/pokemon/:index",(req,res) => {
    pokemons[req.params.index].name = req.body.name;
    res.redirect("/pokemon")
})



//Global wrong pages
app.get("/*", (req,res) => {
    res.send("Wrong link!")
})


//Post - create
app.post("/pokemon",(req,res) => {
    let newPokemon = req.body;
    newPokemon.type = newPokemon.type.split(",");
    pokemons.unshift(newPokemon);
    console.log(newPokemon)
    res.redirect("/pokemon");
})




// Listen
app.listen(3000, () => {
    console.log(`🏝️ Server is listening to PORT 3000 🎧`)
})
