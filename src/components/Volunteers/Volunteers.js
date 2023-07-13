import './Volunteers.css';
import React from "react";
import dogImage1 from '../../images/kenan-kitchen-LRu2JPt1yD0-unsplash.jpg';
import dogImage2 from '../../images/LcDFln1j-aI.jpg';

import dogImage3 from '../../images/kdbE9cfAFzA.jpg';
import dogImage4 from '../../images/Eda4j_Q2X9M.jpg';
import dogImage5 from '../../images//R1el9GtltHk.jpg';




function Volunteers() {
  return (
    <section className="volunteers" >
      <h2 className="volunteers__title-main">Нам нужны волонтеры! Важен каждый человек!</h2>
      <div className="volunteers__container">
        <img className="volunteers__picture" alt="Фото собаки" src={dogImage1}></img>
        <img className="volunteers__picture" alt="Фото собаки" src={dogImage2}></img>
      </div>
      <p className="volunteers__title">
        Волонтеры - это люди, готовые на постоянной основе
        приходить в приют хотя бы раз в неделю, и оказывать
        посильную помощь животным: социализировать,
        выгуливать, следить за их состоянием, пытаться
        найти им постоянный дом и хозяев или помогать
        с уборкой внутри приюта.
      </p>
      <div className="volunteers__container-second">
        <img className="volunteers__image" alt="Фото собаки" src={dogImage3}></img>
        <img className="volunteers__image" alt="Фото собаки" src={dogImage4}></img>
        <img className="volunteers__image" alt="Фото собаки" src={dogImage5}></img>
      </div>
      <p className="volunteers__title">
        Также нам нужны люди, готовые взять животное на 
        “Патронаж” - а именно взять опеку над конкретной 
        собакой/кошкой, оказывая ей всяческую поддержку,
        такую как поиск хозяев, денежная или медицинская
        помощь.
      </p>
    </section>
  );
};
  
export default Volunteers;