import React from 'react';
import './Card.scss';


function Card() {
  return (
    <div className="card">
      <img src="" className="" alt=""/>
      <div>
        <h2 className="card__title"></h2>
        <div className="card__like"></div>
        <div className="card__comment"></div>
      </div>
    </div>
  );
}

export default Card;