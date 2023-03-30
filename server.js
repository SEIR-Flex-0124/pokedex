const express = require('express');
const app = express();
const PORT = 4321;
const methodOverride = require('method-override');
const pokemonController = require('./controllers/pokemon');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello Worlds')
})

app.use('', pokemonController);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})