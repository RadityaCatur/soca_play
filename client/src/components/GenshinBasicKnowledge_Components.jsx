import React, { useEffect, useState } from 'react'
// import axios from 'axios'

export default function App() {
	const questions = [{
		"question_type": "Multiple Choice",
		"question": "Berapa jumlah resin dalam 24 jam?",
		"option_1": "160",
		"option_2": "180",
		"option_3": "200",
		"option_4": "140",
		"correct_answer": "180",
		"attachment_url": "",
		"score": 20
	  },{
		"_id": {
		  "$oid": "63f62d10089b0cf90ecabcca"
		},
		"quiz_id": {
		  "$oid": "63f601a279cceedfa8512613"
		},
		"question_type": "Multiple Choice",
		"question": "Manakah yang bukan series weapon Inazuma?",
		"option_1": "Mitsplitter Reforged",
		"option_2": "Engulfing Lightning",
		"option_3": "Thundering Pulse",
		"option_4": "Everlasting Moonglow",
		"correct_answer": "Everlasting Moonglow",
		"attachment_url": "",
		"score": 20
	  },{
		"_id": {
		  "$oid": "63f62d10089b0cf90ecabccc"
		},
		"quiz_id": {
		  "$oid": "63f601a279cceedfa8512613"
		},
		"question_type": "Multiple Choice",
		"question": "Siapakah yang berulang tahun pada bulan September?",
		"option_1": "Albedo",
		"option_2": "Alhaitham",
		"option_3": "Yoimiya",
		"option_4": "Xiao",
		"correct_answer": "Albedo",
		"attachment_url": "",
		"score": 20
	  },{
		"_id": {
		  "$oid": "63f62d10089b0cf90ecabccb"
		},
		"quiz_id": {
		  "$oid": "63f601a279cceedfa8512613"
		},
		"question_type": "Multiple Choice",
		"question": "Siapakah yang menggantikan archon sebelumnya?",
		"option_1": "Venti",
		"option_2": "Zhongli",
		"option_3": "Ei",
		"option_4": "Nahida",
		"correct_answer": "Ei",
		"attachment_url": "",
		"score": 20
	  },{
		"_id": {
		  "$oid": "63f62d10089b0cf90ecabccd"
		},
		"quiz_id": {
		  "$oid": "63f601a279cceedfa8512613"
		},
		"question_type": "Multiple Choice",
		"question": "Siapakah yang berbeda?",
		"option_1": "Yelan",
		"option_2": "Itto",
		"option_3": "Hu Tao",
		"option_4": "Zhongli",
		"correct_answer": "Yelan",
		"attachment_url": "",
		"score": 20
	  }]

// // const [question, setQuestion] = useState([{"_id":"63f62d10089b0cf90ecabcc0","quiz_id":"63f6018052247bf78b30e93d","question_type":"Multiple Choice","question":"Siapakah yang ditakuti oleh para Aranara?","option_1":"Tighnari","option_2":"Cyno","option_3":"Alhaitham","option_4":"Kaveh","correct_answer":"Tighnari","attachment_url":"","score":20,"__v":0}])

// // const getData = () => {
// // 	axios({
// // 		method: 'GET', 
// // 		url: 'http://localhost:5000/question',
// // 		headers: {},
// // 	}).then((response) => {
// // 		setQuestion(response.data.data)
// // 		console.log(question)
// // 	}).catch((error) => {
// // 		console.log(error)
// // 	})
// // }

// // useEffect(() => {
// // 	getData()
// // }, [])

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const option_1 = currentQuestion.option_1
  const option_2 = currentQuestion.option_2
  const option_3 = currentQuestion.option_3
  const option_4 = currentQuestion.option_4

  const handleAnswerButtonClick = ( option ) => {
    if (option == currentQuestion.correct_answer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						<button onClick={handleAnswerButtonClick(option_1)}>{questions[currentQuestion].option_1}</button>
						<button onClick={handleAnswerButtonClick(option_2)}>{questions[currentQuestion].option_2}</button>
						<button onClick={handleAnswerButtonClick(option_3)}>{questions[currentQuestion].option_3}</button>
						<button onClick={handleAnswerButtonClick(option_4)}>{questions[currentQuestion].option_4}</button>
            		</div>
				</>
			)}
		</div>
	)
}