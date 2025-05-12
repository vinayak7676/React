import React from 'react';
import './product.css';
import Mobile from './mobile.jpeg';

function Product() {
  return (
    <div className="container">
      <h1>CSS Positioning Task</h1>
      
      <div className="card">
 
        <img src={Mobile} alt="Product" />
        <h3>Iphone</h3>
        <p className="price">$99.99</p>
      </div>

    </div>
  );
}

export default Product;