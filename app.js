const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello! I am going to make a Play Quiz Application.')
})

app.listen(3000)