import React from 'react'
import "./Landing.css"

function Landing() {
    return (
        <>
            <div className="landerMainMain">
                <div className="navbarMain">
                    <div className="navbarLogo">
                        <img src="../../../logoNoBG.png" className="navbarLogoImage" />
                    </div>
                    <div className="navbarOthers">
                        <button className="navbarAbout"> About </button>
                        <button className="navbarContact"> Contact </button>
                    </div>
                </div>

                <div className="landerMain">
                    <div className="landerTexts">
                        <div className="landerTextsBox">
                            <span className="landerTitle"> Welcome to Alter </span>
                            <span className="landerSubtext"> Your go-to app for rides </span>
                        </div>
                    </div>
                    <div className="landerSignup">
                        <div className="landerSignupMain">
                            <h2> Sign Up </h2>
                            
                            {/* Name */}
                            <input type="text" name="name" placeholder="Name" className="signUpName" />
                            
                            {/* Email */}
                            <input type="text" name="email" placeholder="Email" />
                            
                            {/* Password */}
                            <input type="password" name="password" placeholder="Password" />
                            
                            {/* Confirm Password */}
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                            
                            {/* Phone Number */}
                            <input type="text" name="phoneNumber" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <div className="landerFooter">
                    
                </div>
            </div>
        </>
    )
}

export default Landing;
