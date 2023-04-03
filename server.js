const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.send('Test')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})