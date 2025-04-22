import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from './pages/signUp/SignUp'

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
