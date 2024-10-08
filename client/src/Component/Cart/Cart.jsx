import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import Alert from '../Alert/alert';

const Cart = ({ isAuthenticated, onTotalCountChange }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAlert(true); // Show the alert if the user is not authenticated
      setLoading(false);
      return;
    }

    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/cart/take', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCartItems(response.data.cart);
        setLoading(false);
        // Pass the total item count to the parent
        onTotalCountChange(response.data.cart.reduce((count, item) => count + item.quantity, 0));
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchCartItems();

    // Update total item count every 1 second
    const interval = setInterval(() => {
      fetchCartItems();
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [isAuthenticated, onTotalCountChange]);

  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Handle redirection to a specific page after alert is closed
  const handleAlertClose = (pageToNavigate) => {
    navigate(pageToNavigate); // Navigate to the provided page
  };

  if (!isAuthenticated && showAlert) {
    return (
      <Alert 
        message="Please sign in to view your cart items!" 
        navigateTo="/" 
        onClose={handleAlertClose} 
      />
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.productName} className="cart-item-image" />
              <h3 className="cart-item-name">{item.productName}</h3>
              <p className="cart-item-price">Price: {item.price}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <button 
                className="remove-button" 
                onClick={() => handleRemoveItem(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <p className="total-amount">Total: ₹{totalAmount.toFixed(2)}</p>
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
};

export default Cart;
