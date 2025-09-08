import React, { useState } from "react";
import { Link } from "react-router-dom";

import './WelcomePage.css'

const WelcomePage = () => {

    return (
        <>
            <div className='welcome-page-intro'>  
                    <div className='page-intro-background'>
                        <img src='./assets/LandingPage+Background.jpg'></img>
                        <div className='page-intro-background-overlay'></div>
                    </div>
                    <div className='page-intro-content-wrapper'>
                        <div className='page-intro-content'>
                            <h1>Handmade<br></br>Fabric Plants</h1>
                            <p>Explore the blend of artistry and sustainability with unique plant sculptures made with recycled fabrics. Our plants are meticulously crafted to decorate and embody a statement of conscious living and artistic appreciation.</p>
                                <Link to="/">
                                <button className="primary-button get-started-button">See Collection</button>
                                </Link>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default WelcomePage;