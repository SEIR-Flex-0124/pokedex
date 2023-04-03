const express = require('express');
const router = express.Router();
const Pokemon = require('../Models/Pokemon');

router.get('/', (req, res) => {
res.render('index.ejs', {Pokemon})
})

module.exports = router;