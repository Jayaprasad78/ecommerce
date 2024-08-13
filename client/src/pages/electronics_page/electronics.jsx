import React, { useState } from 'react';
import { electronicsProducts } from './../../Products/Products'; // Adjust the path
import { useCart } from './../../context/CartContext'; // Adjust the path
import './electronics.css';

const Electronics_page = ({ searchQuery }) => {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart(); // Destructure addToCart from context

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

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
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
              <p className="product-price">{product.price}</p>
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
  );
};

export default Electronics_page;
