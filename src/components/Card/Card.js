import React from 'react';
import './Card.css';


function Card({link, name, description, post}) {

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
          {/* <a href="#">Ссылка на Пост в ВК{post}</a> */}
          <a href={post} target="_blank" rel="noopener noreferrer">Ссылка на пост в ВК</a>
        </div>
      </div>
    </div>
    
  )
}
    
export default Card;
