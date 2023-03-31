const express = require("express");
const app = express();
const PORT = 4000;
const pokemonController = require('./controllers/pokemon')

//middleware
//This is for CSS
app.use(express.static('public'))

//rendering all views in views directory
app.set('view engine', 'ejs');

//This enables form not sure how
app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.send(`<h1> home page </h1>`)
})

//This is linking the pokemon controller
app.use('', pokemonController);


app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})
