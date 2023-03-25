const express = require('express');
const app = express();
const PORT = 4000;
const pokemonController = require('./controllers/pokemon');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false}));


app.get('/', (req, res) =>{
    res.render('home.ejs');
})

app.use('', pokemonController);

app.get('/*'), (req, res) =>{
res.render('404.ejs')
}

app.listen(PORT, () =>{
    console.log(`Forever listening to PORT ${PORT}`)
})