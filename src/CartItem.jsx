import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { calculateTotalQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += parseFloat(item.cost) * item.quantity;
    });
    return totalAmount;
  };

  const handleContinueShopping = (e) => {
   onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    const updatedItem = {...item, quantity: item.quantity + 1}
    dispatch(updateQuantity(updatedItem));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = {...item, quantity: item.quantity - 1}
      dispatch(updateQuantity(updatedItem))
    } else {
      dispatch(removeItem(item))
    };
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateUnitCost = (item) => {
    const unitCost = parseFloat(item.cost) * item.quantity;
    return unitCost;
  };

  const totalQuantity = useSelector(calculateTotalQuantity);
  

  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      <h4>Total Cart Amount: ${calculateTotalAmount()}</h4>
      <div>{totalQuantity} Items in your Cart</div>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name"><h3>{item.name}</h3></div>
              <div className="cart-item-cost">Price: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>–</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
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
        <button className="primary-button cart-button" onClick={handleContinueShopping}>Continue Shopping</button>
        
        <button className="primary-button" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


