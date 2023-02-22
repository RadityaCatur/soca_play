const mongoose = require('mongoose')

const question = require('./question')

// menambah data

// quiz - genshin characters male
const question1 = new question({
    quiz_id: "63f6018052247bf78b30e93d",
    question_type: "Multiple Choice",
    question: "Siapakah nama adik Tartaglia?",
    option_1: "Timmy",
    option_2: "Joell",
    option_3: "Teucer",
    option_4: "Ella",
    correct_answer: "Teucer",
    attachment_url: "",
    score: 20
})

const question2 = new question({
    quiz_id: "63f6018052247bf78b30e93d",
    question_type: "Multiple Choice",
    question: "Siapakah yang ditakuti oleh para Aranara?",
    option_1: "Tighnari",
    option_2: "Cyno",
    option_3: "Alhaitham",
    option_4: "Kaveh",
    correct_answer: "Tighnari",
    attachment_url: "",
    score: 20
})

const question3 = new question({
    quiz_id: "63f6018052247bf78b30e93d",
    question_type: "Multiple Choice",
    question: "Siapakah nama sapi Itto?",
    option_1: "Sepi",
    option_2: "Benny",
    option_3: "Kuki",
    option_4: "Ushi",
    correct_answer: "Ushi",
    attachment_url: "",
    score: 20
})

const question4 = new question({
    quiz_id: "63f6018052247bf78b30e93d",
    question_type: "Multiple Choice",
    question: "Siapakah yang merencanakan Festival Irodori bersama Yae Miko?",
    option_1: "Heizou",
    option_2: "Itto",
    option_3: "Ayato",
    option_4: "Kazuha",
    correct_answer: "Ayato",
    attachment_url: "",
    score: 20
})

const question5 = new question({
    quiz_id: "63f6018052247bf78b30e93d",
    question_type: "Multiple Choice",
    question: "Siapakah yang bukan merupakan kelahiran Inazuma?",
    option_1: "Ayato",
    option_2: "Thoma",
    option_3: "Heizou",
    option_4: "Kazuha",
    correct_answer: "Thoma",
    attachment_url: "",
    score: 20
})

// quiz - genshin characters female
const question6 = new question({
    quiz_id: "63f601a279cceedfa8512612",
    question_type: "Multiple Choice",
    question: "Siapakah yang bukan manusia?",
    option_1: "Keqing",
    option_2: "Shenhe",
    option_3: "Beidou",
    option_4: "Ganyu",
    correct_answer: "Ganyu",
    attachment_url: "",
    score: 20
})

const question7 = new question({
    quiz_id: "63f601a279cceedfa8512612",
    question_type: "Multiple Choice",
    question: "Siapakah yang berbeda?",
    option_1: "Eula",
    option_2: "Ayaka",
    option_3: "Qiqi",
    option_4: "Diona",
    correct_answer: "Diona",
    attachment_url: "",
    score: 20
})

const question8 = new question({
    quiz_id: "63f601a279cceedfa8512612",
    question_type: "Multiple Choice",
    question: "Siapakah yang berbeda?",
    option_1: "Fischl",
    option_2: "Yelan",
    option_3: "Hu Tao",
    option_4: "Faruzan",
    correct_answer: "Hu Tao",
    attachment_url: "",
    score: 20
})

const question9 = new question({
    quiz_id: "63f601a279cceedfa8512612",
    question_type: "Multiple Choice",
    question: "Siapakah nama asli Fischl?",
    option_1: "Fischl",
    option_2: "Donna",
    option_3: "Louis",
    option_4: "Amy",
    correct_answer: "Amy",
    attachment_url: "",
    score: 20
})

const question10 = new question({
    quiz_id: "63f601a279cceedfa8512612",
    question_type: "Multiple Choice",
    question: "Siapakah keturun klan Gunnhildr?",
    option_1: "Fischl",
    option_2: "Eula",
    option_3: "Jean",
    option_4: "Lisa",
    correct_answer: "Jean",
    attachment_url: "",
    score: 20
})

// quiz - genshin basic knowledge
const question11 = new question({
    quiz_id: "63f601a279cceedfa8512613",
    question_type: "Multiple Choice",
    question: "Berapa jumlah resin dalam 24 jam?",
    option_1: "160",
    option_2: "180",
    option_3: "200",
    option_4: "140",
    correct_answer: "180",
    attachment_url: "",
    score: 20
})

const question12 = new question({
    quiz_id: "63f601a279cceedfa8512613",
    question_type: "Multiple Choice",
    question: "Manakah yang bukan series weapon Inazuma?",
    option_1: "Mitsplitter Reforged",
    option_2: "Engulfing Lightning",
    option_3: "Thundering Pulse",
    option_4: "Everlasting Moonglow",
    correct_answer: "Everlasting Moonglow",
    attachment_url: "",
    score: 20
})

const question13 = new question({
    quiz_id: "63f601a279cceedfa8512613",
    question_type: "Multiple Choice",
    question: "Siapakah yang menggantikan archon sebelumnya?",
    option_1: "Venti",
    option_2: "Zhongli",
    option_3: "Ei",
    option_4: "Nahida",
    correct_answer: "Ei",
    attachment_url: "",
    score: 20
})

const question14 = new question({
    quiz_id: "63f601a279cceedfa8512613",
    question_type: "Multiple Choice",
    question: "Siapakah yang berulang tahun pada bulan September?",
    option_1: "Albedo",
    option_2: "Alhaitham",
    option_3: "Yoimiya",
    option_4: "Xiao",
    correct_answer: "Albedo",
    attachment_url: "",
    score: 20
})

const question15 = new question({
    quiz_id: "63f601a279cceedfa8512613",
    question_type: "Multiple Choice",
    question: "Siapakah yang berbeda?",
    option_1: "Yelan",
    option_2: "Itto",
    option_3: "Hu Tao",
    option_4: "Zhongli",
    correct_answer: "Yelan",
    attachment_url: "",
    score: 20
})

// simpan ke collection
question1.save()
question2.save()
question3.save()
question4.save()
question5.save()
question6.save()
question7.save()
question8.save()
question9.save()
question10.save()
question11.save()
question12.save()
question13.save()
question14.save()
question15.save()