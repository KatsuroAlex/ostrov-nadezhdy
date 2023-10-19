import './Main.css';
import React from "react";
import image from "../../images/dogs_24 1-2.png";
// import headerImage from "../../images/main_header.png";
import headerImage from "../../images/Logo_header-title.png";



function Main() {
  return (
    <section className="main">
      <div className="main__image-container">
        <img className="main__picture" alt="Логотип" src={image} />
        <div className="main__header">
          <img className="main__header-image" src={headerImage} alt="логотип"></img>
        </div>
      </div>
      <div className="main__underphoto block_height">          
          <div className="main__description-list">
            <div className="main__description-block">
              <h2 className="main__description-title">Главная идея</h2>
              <p className="main__description-subtitle">Помочь бездомным животным нашего города, района.</p>
            </div>
            <div className="main__description-block">
              <h2 className="main__description-title">Целевая аудитория</h2>
              <p className="main__description-subtitle">Жители Городца, Городецкого района и всей Нижегородской области.</p>
            </div>
            <div className="main__description-block">
              <h2 className="main__description-title">Что мы делаем?</h2>
              <p className="main__description-subtitle auto_margin">Ищем животным новые семьи.</p>
            </div>
            {/* <div className="main__description-block">
              <h2 className="main__description-title">Главная цель</h2>
              <p className="main__description-subtitle">Соединить благотворительность и социальное предпринимательство.</p>
            </div> */}
          </div>
        </div>
    </section>
  );
};

export default Main;
