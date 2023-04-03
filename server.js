const express = require('express');
const app = express();
const PORT = 4000;
const pokemonController = require('./Controllers/pokemon');

//controller 

app.use('/pokemon', pokemonController)

//middleware

// app.get('/', (req, res) => {
//     res.send('Test')
// })


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})