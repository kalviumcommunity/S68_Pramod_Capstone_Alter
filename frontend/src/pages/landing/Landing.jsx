import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Landing.css"

function Landing() {

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="navbarTitle">
                    <h1> ALTER </h1>
                </div>
                <div className="navbarButtons">
                    <button className="navbarOthers"> About Us </button>
                    <button className="navbarOthers"> Log In </button>
                    <button className="navbarSignUp"> Sign Up </button>
                </div>
            </div>

            {/* Main Body */}
            <div className="landingOrderARide">
                <div className="orderARideMain">
                    <div className="orderLeft">
                        <h2> Order A Ride </h2>
                        <div className="orderInputs">
                            <div style={{ position: "relative" }}>
                                <input type="text" placeholder="Pick Up Location" className="orderInputBoxes" />
                                <img src="./navigation.svg" className="navigationImage" />
                            </div>
                            <div style={{ position: "relative" }}>
                                <input type="text" placeholder="Drop Off Location" className="orderInputBoxes" />
                                <img src="./navigation.svg" className="navigationImage" />
                            </div>
                        </div>

                        <div className="mainRidePrices">
                            <span style={{ fontWeight: "600" }}> Prices </span> <br />
                            <div className="pricesButtons">
                                <input type="radio" id="mini" name="prices" hidden />
                                <label htmlFor="mini" className="pricesOptions">
                                    <div className="mainPriceSub">
                                        <div style={{ 
                                            display: "flex", 
                                            justifyContent: "center",
                                            alignItems: "center"
                                         }}>
                                            <img src="./smallCar.svg" 
                                                style={{ width: "60%" }}
                                            />
                                        </div>
                                        <div className="subPriceMid">
                                            <p>
                                                <span style={{
                                                    fontSize: "1vw",
                                                    fontWeight: "600"
                                                }}> Mini </span> <br />
                                                <span style={{
                                                    fontSize: "0.9vw"
                                                }}>
                                                    5 minutes to pickup
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "0.9vw", fontWeight: "600" }}>
                                                $19.99
                                            </p>
                                        </div>
                                    </div>    
                                </label>
                                
                                <input type="radio" id="xl" name="prices" hidden />
                                <label htmlFor="xl" className="pricesOptions"> 
                                    <div className="mainPriceSub">
                                        <div style={{ 
                                            display: "flex", 
                                            justifyContent: "center",
                                            alignItems: "center"
                                         }}>
                                            <img src="./jeep.svg" 
                                                style={{ width: "60%" }}
                                            />
                                        </div>
                                        <div className="subPriceMid">
                                            <p>
                                                <span style={{
                                                    fontSize: "1vw",
                                                    fontWeight: "600"
                                                }}> XL </span> <br />
                                                <span style={{
                                                    fontSize: "0.9vw"
                                                }}>
                                                    Unavailable
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "0.9vw", fontWeight: "600" }}>
                                                $19.99
                                            </p>
                                        </div>
                                    </div> 
                                </label>
                            </div>
                        </div>

                        <div className="confirmBooking">
                            <button className="confirmBookingButton">
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                    <div className="orderRight">
                        <div style={{ position: "relative" }}>
                            <img src="oneBGNew.png" 
                                style={{ width: "100%" }}
                            />
                            <p id="shutterstockRefOne">
                                Image By
                                <a href="https://www.shutterstock.com/image-vector/corporate-transport-isolated-concept-vector-illustration-2191086613"> 
                                    Shutterstock
                                </a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}

            {/* <div className="landerFooter">
                <div className="companyAndInformation">
                    <div className="footerSubs">
                        <h4> Information</h4>
                        <p> About Us </p>
                    </div>
                </div>
                <div className="supportAndHelp">
                    <div className="footerSubs">
                        <h4> Support & Help</h4>
                        <p> Help Center </p>
                        <p> How It Works </p>
                        <p> Contact Us </p>
                    </div>
                </div>
                <div className="socials">
                    <div className="footerSubs">
                        <h4> Socials</h4>
                            <p id="linkedIn">
                                <a href="https://www.linkedin.com/in/pramod-magesh-38abb7297/" target="_blank">
                                    Linkedin 
                                </a>
                            </p>
                            <p id="github">
                                <a href="https://github.com/kora07" target="_blank">
                                    Github
                                </a>
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
            </div> */}
        </>
    )
}

export default Landing;
