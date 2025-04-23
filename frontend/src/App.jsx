import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from './pages/signUp/SignUp'

function App() {

	const navigate = useNavigate();

	return (
		<>
		<button onClick={() => {navigate("/login")}}> Login </button>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
