import React from 'react'
import "./Landing.css"

function Landing() {
    return (
        <>
            <div className="landerOne">
                {/* Background of Landing Page */}
                {/* <div className="landingFiller">
                    
                </div> */}
                <div className="landerBookRide">
                    <button className="bookARideButton">
                        Book A Ride
                    </button>
                </div>
            </div>
            <div className="landerTwo">
                <div className="twoLeft">
                    <div className="twoLeftImage">
                        <img src="./image1.png" style={{ width: "60%" }}/>
                    </div>
                    <div className="twoLeftButton">
                        <button className="twoLeftSignUp"> Sign Up </button>
                    </div>
                </div>
                <div className="twoRight">
                    <div className="twoRightBox">
                        <h2 className="twoRightText"> 
                            Alter is a modern ride-hailing app build for speed, safety, and simplicity.
                            <br /> <br />
                            From everyday rides to premium options, Alter puts your journey first - because moving should be effortless.
                        </h2>
                        <div className="twoRightViewDiv">
                            <button className="twoRightViewMore">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landerThree">
                <div className="threeBox">
                    <div style={{ paddingLeft: "50px", width: "100%"}}>
                        <h1> Book A Ride </h1>
                    </div>
                    <div className="threeMainContent">
                        <div className="threeRideForm">
                            <input type="text" name="pickUp" placeholder="Pick Up Location" /> 
                            <input type="text" name="dropOff" placeholder="Drop Off Location" />
                            <input type="text" name="mobileNumber" placeholder="Mobile Number" />
                            <div className="rideFormDates">
                                <input type="date" name="date" placeholder="Date" 
                                    style={{ width: "45%" }}
                                />
                                <input type="time" name="time" placeholder="Time" />
                            </div>

                            <button className="threeRideConfirmation"> Confirm Ride </button>
                        </div>
                        <div className="threeRideMap">
                            {/* Placeholder Image, to be replaced with a working map that lets 
                                you choose any point as pick up or drop off location */}
                            <img src="./mapImage.png" style={{ 
                                width: "75%"
                             }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="landerFooter">
                <div className="companyAndInformation">
                    <div className="footerSubs">
                        <h4> Company & Information</h4>
                        <p> About Us </p>
                        <p> Careers </p>
                    </div>
                </div>
                <div className="supportAndHelp">
                    <div className="footerSubs">
                        <h4> Support & Help</h4>
                        <p> Help Center </p>
                        <p> Contact Us </p>
                        <p> Report An Issue </p>
                        <p> FAQs </p>
                        <p> Community Guidelines </p>
                        <p> How It Works </p>
                    </div>
                </div>
                <div className="socials">
                    <div className="footerSubs">
                        <h4> Socials</h4>
                            <p id="linkedIn">
                                Linkedin 
                            </p>
                            <p id="github">
                                Github
                            </p>
                    </div>
                </div>
                <div className="legal">
                    <div className="footerSubs">
                        <h4> Legal</h4>
                        <p> Privacy Policy </p>
                        <p> Terms of Service </p>
                        <p> Cookie Policy </p>
                        <p> Safety & Security </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;
