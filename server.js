const express = require('express');
const app = express()
const port = 4000
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended:false }));

const pokemon = require("./models/pokemon")


//INDEX
app.get('/pokemon', (req, res) => {
    res.render("index", {pokemon})
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render("show", {pokemon: pokemon[req.params.id]})
})

//NEW
app.get('/pokemon/new', (req, res) => {
    res.render("new", {})
})

//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render("")
})

//POST
app.post('/pokemon', (req, res) => {
    res.render("")
})

//UPDATE
app.put('/pokemon/:id', (req, res) => {
    res.render("")
})

//DELETE
app.delete('/pokemon/:id', (req, res) => {
        pokemon.delete(req.params.id, 1)
        res.redirect('/pokemon')
})

app.get('/*', (req, res) => {
    res.render("404.ejs")
})

app.listen(port, () => {
    console.log(`Server is listening to PORT ${port}`)
})