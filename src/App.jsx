//Import React libraries
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//Import other components 
import WelcomePage from './Components/WelcomePage.jsx';
import Layout from './Components/Layout.jsx';
import Collection from './Components/Collection.jsx';
import Cart from './Components/Cart.jsx';


//Import CSS
import './App.css';

function App() {
  
  const Wrapper = ({ children }) => {
    // Scroll to the top of the page when the route changes
    const location = useLocation();
  
    useLayoutEffect(() => {
      
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    //Navigate to Welcome page on reload 
    const navigate = useNavigate();

    useEffect(() => {
      navigate('/welcome');
    }, []);
  
    return children;
  };

  return (
        <Provider store={store}>
            <Router basename="/Sadaveena/">
              <Wrapper>
                <Routes>
                  <Route index path="/welcome" element={<WelcomePage/>}></Route>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Collection />} />
                      {/* <Route path="/exhibition" element={<Login />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/custom" element={<Custome />} /> */}
                      <Route path="/cart" element={<Cart />} />
                  </Route>
                </Routes>
                </Wrapper>
                {/* <Footer /> */}
            </Router>
        </Provider>



  );
}

export default App;



