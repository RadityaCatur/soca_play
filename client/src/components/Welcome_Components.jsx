import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayQuiz from '../pages/PlayQuiz';

export default function App() {
	const quizzes = [
		{
			_id: "63f6018052247bf78b30e93d",
            quiz_name: "Genshin Characters Male",
            author: "Ren",
            // images_cover: "img/male.png",
			rating: 4
		}, 
        {
			_id: "63f601a279cceedfa8512612",
            quiz_name: "Genshin Characters Female",
            author: "Ren",
            // images_cover: "img/female.png",
			rating: 5
		}, 
        {
			_id: "63f601a279cceedfa8512613",
            quiz_name: "Genshin Basic Knowledge",
            author: "Ren",
            // images_cover: " ",
			rating: 5
		}, 
	];

//   const handleAnswerButtonClick = ( {quiz_name} ) => {
//     switch(quiz_name) {
//         case "Genshin Characters Male":
//             return "63f6018052247bf78b30e93d";
//         case "Genshin Characters Male":
//             return "63f601a279cceedfa8512612";
//         case "Genshin Basic Knowledge":
//             return "63f601a279cceedfa8512613";
//         default:
//             return "nothing_selected"
//     }
//   }

	return (
		<div className='app'>
            <div className='answer-section'>
                {/* {quizzes.map((quizzes) => (
                    <button onClick={handleAnswerButtonClick}> {quizzes.quiz_name} </button>
                ))} */}
                <a href="./PlayQuiz"><button>{quizzes[0].quiz_name}</button></a>
                <a href="./PlayQuiz"><button>{quizzes[1].quiz_name}</button></a>
                <a href="./PlayQuiz"><button>{quizzes[2].quiz_name}</button></a>
            </div>
		</div>
	)
}