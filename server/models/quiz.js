const mongoose = require('mongoose')

const quiz = mongoose.model('quiz', {
    quiz_name: {
        type: String,
        required: true
    },
    author: String,
    images_cover: String,
    rating: Number
})

module.exports = quiz;