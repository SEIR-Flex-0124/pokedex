const express = require('express');
const app = express();
const PORT = 4000

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send('home page')
})

app.listen(PORT, () =>{
    console.log(`Forever listening to PORT ${PORT}`)
})