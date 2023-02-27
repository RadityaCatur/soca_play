import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GenshinBasicKnowledge from './pages/GenshinBasicKnowledge'
import Welcome from './pages/Welcome'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/CharactersMale" element={<GenshinBasicKnowledge />} />
				<Route path="/CharactersFemale" element={<GenshinBasicKnowledge />} />
				<Route path="/GenshinBasicKnowledge" element={<GenshinBasicKnowledge />} />
			</Routes>
		</Router>
	)
}

export default App