import React from 'react';
import  { useState } from 'react';
import { useCart } from '../../context/CartContext'; // Adjust the path
import './Cart.css'; // Create this CSS file to style your cart

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p className="total-price">Total: ${calculateTotalPrice()}</p>
          <button className="checkout-button">Checkout</button>
          <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
