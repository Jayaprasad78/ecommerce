import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Import useCart
import { electronicsProducts } from './../../Products/Products'; // Import your products array
import './electronics.css';
import Message from '../../Component/addcartmessage/addcartmsg'; // Import the Message component

const Electronics_page = ({ searchQuery, isAuthenticated }) => {
  const [quantities, setQuantities] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const navigate = useNavigate();

  const filteredProducts = electronicsProducts.filter(product => {
    const productName = product.name.toLowerCase();
    const query = searchQuery.toLowerCase();
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
    await addToCart(product, quantity); // Update cart using context
    setShowMessage(true); // Show the success message
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="top-products-page">
      <div className="top-products-card">
        <h1 className="heading">Electronics Items</h1>
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
        {showMessage && <Message />} {/* Display message when showMessage is true */}
      </div>
    </div>
  );
};

export default Electronics_page;
