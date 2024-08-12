import React from 'react';
import './electronics.css'; // Ensure this CSS file includes your styles

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'https://img.etimg.com/photo/msid-99080556,imgsize-32858/VivoY56BlackEngine.jpg',
  },
  {
    id: 2,
    name: 'HP Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Ho...',
    price: '$49.99',
    image: 'https://www.google.com/imgres?q=laptop%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61%2Br3%2BJstZL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FFlagship-HP-Micro-Edge-Quad-Core-i5-1035G1%2Fdp%2FB081P3QVWC&docid=dWFZ3Dt8B78RfM&tbnid=DpDKJe9wuvOQNM&vet=12ahUKEwjb56SUoe-HAxW6zTgGHYrtF8MQM3oECBYQAA..i&w=1000&h=665&hcb=2&ved=2ahUKEwjb56SUoe-HAxW6zTgGHYrtF8MQM3oECBYQAA'
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

const Electronics_page = () => {
  return (
    <div className="top-products-container">
      <h1 className="heading">Electronics Products</h1>
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

export default Electronics_page;

