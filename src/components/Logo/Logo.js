import './Logo.css';
import React from 'react';


function Logo({image, isDropdownVisible, toggleDropdown}) {



  return (
    <section className="logo">

      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={image}></img>
        <h2 className="logo__header">Остров Надежды<br /> г.Городец</h2> 
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
      </div>
    </section>
  );
};
  
export default Logo;

