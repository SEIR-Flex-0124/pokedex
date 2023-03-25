const express = require('express');
const app = require();
const PORT = 4000



//Middleware
app.set('view engine', 'ejs')



//Routes

app.get('/', (req, res) => {
    res.send("You've wandered into the long grass...'")
})



app.listen(PORT, () => {
    console.log(`I choose you, port ${PORT}!`)
});