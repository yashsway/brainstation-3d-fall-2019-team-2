import React from 'react';
import './App.scss';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Running Title</title>
      </Helmet>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
