const express = require('express');
const app = express();
const port = 3000;

const pokemon=require('./models/Pokemon')

app.set('view engine', 'ejs');

app.get('/pokemon', (req, res) => {
    res.render('index',{pokemon});
})

app.get('/pokemon/new', (req,res)=>{
    res.render('new')
})

app.get('/pokemon/:id', (req, res) => {
    const pokemonItem=pokemon[req.params.id];
    res.render('show',{pokemonItem});
})



// app.get('/pokemon', (req, res) => {
//     res.render('home.ejs');
// })

















//this go to the end
app.listen(port, () => {
    console.log('Express is listening on port: ', port);
});