import React, { useEffect, useState } from 'react'
// import axios from 'axios'

export default function App() {
	const questions = [{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc0"
        },
        "quiz_id": {
          "$oid": "63f6018052247bf78b30e93d"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang ditakuti oleh para Aranara?",
        "option_1": "Tighnari",
        "option_2": "Cyno",
        "option_3": "Alhaitham",
        "option_4": "Kaveh",
        "correct_answer": "Tighnari",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc1"
        },
        "quiz_id": {
          "$oid": "63f6018052247bf78b30e93d"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah nama sapi Itto?",
        "option_1": "Sepi",
        "option_2": "Benny",
        "option_3": "Kuki",
        "option_4": "Ushi",
        "correct_answer": "Ushi",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc2"
        },
        "quiz_id": {
          "$oid": "63f6018052247bf78b30e93d"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang merencanakan Festival Irodori bersama Yae Miko?",
        "option_1": "Heizou",
        "option_2": "Itto",
        "option_3": "Ayato",
        "option_4": "Kazuha",
        "correct_answer": "Ayato",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcbf"
        },
        "quiz_id": {
          "$oid": "63f6018052247bf78b30e93d"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah nama adik Tartaglia?",
        "option_1": "Timmy",
        "option_2": "Joell",
        "option_3": "Teucer",
        "option_4": "Ella",
        "correct_answer": "Teucer",
        "attachment_url": "",
        "score": 20
      },{
        "_id": {
          "$oid": "63f62d10089b0cf90ecabcc3"
        },
        "quiz_id": {
          "$oid": "63f6018052247bf78b30e93d"
        },
        "question_type": "Multiple Choice",
        "question": "Siapakah yang bukan merupakan kelahiran Inazuma?",
        "option_1": "Ayato",
        "option_2": "Thoma",
        "option_3": "Heizou",
        "option_4": "Kazuha",
        "correct_answer": "Thoma",
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