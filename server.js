const express = require('express');
const app = express();
const PORT = 4321;
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello Worlds')
})

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    let singlePoke = pokemon[req.params.id]
    res.render('show.ejs', {singlePoke})
})



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})