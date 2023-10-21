import React from 'react';

const ProductList = () => {
  // Dummy product data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 19.99 },
    { id: 5, name: 'Product 5', price: 29.99 },
    { id: 6, name: 'Product 6', price: 39.99 },
  ];

  return (
    <div className="product-list-horizontal">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
