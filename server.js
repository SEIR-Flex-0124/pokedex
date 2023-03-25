
const express = require("express");
const app = express();
const port = 4000;
const pokemon = require("./models/pokemon.js");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

// Pokemon Index
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", { pokemon: pokemon });
    }
);

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    const singlePokemon = pokemon.find(p=>p.id == id)
    res.render('show.ejs', {singlePokemon})
})

// Listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    }
);