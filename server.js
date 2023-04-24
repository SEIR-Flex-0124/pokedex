// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

const express = require('express');
const app = express();
const port = 4000;
const pokedexController = require('./controllers/pokedex.js');

const models = require("./models/pokemon.js");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', { pokemon: models })
});


app.use('', pokedexController);


app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
});



