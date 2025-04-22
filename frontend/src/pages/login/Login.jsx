import React from 'react'
import "./Login.css"

function Login() {
    return (
        <>
            <div className="loginMain">
                <form className="loginForm">
                    <label> Email: </label>
                    <input type="text" />
                    <label> Password: </label>
                    <input type="password" />
                    <button type="submit"> Login </button>
                </form>
            </div>
        </>
    )
}

export default Login;
