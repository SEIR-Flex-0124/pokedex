const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override')

const pokemonController = require('./Controllers/pokemon');

//middleware

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


//controller 

app.use('/pokemon', pokemonController)

app.get('/*', (req, res) => {
    res.render('404.ejs')
})


//listen

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})