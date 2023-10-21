import React from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoriesList';

import '../App.css';

function Home() {
  return (
    <div className='App'>
      <Header />      
      <main>
        <CategoryList />
      </main>
    </div>
  );
}

export default Home;
