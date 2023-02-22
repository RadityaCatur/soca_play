const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const question = mongoose.model('question', {
    quiz_id: ObjectId,
    question_type: String,
    question: String,
    option_1: String,
    option_2: String,
    option_3: String,
    option_4: String,
    correct_answer: String,
    attachment_url: String,
    score: Number
})

module.exports = question;