import React, { useState } from "react";
import { Link } from "react-router-dom";

import './WelcomePage.css'

const WelcomePage = () => {

//   const [showProductList, setShowProductList] = useState(true);

//   const handleGetStartedClick = () => {
//     setShowProductList(true);
//   };

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


            {/* <div className="app-container">
      
              <div className="landing-page">
                <div className="page-intro-background">
                  <img src='./assets/LandingPage+Background.jpg'></img>
                  <div className='page-intro-background-overlay'></div>
                </div>
                
                <div className="landing_content-wrapper">
                  <div className="landing_content">
                  <h1>Handmade Fabric Plants</h1>
                  <div className="divider"></div>
                  <p>Explore the blend of artistry and sustainability with unique plant sculptures made with recycled fabrics. Our plants are meticulously crafted to decorate and embody a statement of conscious living and artistic appreciation.</p>
          
                  <button className="get-started-button" onClick={handleGetStartedClick}>
                    Get Started
                  </button>
            
                  </div> */}
                  {/* <div className="aboutus_container">
                    <AboutUs/>
                  </div> */}
                {/* </div>
              </div>
      
              <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
                <ProductList />
              </div>
            </div> */}
        </>
    );
}

export default WelcomePage;