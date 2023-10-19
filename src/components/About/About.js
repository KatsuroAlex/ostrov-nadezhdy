import './About.css';
import React from "react";
import dogImage from "../../images/i.jpeg" 
import dogImageSecond from "../../images/12.jpeg" 
import mapImage from "../../images/How_to_find.png";


function About() {
  return (
    <section className="about">
      {/* <div className="about__targets">
        <h2 className="about__targets-title">Дорогие друзья!</h2>
        <p className="about__targets-description">Вы находитесь на сайте приюта для бездомных животных "Остров Надежды" (г.Городец Нижегородской области). Приют начал работу 27 аперля 2016 года. Содержится благодаря великодушной поддержке людей. За годы работы мы существенно расширились, но и количество подопечных постоянно растет. Сейчас в приюте проживает более 200 собак и кошек, и каждый из питомцев ждет своей доли ласки и внимания от человека.</p>
      </div> */}

      {/* <div className="about__find">
        <h2 className="about__find-title">Дорогие друзья!</h2>
        <p className="about__find-description">Вы находитесь на сайте приюта для бездомных животных "Остров Надежды" (г.Городец Нижегородской области). Приют начал работу 27 аперля 2016 года. Содержится благодаря великодушной поддержке людей. За годы работы мы существенно расширились, но и количество подопечных постоянно растет - cейчас в приюте проживает более 200 собак и кошек.</p>
      </div>  */}

      <div className="about__find">
        <h2 className="about__find-title">Дорогие друзья!</h2>
        <p className="about__find-description">Вы находитесь на сайте приюта для бездомных животных 
        "Остров Надежды" (г.Городец Нижегородской области).</p>
      </div> 








      <div className="about__first-block">
        {/* <p className="about__first-block-title">Приют «Остров надежды» спасает брошенных и бездомных животных, стерилизует, вакцинирует. </p> */}
        <p className="about__first-block-title">Наш приют работает с 27 апреля 2016 года и существует уже почти 8 лет, 
        насчитывает более 200 подопечных.</p>

        <div className="about__image animated-from-right">
          <img className="about__first-block-image image__center" src={dogImage} alt="Фото собаки"></img>
        </div>
      </div>
      <div className="about__first-block about__first-block_reverse">
        {/* <p className="about__first-block-title">Многие вслед за нашим примером решаются не только «пожалеть» и покормить бездомышей, но ищут для них передержки, новые семьи, проводят вакцинирование и стерилизацию.</p> */}
        <p className="about__first-block-title">Приют содержится благодаря великодушной поддержке людей.</p>

        <div className="about__image about__image-centrate animated-from-left">
          <img className="about__first-block-image" src={dogImageSecond} alt="Фото собаки"></img>
        </div>
      </div>

      <div className="about__targets">
        <h2 className="about__targets-title">О чем мы мечтаем?</h2>
        {/* <p className="about__targets-description">Мечтаем открыть благотворительный магазин "Плати сколько хочешь", гостиницу для домашних питомцев, вегетарианское кафе с видом на прозрачное озеро (сейчас наше озеро похоже на болото!) Вся работа, связанная с развитием приюта, его достижения в итоге должны убедить общество, что приюты для животных должны стать обязательными объектами инфраструктуры наших городов, как детские сады, школы, больницы, магазины, ФОКи.</p> */}
        <p className="about__targets-description">Чтобы приюты для животных стали обязательными объектами инфраструктуры наших городов, 
        такими как детские сады, школы, больницы, ФОКи. Чтобы все люди ответственно относились к домашним питомцам. Хотим, чтобы мир 
        стал хоть немного добрее!</p>

      </div>

      <div className="about__find">
        <h2 className="about__find-title">Как нас найти?</h2>
        <p className="about__find-description">Нас легко найти. При выезде из Городца по ул. Новой,не доезжая до "Лукойла", поворот налево - между зданием криминальной полиции и базой строительных материалов.Через 300-500 м очень плохой дороги Вы увидите наш "ОСТРОВ НАДЕЖДЫ",за вторым домом #119-наш зелёный забор! Вот схема проезда:</p>
      </div> 

      <div className="about__map">
        <img className="about__map-image" alt="Фото карты" src={mapImage}></img>
      </div>
    </section>
  );
};
  
export default About;