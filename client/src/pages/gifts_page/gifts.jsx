import React from 'react';
import './gifts.css'; // Ensure this CSS file includes your styles

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$49.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$49.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$49.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$49.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  // Add more products as needed
];

const Gifts_page = () => {
  return (
    <div className="top-products-container">
      <h1 className="heading">Gifts</h1>
      <div className="top-products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gifts_page;

