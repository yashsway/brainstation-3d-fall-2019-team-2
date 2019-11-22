import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';

import Hero from './components/Hero/Hero'


import FilterBar from './components/FilterBar/FilterBar'

function App() {
  return (
    <>
      <Header />
      <div className="middle">
        <FilterBar />
        <div>
          <Hero />
          <Trending />
        </div>
      </div>
    </>
  );
}

export default App;
