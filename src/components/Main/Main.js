import './Main.css';
import React from "react";
import image from "../../images/page_main_1.png" 


function Main() {
  return (
    <section className="main">
      <div className="main__logo-container">
        <h1 className="main__header">Остров Надежды<br />г.Городец</h1>
        <img className="main__picture" alt="Логотип" src={image}></img>
      </div>
        <p className="main__text">Хочешь изменить мир - начни с себя!</p>
    </section>
  );
};
  
export default Main;