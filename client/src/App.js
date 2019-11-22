import React from 'react';
import './App.scss';

import { Helmet } from 'react-helmet';

import FilterBar from '../src/FilterBar/FilterBar'

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>NEW GRADS AND ONLINE NEWS</title>
      </Helmet>
      <header className="App-header">
        <h1>NEW GRADS AND ONLINE NEWS</h1>
      </header>
      <FilterBar />
    </div>
  );
}

export default App;
