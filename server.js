const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override')

const pokemonController = require('./Controllers/pokemon');

//middleware

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride('_method'));


//controller 

app.use('/pokemon', pokemonController)


//listen

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})