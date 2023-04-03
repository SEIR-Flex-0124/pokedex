const express = require('express');
const app = express();
const PORT = 4000;
const pokemonController = require('./controllers/pokemon');
const methodOverride = require('method-override')

//middleware
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended:false }));

//controller
app.use('/pokemon', pokemonController);

//home route
app.get('/', (req, res) => {
    res.render('home.ejs')
})

//PORT
app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`)
})