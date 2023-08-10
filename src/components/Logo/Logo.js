import './Logo.css';
// import React from "react";
import React, { useState } from 'react';
// import image from "../../images/page_dogs.png" 


function Logo({image, isDropdownVisible, toggleDropdown}) {



  return (
    <section className="logo">

      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={image}></img>
        <h2 className="logo__header">Остров Надежды<br /> г.Городец</h2> 
        {/* <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
              Найдите себе нового друга!
          </button>
            {isDropdownVisible && (
              <div className="dropdown-content">
                <a href="#">Пункт 1</a>
                <a href="#">Пункт 2</a>
                <a href="#">Пункт 3</a>
              </div>
            )}
        </div> */}
        {/* <div className="main__underphoto">       */}
          <div className="logo__description-list">
            <div className="logo__description-block">
              <h2 className="logo__description-title">Почему стоит взять питомца из приюта?</h2>
              <p className="logo__description-subtitle">Забрав питомца из приюта Вы не только спасаете его жизнь, но также приносите невероятную радость и счастье в свою будущую жизнь. Питомец становится источником бесконечной преданности и непреодолимой любви.</p>
            </div>
            <div className="logo__description-block">
              <h2 className="logo__description-title">Как это работает?</h2>
              <p className="logo__description-subtitle">Вы выбираете питомца на сайте, потом связываетесь с нами любым способом, указанным в контактах и мы договариваемся о встрече, чтобы Вы смогли познакомиться с собакой/кошкой</p>
            </div>
          </div>
        {/* </div>             */}
      </div>
    </section>
  );
};
  
export default Logo;

