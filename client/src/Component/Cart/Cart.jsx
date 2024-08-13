import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Use the default export
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import your CSS file

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!token) {
        // If not authenticated, redirect to sign-in page
        navigate('/signin');
        return;
      }

      try {
        // Decode the token to get user email
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.email;

        console.log("Token:", token);
        console.log("Decoded Token:", decodedToken);
        console.log("Email:", userEmail);

        // Fetch cart items for the authenticated user
        const response = await axios.get('http://localhost:5000/api/cart/take', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log("Cart Items from Response:", response.data.items);

        // Set cart items from the response
        setCartItems(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [token, navigate]);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.productName} className="cart-item-image" />
                <h3 className="cart-item-name">{item.productName}</h3>
                <p className="cart-item-price">Price: ${item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p className="cart-total-amount">Total: ${totalAmount.toFixed(2)}</p>
            <button className="cart-checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
