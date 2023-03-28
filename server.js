const express = require('express');
const app = express();
const port = 4000;

const pokedexController = require('./controllers/pokedex');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

app.use(express.static('public'));

app.use('', pokedexController);

app.listen(port, () => {
    console.log(`Gotta Catch Em' All On Port ${port}`);
});


