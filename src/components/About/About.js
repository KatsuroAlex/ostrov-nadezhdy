import './About.css';
import React from "react";
import director from "../../images/christian-buehner-DItYlc26zVI-unsplash.jpg" 
import employee from "../../images/edward-cisneros-_H6wpor9mjs-unsplash.jpg" 
import dogImage from "../../images/i.jpeg" 
import dogImageSecond from "../../images/12.jpeg" 
import mapImage from "../../images/map.png";


function About() {
  return (
    <section className="about">
      {/* <h2 className="about__title">Основатели приюта</h2>
      <div className="about__photo">
        <div className="about__employee-card">
          <img className="about__employee-photo" src={director} alt="Фото сотрудника"></img>
          <p className="about__employee-description">Валерий "Директор"</p>
        </div>
        <div className="about__employee-card">
          <img className="about__employee-photo" src={employee} alt="Фото сотрудника"></img>
          <p className="about__employee-description">Игнатий "Послушник"</p>
        </div>
      </div> */}
      {/* <h2 className="about__subtitle">Главная идея проекта – помочь бездомным животным<br />нашего города, района и изменить отношение людей к<br />животным домашним и бездомным.</h2> */}
      

      <div className="about__first-block">
        {/* <p className="about__first-block-title">Приют «Остров надежды» спасает<br />брошенных и бездомных животных,<br />стерилизует, вакцинирует. </p> */}
        <p className="about__first-block-title">Приют «Остров надежды» спасает брошенных и бездомных животных, стерилизует, вакцинирует. </p>
        <div className="about__image">
          <img className="about__first-block-image image__center" src={dogImage} alt="Фото собаки"></img>
        </div>
      </div>
      <div className="about__first-block about__first-block_reverse">
        {/* <p className="about__first-block-title">Многие вслед за нашим примером<br />решаются не только «пожалеть»<br />и покормить бездомышей, но ищут<br />для них передержки, новые семьи,<br />проводят вакцинирование и<br />стерилизацию.</p> */}
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

      {/* <img className="about__map" alt="Фото карты" src={mapImage}></img> */}
 

      <div className="about__map">
        <img className="about__map-image" alt="Фото карты" src={mapImage}></img>


      </div>
    </section>
  );
};
  
export default About;