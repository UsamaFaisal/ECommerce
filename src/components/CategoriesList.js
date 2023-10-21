import React from 'react';
import ProductList from './ProductList';

const CategoryList = () => {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="category-header">
            <h1>{category}</h1>        
          </div>
          <div className="product-list-horizontal">
            <ProductList />
          </div>
          <a href='#'>View More</a>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
