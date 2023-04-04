const express = require('express')
const app = express()
const PORT = 3000
const pokedex = require('./models/pokemon.js')

app.get('/', (req, res) => {
  res.json(`🐉 You've reached the / route 🐉`)
})

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokedex
  })
})

app.get('/pokemon/:id'),
  (req, res) => {
    res.json('this is the show page')
  }

// app.get('/pokemon/new'),
//   (req, res) => {
//     res.json('this is the add pokemon page')
//   }

// app.get('/pokemon/:id/:edit'),
//   (req, res) => {
//     res.json('this is the edit id page')
//   }

// app.post('/pokemon'),
//   (req, res) => {
//     res.json('this is the create pokemon page')
//   }

// app.put('/pokemon/:id'),
//   (req, res) => {
//     res.json('this is the update pokemon id page')
//   }

// app.delete('/pokemon/:id'),
//   (req, res) => {
//     res.json('this is the delete pokemon page')
//   }

app.listen(PORT, () => {
  console.log(`🐉🐉 Server is listening to PORT ${PORT} 🎧🐉🐉`)
})
