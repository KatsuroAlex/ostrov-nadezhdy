import React from 'react';
import './Card.css';
import image from '../../images/cat_3.png'


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


  // //---ОБРАБОТЧИКИ---
  // //обработчик клика по карточке
  // function handleClick() {
  //   onCardClick(card);
  // }


    // <article className="element">
    //   <img  className="element__pic" src={link} alt="Фото животного" onClick={handleClick}/>
    //   <div className="element__container">
    //     <h2 className="element__title">{name}</h2>
    //     <p className="element__subtitle">{description}</p>
    //     <button className="element__button" name="Подробнее" type="button" aria-label="Подробнее" onClick={popupOpen}>Подробнее</button>
    //   </div>
    // </article>