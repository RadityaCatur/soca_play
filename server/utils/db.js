const { ObjectId, Double, Decimal128 } = require('bson')
const mongoose = require('mongoose')
const { double } = require('webidl-conversions')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://radityacaturn:radityacaturn123@cluster0.ox7cu3a.mongodb.net/soca_play?retryWrites=true&w=majority')

// menambah data
// const quiz1 = new quiz({
//     quiz_name: "Genshin Characters Male",
//     author: "Ren",
//     images_cover: "img/male.png",
//     rating: 4
// })

// const quiz2 = new quiz({
//     quiz_name: "Genshin Character Female",
//     author: "Ren",
//     images_cover: "img/female.png",
//     rating: 5
// })

// const quiz3 = new quiz({
//     quiz_name: "Genshin Basic Knowledge",
//     author: "Ren",
//     images_cover: " ",
//     rating: 5
// })

// simpan ke collection
// quiz1.save()
// quiz2.save()
// quiz3.save()