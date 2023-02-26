import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PlayQuiz from './pages/PlayQuiz'
import Welcome from './pages/Welcome'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/PlayQuiz" element={<PlayQuiz />} />
			</Routes>
		</Router>
	)
}

export default App