import React from 'react';
import { electronicsProducts } from './../../Products/Products'; // Adjust the path

const Electronics_page = ({ searchQuery }) => {
  const filteredProducts = electronicsProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <button className="add-to-cart-button">Add to Cart</button>
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
