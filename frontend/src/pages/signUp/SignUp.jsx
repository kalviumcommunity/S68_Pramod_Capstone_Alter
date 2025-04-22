import React, { useState } from 'react'
import "./SignUp.css"
import axios from "axios"

function SignUp() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    })
    const [passwordVisibility, setPasswordVisibility]= useState(false);
    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        console.log(import.meta.env.VITE_LOCALHOST)
        console.log(userDetails);

        if (userDetails.password != userDetails.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/user/create-user`, userDetails);
            console.log("Sign Up Action Successful");
            alert("Sign Up Action Successful");
        }
        catch (error) {
            console.log("Client error creating user \n", error);
        }

    }

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignUpWithGoogle = async () => {
        console.log("Sign Up With Google In Progress");
    }
    
    return (
        <>
            <div className="signUpMain">
                <form onSubmit={submitHandler} className="signUpForm">
                    <h2> Sign Up </h2>
                    <label> Name: </label>
                    <input type="text" name="name" className="signUpInputs" onChange={(handleInputChange)} />

                    <label> Email: </label>
                    <input type="text" name="email" className="signUpInputs" onChange={handleInputChange} />

                    <label> Password: </label>
                    <div className="signUpPassword">
                    <input type={passwordVisibility ? "text" : "password"} name="password" onChange={handleInputChange} className="register-password-input" />
						<span className="register-password-icon"> 
							{passwordVisibility ? (<img src="./password/eye-open.svg" onClick={() => setPasswordVisibility(false)} className="passwordImage"/>) : 
								(<img src="./password/eye-closed.svg" onClick={() => setPasswordVisibility(true)} className="passwordImage" /> )}
						</span>
                    </div>
                    
                    
                    <label> Re-Enter Password: </label>
                    <input type="password" name="confirmPassword" className="signUpInputs" onChange={handleInputChange} />

                    <label> Mobile Number: </label>
                    <input type="tel" name="phoneNumber" pattern="[0-9]{10}" className="signUpInputs" onChange={handleInputChange} />

                    <div className="signUpPageButtons">
                        <button type="submit" className="signUpButton"> Sign Up </button>
                        <button onClick={handleSignUpWithGoogle} className="signUpWithGoogleButton"> Sign Up With Google </button>
                    </div>

                    <div className="backToLogin">
                        <p> Log In </p>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default SignUp
