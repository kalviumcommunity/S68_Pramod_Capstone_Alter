import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from './pages/signUp/SignUp'
import Landing from './pages/landing/Landing'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
