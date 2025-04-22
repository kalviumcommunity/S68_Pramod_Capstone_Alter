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
    
    return (
        <>
            <div className="signUpMain">
                <form onSubmit={submitHandler} className="signUpForm">
                    <label> Name: </label>
                    <input type="text" name="name" className="signUpInputs" onChange={handleInputChange} />

                    <label> Email: </label>
                    <input type="text" name="email" className="signUpInputs" onChange={handleInputChange} />

                    <label> Password </label>
                    <input type="password" name="password" className="signUpInputs" onChange={handleInputChange} />
                    
                    <label> Re-Enter Password </label>
                    <input type="password" name="confirmPassword" className="signUpInputs" onChange={handleInputChange} />

                    <label> Mobile Number </label>
                    <input type="tel" name="phoneNumber" pattern="[0-9]{10}" className="signUpInputs" onChange={handleInputChange} />

                    <button type="submit"> Sign Up </button>

                    
                </form>
            </div>
        </>
    )
}

export default SignUp
