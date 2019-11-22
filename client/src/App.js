import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'


import FilterBar from './components/FilterBar/FilterBar'

function App() {
  return (
    <>
      <Header />
      <div className="middle">
        <FilterBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
