import React from "react";
import { Outlet, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { calculateTotalQuantity } from '../CartSlice';



const Layout = () => {
  const totalQuantity = useSelector(calculateTotalQuantity);
  
  return (
    <>
      <nav className="navbar" id="navbar">
            <div>
                <Link to="/">
                  <img className='navbar-logo' src='./assets/Sadaveena+Logo+White.png'></img>
                </Link>
              </div>
              <div className="navbar-links">
                <Link to="/">Collection</Link>
              </div>

            <div className='cart'> 
              <Link to="/cart"
              // onClick={(e) => handleCartClick(e)} use later for the cart to pop up on the side
              >
                
                  <span className="material-symbols-outlined">shopping_bag
                  </span>
                  <h4 className='cart-number'>
                    {totalQuantity > 0 ? (
                        <>{totalQuantity}</>
                    ) : (
                      <>
                      </>
                    )}
                  </h4>
              </Link>
            </div>

      </nav>
      <main>
        <Outlet />
      </main>                  
      <div className='footer'>
                        <a href="/">
                            <img className='navbar-logo' src='./assets/Sadaveena+Logo+White.png'></img>
                        </a>
                    <div className='footer-links'>
                        <a href="/">
                            Delivery and Return Policy
                        </a>
                        <a href="/">
                            Terms and Conditions
                        </a>
                        <a href="/">
                            Contact us at SadaveenaPlants@gmail.com
                        </a> 
                    </div>
                       
      </div>
    </>
  )
};

export default Layout;