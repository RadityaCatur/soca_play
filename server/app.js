// import React from 'react'
// import { ReactDOM } from 'react'
// import "./index.css"
// import Quiz from "./views/quiz"

const express = require('express')
const app = express()
const cors = require('cors')
var corsOptions = {
    origin: "http://localhost:3000",
}
app.use(cors(corsOptions))

require('./utils/db')
const quiz = require('./models/quiz')
const question = require('./models/question')
// require('./models/insert_quiz')
// require('./models/insert_question')


const port = 5000

// setup ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello! I am going to make a Play Quiz Application.')
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})

app.get('/quiz', (req, res) => {
    res.render('quiz')
})

app.get('/question', (req, res) => {
    question.find({ quiz_id: "63f6018052247bf78b30e93d" }).then((result) => {
        res.send({data: result})
    }).catch((err) => {
        console.log(err)
    })
})

app.listen(port)