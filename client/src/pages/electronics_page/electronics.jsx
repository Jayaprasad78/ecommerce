import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { electronicsProducts } from './../../Products/Products'; // Adjust the path
import { useCart } from './../../context/CartContext'; // Adjust the path
import './electronics.css';

const Electronics_page = ({ searchQuery, isAuthenticated }) => {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart(); // Destructure addToCart from context
  const navigate = useNavigate();

  const filteredProducts = electronicsProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      alert("Please sign in before adding items to the cart.");
      navigate('/signin'); // Redirect to sign-in page if not authenticated
    } else {
      const quantity = quantities[product.id] || 1;
      const cartItem = {
        productName: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      };


      console.log("hi",cartItem)
      const token = localStorage.getItem('token');
      console.log("hi this is token",token)


      try {
        const response = await axios.post('http://localhost:5000/api/cart/add', cartItem, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include the JWT token
          }
        });


        console.log('Cart updated:', response.data);
        // Optionally, update the context or state if needed
        // addToCart(product, quantity); // If needed to reflect in the UI immediately
      } catch (error) {
        console.error('Error adding to cart:', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <div className="top-products-container">
      <h1 className="heading">Electronics Products</h1>
      <div className="top-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <div className="quantity-selector">
                <button className="quantity-button" onClick={() => decreaseQuantity(product.id)}>-</button>
                <span className="quantity">{quantities[product.id] || 1}</span>
                <button className="quantity-button" onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              {console.log(product)}
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Electronics_page;
