import './Volunteers.css';
import React from "react";
import dogImage1 from '../../images/kenan-kitchen-LRu2JPt1yD0-unsplash-2.jpg';
import dogImage2 from '../../images/LcDFln1j-aI.jpg';

import dogImage3 from '../../images/kdbE9cfAFzA.jpg';
import dogImage4 from '../../images/Eda4j_Q2X9M.jpg';
import dogImage5 from '../../images/R1el9GtltHk-2-2.jpg';
import imageVolunteers from '../../images/volunteers_kittys 1.png'
// import headerImage from '../../images/main_header.png';
import headerImage from '../../images/Logo_header-title.png';




function Volunteers() {
  return (
    <section className="volunteers" >
      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={imageVolunteers}></img>
        <div className="logo__header">
          <img className="main__header-image" src={headerImage} alt="логотип"></img>
        </div>
        <p className="logo__title">Все о волонтерстве</p> 
      </div>

      <h2 className="volunteers__title-main">В нашем приюте около 150 собак и 50 кошек, поэтому нам нужны волонтеры!</h2>
      <div className="volunteers__container">
        <div className="volunteers__picture volunteers__picture--first">
          <img alt="Фото собаки" src={dogImage1} />
        </div>
        <div className="volunteers__picture volunteers__picture--second">
          <img alt="Фото собаки" src={dogImage2} />
        </div>
      </div>
      <p className="volunteers__title">
        Волонтеры - это люди, готовые на постоянной основе
        приходить в приют хотя бы раз в неделю, и оказывать
        посильную помощь животным: социализировать,
        выгуливать, следить за их состоянием, пытаться
        найти им постоянный дом и хозяев, готовить им еду или помогать
        с уборкой внутри приюта.
      </p>
      <div className="volunteers__container-second">
        <div className="volunteers__image volunteers__image--first">
          <img alt="Фото собаки" src={dogImage3} />
        </div>
        <div className="volunteers__image volunteers__image--second">
          <img alt="Фото собаки" src={dogImage4} />
        </div>
        <div className="volunteers__image volunteers__image--third">
          <img alt="Фото собаки" src={dogImage5} />
        </div>
      </div>
      <p className="volunteers__title">
        Также нам нужны люди, готовые взять животное на 
        “Патронаж” - а именно взять опеку над конкретной 
        собакой или кошкой, оказывая ей всяческую поддержку,
        такую как поиск хозяев, денежная или медицинская
        помощь, прогулки.
      </p>
    </section>
  );
};
  
export default Volunteers;