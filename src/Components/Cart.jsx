import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './Cart.css';

import { CartSlice, removeItem, updateQuantity } from '../CartSlice';
import { calculateTotalQuantity } from '../CartSlice';

const Cart = () => {

    const cart = useSelector(state => state.cart.items);

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach((item) => {
          totalAmount += parseFloat(item.cost) * item.quantity;
        });
        return totalAmount;
      };

    const totalQuantity = useSelector(calculateTotalQuantity);
    
    const dispatch = useDispatch();
    
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
          const updatedItem = {...item, quantity: item.quantity - 1}
          dispatch(updateQuantity(updatedItem))
        } else {
          dispatch(removeItem(item))
        };
      };
    
    const handleIncrement = (item) => {
        const updatedItem = {...item, quantity: item.quantity + 1}
        dispatch(updateQuantity(updatedItem));
      };

    const calculateUnitCost = (item) => {
        const unitCost = parseFloat(item.cost) * item.quantity;
        return unitCost;
      };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
      };

    const navigate = useNavigate();

    const handleCheckoutShopping = () => {
        alert('Functionality is not available yet. Check back soon!');
      };

    return (
        <>
            <div className="cart-container">
                <div className="cart-details">
                  <h1>Shopping Cart</h1>
                  <h4>Total Cart Amount: ${calculateTotalAmount()}</h4>
                  <div>{totalQuantity} Items in your Cart</div>
                </div>
                <div className="cart-items">
                    {cart.map(item => (
                      <div className="cart-item" key={item.name}>
                                <img className="flex-child cart-item-image" src={item.image} alt={item.name} />
                                <div className="flex-child cart-item-name"><h2>{item.name}</h2></div>
                                <div className="flex-child cart-item-details">
                                    <div className="cart-item-cost">Price: ${item.cost}</div>
                                    <div className="cart-item-quantity">
                                        <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>–</button>
                                        <span className="cart-item-quantity-value">{item.quantity}</span>
                                        <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                                    </div>    
                                </div>
                                <div className="flex-child cart-item-details">
                                  <div className="cart-item-total">Total: ${calculateUnitCost(item)}</div>
                                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>Remove</button>
                                </div>
                      </div>
                    ))}
                </div>
                <div className='total_cart_amount'>
                    <h4>Total Cart Amount: ${calculateTotalAmount()}</h4>
                </div>
                <div className="continue_shopping_btn">
                    <button className="primary-button cart-button" onClick={() => {navigate("/")}}>Continue Shopping</button>
                    <button className="primary-button" onClick={handleCheckoutShopping}>Checkout</button>
                </div>
            </div>
        </>
    )
};

export default Cart;