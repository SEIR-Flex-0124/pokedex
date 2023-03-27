const express = require('express');
const app = express();
const port = 3000;

//data
const pokemon=require('./models/Pokemon')
//middleware
app.use(express.urlencoded({ extended:false }));
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');

//index
app.get('/pokemon', (req, res) => {
    res.render('index',{pokemon});
})

//new pokemon
app.get('/pokemon/new', (req,res)=>{
    res.render('new')
})

app.post('/create', (req, res) => {
        let newPokemon = {
            name: req.body.name,
            id: (pokemon.length + 1),
            type: req.body.type,
            img: req.body.img,
            misc: {
                classification: req.body.classification,
                weight: req.body.weight,
                height: req.body.height,
                abilities: {
                    normal: req.body.normal,
                    hidden: req.body.hidden
                }
            }
        }
    
        pokemon.push(newPokemon);
        res.redirect('/pokemon');
    })

//edit pokemon
app.get('/pokemon/:index/edit', (req, res) => {
        const pokemonItemEdit=pokemon[req.params.index]
        res.render('edit',{pokemonItemEdit,indice:req.params.index});
    })

app.put('/pokemon/:index', (req, res) => {
        const id=req.params.index;
        const classi=req.body.classification;
        const weight=req.body.weight;
        const height=req.body.height;
        const type=req.body.type;
        const normal=req.body.normal;
        const hidden=req.body.hidden;
        pokemon[id].classification = classi;
        pokemon[id].misc.weight = weight;
        pokemon[id].misc.height = height;
        pokemon[id].type = type;
        pokemon[id].misc.abilities.normal = normal;
        pokemon[id].misc.abilities.hidden = hidden;
        res.redirect('/pokemon')
    })

//delete pokemon
app.delete('/pokemon/:index', (req, res)=>{
        pokemon.splice(req.params.index,1);
        res.redirect('/pokemon')
       })

//show pokemon detail
app.get('/pokemon/:id', (req, res) => {
    const pokemonId=req.params.id
    const pokemonItem=pokemon[req.params.id];
    res.render('show',{pokemonItem,pokemonId});
})



















//this go to the end
app.listen(port, () => {
    console.log('Express is listening on port: ', port);
});