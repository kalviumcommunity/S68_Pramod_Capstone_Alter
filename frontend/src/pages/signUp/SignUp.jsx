import React from 'react'
import "./SignUp.css"

function SignUp() {
    
    const submitHandler = (event) => {
        event.preventDefault();

        console.log("Sign Up Action Successful");
        alert("Sign Up Action Successful");
    }
    
    return (
        <>
            <div className="signUpMain">
                <form onSubmit={submitHandler} className="signUpForm">
                    <label> Email: </label>
                    <input type="text" name="email" className="signUpInputs" />

                    <label> Password </label>
                    <input type="password" name="password" className="signUpInputs" />
                    
                    <label> Re-Enter Password </label>
                    <input type="password" className="signUpInputs"/>

                    <label> Mobile Number </label>
                    <input type="tel" name="phone" pattern="[0-9]{10}" className="signUpInputs" />

                    <button type="submit"> Sign Up </button>

                    
                </form>
            </div>
        </>
    )
}

export default SignUp
