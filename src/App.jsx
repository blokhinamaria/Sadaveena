
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';


function App() {
  
  const [showProductList, setShowProductList] = useState(true);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };


  return (
    <div className="app-container">
      
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
            
          </div>
            {/* <div className="aboutus_container">
            <AboutUs/>
            </div> */}
            </div>

      </div>
      
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



