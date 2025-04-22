import React from 'react'
import "./Login.css"

function Login() {

    const submitHandler = (event) => {
        event.preventDefault();

        console.log("Log In Action Success")
    }

    return (
        <>
            <div className="loginMain">
                <form className="loginForm" onSubmit={submitHandler}>
                    <label> Email: </label>
                    <input type="text" id="inputMargins" name="email" />
                    <label> Password: </label>
                    <input type="password" name="password"/>
                    <p id="forgotPassword"> Forgot Password? </p>
                    <button type="submit"> Login </button>
                </form>
            </div>
        </>
    )
}

export default Login;
