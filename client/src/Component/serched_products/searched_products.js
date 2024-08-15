import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchedProductsPage.css'; // Create and style this CSS file as needed

const SearchedProductsPage = ({ searchQuery, products, isAuthenticated }) => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  // Redirect to home page if searchQuery is empty
  useEffect(() => {
    if (searchQuery.trim() === '') {
        navigate('/'); // Redirect to the home page if the search query is empty
      } else {
        navigate('/searched-products'); // Redirect to the searched products page
      }
    if (!searchQuery) {
      navigate('/'); // Redirect to home page
    }
  }, [searchQuery, navigate]);

  // Filter products based on searchQuery
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle quantity change for products
  const handleQuantityChange = (productId, amount) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) + amount)
    }));
  };

  // Handle adding product to cart
  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      alert("Please sign in before adding items to the cart.");
      navigate('/signin'); // Redirect to sign-in page if not authenticated
      return; // Exit the function if not authenticated
    }

    const quantity = quantities[product.id] || 1;
    const cartItem = {
      productName: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };

    console.log("Cart Item:", cartItem); // Log the cart item details
    const token = localStorage.getItem('token');
    console.log("JWT Token:", token); // Log the retrieved JWT token

    if (!token) {
      alert("Please sign in before adding items to the cart.");
      navigate('/signin');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/cart/additem', cartItem, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the JWT token
        }
      });

      console.log('Cart updated:', response.data); // Log the successful response from the server
      // Optionally, update the context or state if needed
      // addToCart(product, quantity); // If needed to reflect in the UI immediately
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="searched-products-page">
      <h1>Search Results</h1>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(product.id, -1)} disabled={(quantities[product.id] || 0) <= 1}>-</button>
                <span className="quantity">{quantities[product.id] || 1}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchedProductsPage;
