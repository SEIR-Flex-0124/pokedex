const express = require('express');
const router = express.Router();
let pokemon = require('../models/pokemon');

router.get('', (req, res) => {
    res.render('show.ejs', {pokemon})
})



module.exports = router;