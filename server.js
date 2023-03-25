const express = require('express');
const app = express();
const PORT = 4000;
const pokemonController = require('./controllers/pokemon');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/pokemon', pokemonController);

app.get('/pokemon', (req, res) => {
    res.render('index.ejs')
})


app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`)
})