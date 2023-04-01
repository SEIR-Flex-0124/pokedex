const express = require('express');
const PORT = 4000;
const methodOverride = require('method-override');



const app = express();
const pokemonController = require('./controllers/pokemon');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(methodOverride("_method"));


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