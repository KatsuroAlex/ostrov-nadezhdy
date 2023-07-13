import React from 'react';
import './Card.css';
// import image from '../../images/cat_3.png'


//--- Компонент карточки с фото ---
function Card({link, name, card, onCardClick, description, popupOpen}) {

  //---ОБРАБОТЧИКИ---
  //обработчик клика по карточке
  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <article className="element">
      <img  className="element__pic" src={link} alt="Фото животного" onClick={handleClick}/>
      <div className="element__container">
        <h2 className="element__title">{name}</h2>
        <p className="element__subtitle">{description}</p>
        <button className="element__button" name="Подробнее" type="button" aria-label="Подробнее" onClick={popupOpen}>Подробнее</button>
      </div>
    </article>
  )
}
    
export default Card;