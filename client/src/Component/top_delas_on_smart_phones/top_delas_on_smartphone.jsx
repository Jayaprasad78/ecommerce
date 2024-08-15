import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { top_delas_on_smart_phones } from './../../Products/Products'; // Import your products array
import { useCart } from './../../context/CartContext'; // Adjust the path
import './top_deals_smartphone.css';

const Top_delas_on_smart_phones_page = ({ searchQuery, isAuthenticated }) => {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = top_delas_on_smart_phones .filter(product => {
    const productName = product.name ? product.name.toLowerCase() : '';
    const query = searchQuery ? searchQuery.toLowerCase() : '';
    return productName.includes(query);
  });
  

  const increaseQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1),
    }));
  };

  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      alert('Please sign in first before adding items to the cart.');
      return;
    }

    const quantity = quantities[product.id] || 1;
    const cartItem = {
      productName: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:5000/api/cart/additem', cartItem, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Cart updated:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="top-products-page">
      <div className="top-products-card">
        <h1 className="heading">Top Deals on Smart Phones</h1>
        <div className="top-products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
                <div className="quantity-selector">
                  <button className="quantity-button" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span className="quantity">{quantities[product.id] || 1}</span>
                  <button className="quantity-button" onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top_delas_on_smart_phones_page;
