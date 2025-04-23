import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from './pages/signUp/SignUp'
import Navbar from './components/navbar/navbar'

function App() {
	return (
		<>
		<Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
