
const express = require("express");
const app = express();
const port = 4000;
const methodOverride = require('method-override')

// Importing Routers
const pokemonRouter = require('./routers/pokemonRouter')

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.use((req,res,next) => {
    console.log('this is my own middleware')
    next()
})

// Routes for pokemon
app.use('/pokemon', pokemonRouter)

// Listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    }
);