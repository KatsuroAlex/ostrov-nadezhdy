import './About.css';
import React from "react";
import dogImage from "../../images/i.jpeg" 
import dogImageSecond from "../../images/12.jpeg" 
import mapImage from "../../images/map.png";


function About() {
  return (
    <section className="about">
      <div className="about__first-block">
        <p className="about__first-block-title">Приют «Остров надежды» спасает брошенных и бездомных животных, стерилизует, вакцинирует. </p>
        <div className="about__image">
          <img className="about__first-block-image image__center" src={dogImage} alt="Фото собаки"></img>
        </div>
      </div>
      <div className="about__first-block about__first-block_reverse">
        <p className="about__first-block-title">Многие вслед за нашим примером решаются не только «пожалеть» и покормить бездомышей, но ищут для них передержки, новые семьи, проводят вакцинирование и стерилизацию.</p>
        <div className="about__image about__image-centrate">
          <img className="about__first-block-image" src={dogImageSecond} alt="Фото собаки"></img>
        </div>
      </div>

      <div className="about__targets">
        <h2 className="about__targets-title">О чем мы мечтаем?</h2>
        <p className="about__targets-description">Мечтаем открыть благотворительный магазин "Плати сколько хочешь", гостиницу для домашних питомцев, вегетарианское кафе с видом на прозрачное озеро (сейчас наше озеро похоже на болото!) Вся работа, связанная с развитием приюта, его достижения в итоге должны убедить общество, что приюты для животных должны стать обязательными объектами инфраструктуры наших городов, как детские сады, школы, больницы, магазины, ФОКи.</p>
      </div>

      <div className="about__find">
        <h2 className="about__find-title">Как нас найти?</h2>
        <p className="about__find-description">Нас легко найти. При выезде из Городца по ул. Новой,не доезжая до "Лукойла", поворот налево - между зданием криминальной полиции и базой строительных материалов.Через 300-500 м очень плохой дороги Вы увидите наш "ОСТРОВ НАДЕЖДЫ",за вторым домом #119-наш зелёный забор!</p>
      </div> 

      <div className="about__map">
        <img className="about__map-image" alt="Фото карты" src={mapImage}></img>
      </div>
    </section>
  );
};
  
export default About;