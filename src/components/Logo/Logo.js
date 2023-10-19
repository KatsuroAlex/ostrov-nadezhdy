import './Logo.css';
import React from 'react';
// import headerImage from '../../images/main_header.png';
import headerImage from '../../images/Logo_header-title.png';


function Logo({image}) {



  return (
    <section className="logo">

      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={image}></img>
        <div className="logo__header">
          <img className="main__header-image" src={headerImage} alt="логотип"></img>
        </div>
        <div className="main__underphoto">          
          <div className="main__description-list">
            <div className="main__description-block dog-section-size">
              <h2 className="main__description-title">Почему стоит взять питомца из приюта?</h2>
              <p className="main__description-subtitle">Забрав питомца из приюта Вы не только спасаете 
              его жизнь, но также приносите невероятную радость и счастье в свою будущую жизнь. 
              Питомец становится источником бесконечной преданности и любви.</p>
            </div>
            <div className="main__description-block dog-section-size">
              <h2 className="main__description-title">Как можно познакомиться с питомцем?</h2>
              <p className="main__description-subtitle">Вы выбираете питомца на сайте, 
              потом связываетесь с нами любым способом, указанным в контактах и мы договариваемся 
              о встрече, чтобы Вы смогли познакомиться с собакой/кошкой.</p>
            </div>
          </div>
        </div>
        {/* <h2 className="logo__title-main">Чтобы познакомиться с нашими подопечными наведите на карточку мышкой!</h2> */}
      </div>
    </section>
  );
};
  
export default Logo;

