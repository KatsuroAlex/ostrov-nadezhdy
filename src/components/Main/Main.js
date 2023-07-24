import './Main.css';
import React from "react";
import image from "../../images/dogs_24 1.png";


function Main() {
  return (
    <section className="main">
      <div className="main__image-container">
        <img className="main__picture" alt="Логотип" src={image} />
        <h1 className="main__header">Остров Надежды<br /> г.Городец</h1>            
        <div className="main__description-list">
          <div className="main__description-block">
            <h2 className="main__description-title">Главная идея проекта</h2>
            <p className="main__description-subtitle">помочь бездомным животным нашего города, района.</p>
          </div>
          <div className="main__description-block">
            <h2 className="main__description-title">Целевая аудитория</h2>
            <p className="main__description-subtitle">Жители Городца и Городецкого района.</p>
          </div>
          <div className="main__description-block">
            <h2 className="main__description-title">Что мы делаем?</h2>
            <p className="main__description-subtitle">Наша команда предоставляет животным кров и медицинскую помощь.</p>
          </div>
          <div className="main__description-block">
            <h2 className="main__description-title">Главная цель</h2>
            <p className="main__description-subtitle">Соединить благотворительность и социальное предпринимательство.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;