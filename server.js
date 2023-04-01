const express = require("express");
const app = express();
const PORT = 4000;
const methodOverride = require("method-override")
const pokemonController = require('./controllers/pokemon')

//middleware
//This is for CSS
app.use(express.static('public'))

//rendering all views in views directory
app.set('view engine', 'ejs');

//This enables form not sure how
app.use(express.urlencoded({ extended:false }));

app.use(methodOverride("_method"));


//This is linking the pokemon controller
app.use('', pokemonController);


// app.get('/*', (req, res) => {
//     res.render("404.ejs")
// })


app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`)
})
