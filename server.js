const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/pokemon', (req, res) => {
    res.send('poke e mans')
})

app.get('/pokemon/:id', (req, res) => {
    res.send('poke e mans')
})

app.get('/pokemon/new', (req, res) => {
    res.send('poke e mans')
})

app.get('/pokemon/:id/edit', (req, res) => {
    res.send('poke e mans')
})

app.post('/pokemon/', (req, res) => {
    res.send('poke e mans')
})

app.put('/pokemon/:id', (req, res) => {
    res.send('poke e mans')
})

app.delete('/pokemon/:id', (req, res) => {
    res.send('poke e mans')
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})
