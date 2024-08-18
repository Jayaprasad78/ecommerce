import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/cart/take', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data.cart);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();

    // Refresh cart items every 0.5 seconds
    const interval = setInterval(() => {
      fetchCartItems();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Calculate total item count in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const value = { cart,  cartItemCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
