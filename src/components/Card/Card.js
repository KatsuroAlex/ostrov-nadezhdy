import React from 'react';
import './Card.css';


function Card({link, name, description}) {
  return (
    <div className="card">
      <div className="face front">
        <img className="card__pic" src={link} alt="Фото" />
        <h3>{name}</h3>
      </div>
      <div className="face back">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="link">
          <a href="#">Details</a>
        </div>
      </div>
    </div>
    
  )
}
    
export default Card;
