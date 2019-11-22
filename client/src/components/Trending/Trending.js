import React from 'react';
import './Trending.scss';
import Card from '../Card/Card';

class Trending extends React.Component {

  render() { 
    return (
      <div className="trending">
        <h1>Trending This Week</h1>
        <Card />
      </div>
    );
  }
}

export default Trending;