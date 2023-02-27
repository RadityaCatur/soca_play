import React, { useEffect, useState } from 'react'
// import axios from 'axios'

export default function App() {
	const questions = [{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc4"
        },
        "quiz_id": {
          "$oid": "63f601a279cceedfa8512612"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang bukan manusia?",
        "option_1": "Keqing",
        "option_2": "Shenhe",
        "option_3": "Beidou",
        "option_4": "Ganyu",
        "correct_answer": "Ganyu",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc5"
        },
        "quiz_id": {
          "$oid": "63f601a279cceedfa8512612"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang berbeda?",
        "option_1": "Eula",
        "option_2": "Ayaka",
        "option_3": "Qiqi",
        "option_4": "Diona",
        "correct_answer": "Diona",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc7"
        },
        "quiz_id": {
          "$oid": "63f601a279cceedfa8512612"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah nama asli Fischl?",
        "option_1": "Fischl",
        "option_2": "Donna",
        "option_3": "Louis",
        "option_4": "Amy",
        "correct_answer": "Amy",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc8"
        },
        "quiz_id": {
          "$oid": "63f601a279cceedfa8512612"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah keturun klan Gunnhildr?",
        "option_1": "Fischl",
        "option_2": "Eula",
        "option_3": "Jean",
        "option_4": "Lisa",
        "correct_answer": "Jean",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc6"
        },
        "quiz_id": {
          "$oid": "63f601a279cceedfa8512612"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang berbeda?",
        "option_1": "Fischl",
        "option_2": "Yelan",
        "option_3": "Hu Tao",
        "option_4": "Faruzan",
        "correct_answer": "Hu Tao",
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

  const handleAnswerButtonClick = ( option ) => {
    if (option == questions.correct_answer) {
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
						<button onClick={handleAnswerButtonClick(questions[currentQuestion].option_1)}>{questions[currentQuestion].option_1}</button>
						<button onClick={handleAnswerButtonClick(questions[currentQuestion].option_2)}>{questions[currentQuestion].option_2}</button>
						<button onClick={handleAnswerButtonClick(questions[currentQuestion].option_3)}>{questions[currentQuestion].option_3}</button>
						<button onClick={handleAnswerButtonClick(questions[currentQuestion].option_4)}>{questions[currentQuestion].option_4}</button>
            		</div>
				</>
			)}
		</div>
	)
}