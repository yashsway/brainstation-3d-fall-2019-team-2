import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';



import FilterBar from './components/FilterBar/FilterBar'

function App() {
  return (
    <>
      <Header />
      <FilterBar />
    </>
  );
}

export default App;
