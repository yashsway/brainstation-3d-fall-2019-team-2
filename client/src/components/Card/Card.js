import React from 'react';
import './Card.scss';
import image from '../../assets/3.11.58.png';
import likes from '../../assets/Icon-likes.svg';
import comment from '../../assets/comment.png';



function Card() {
  return (
    <div className="card">
      <img src={image} className="img" alt=""/>
      <div>
        <h2 className="card__title">Business</h2>
        <h3 className="card__sub-title">Kanye West Lectures At harvard About Creativity</h3>
        <div className="card__like"><img src={likes} alt=""/> 800</div>
        <div className="card__comment"><img className="card-img" src={comment} alt=""/> 545</div>
      </div>
    </div>
  );
}

export default Card;