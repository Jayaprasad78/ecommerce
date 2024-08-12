import React from 'react';
import { beautyProducts } from '../../Products/Products'; // Adjust the path

const Beauty_page = ({ searchQuery }) => {
  const filteredProducts = beautyProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="top-products-container">
      <h1 className="heading">Beauty Products</h1>
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

export default Beauty_page;
