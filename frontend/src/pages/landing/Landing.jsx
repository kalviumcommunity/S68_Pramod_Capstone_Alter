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
                    <div className="landerSignup">
                        <form className="landerSignUpMain">
                            <h1> Sign Up </h1>
                            
                            <div className="landerFormInputs">
                                {/* Name */}
                                <input type="text" name="name" placeholder="Name" className="signUpInputs" />
                                
                                {/* Email */}
                                <input type="text" name="email" placeholder="Email" className="signUpInputs" />
                                
                                {/* Password */}
                                <input type="password" name="password" placeholder="Password" className="signUpInputs" />
                                
                                {/* Confirm Password */}
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="signUpInputs" />
                                
                                {/* Phone Number */}
                                <input type="text" name="phoneNumber" placeholder="Phone Number" className="signUpInputs" />
                            </div>

                            <br />

                            {/* Sign Up Button */}
                            <button type="submit" className="landerSignUpButton"> Sign Up </button>

                            <button className="landerGoogleSignUpButton"> Sign Up With Google </button>

                            <p id="backToLogin"> Log In </p>
                        </form>
                    </div>
                {/* <div className="landerFooter">
                    <div className="footerRights">
                        <p id="rightsReserved">
                            2025 Alter. All Rights Reserved
                        </p>
                        <div className="footerLogos">
                            <img src="./githubIconWhite.svg" style={{
                                width: "15%"
                            }} />
                            <img src="./linkedinIcon.svg" style={{
                                width: "15%"
                            }} />

                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Landing;
