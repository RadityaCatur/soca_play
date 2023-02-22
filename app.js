const express = require('express')

const app = express()
const port = 3000

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

// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri = "mongodb+srv://radityacaturn:radityacaturn123@cluster0.ox7cu3a.mongodb.net/test";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// pilih database
// const dbName = 'soca_play'
// const db = client.db(dbName)

// menambahkan data ke collection quizzes
// db.collection('quizzes').insertMany(
//     [
//         {
//             quiz_name: "Genshin Character Male",
//             author: "Ren",
//             images_cover: "img/male.png",
//             rating: 4
//         },
//         {
//             quiz_name: "Genshin Character Female",
//             author: "Ren",
//             images_cover: "img/female.png",
//             rating: 5
//         }
//     ],
//     (error, result) => {
//         if(error) {
//             return console.log('data gagal ditambahkan')
//         }

//         console.log(result)
//     }
// )

app.listen(port)