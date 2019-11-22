import React from 'react';
import './Card.scss';
import image from '../../assets/3.11.58.png';



function Card() {
  return (
    <div className="card">
      <img src={image} className="img" alt=""/>
      <div>
        <h2 className="card__title">Business</h2>
        <h3 className="card__sub-title">Kanye West Lectures At harvard About Creativity</h3>
        <div className="card__like">like</div>
        <div className="card__comment">comment</div>
      </div>
    </div>
  );
}

export default Card;