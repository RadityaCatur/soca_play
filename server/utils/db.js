const { ObjectId, Double, Decimal128 } = require('bson')
const mongoose = require('mongoose')
const { double } = require('webidl-conversions')
mongoose.set('strictQuery', false)
const conn = mongoose.connect('mongodb+srv://radityacaturn:radityacaturn123@cluster0.ox7cu3a.mongodb.net/soca_play?retryWrites=true&w=majority')

module.exports = conn