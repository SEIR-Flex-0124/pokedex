const express = require('express');
const app = express();
const port = 4000;

const pokedexController = require('./controllers/pokedex');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/pokedex', pokedexController);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
