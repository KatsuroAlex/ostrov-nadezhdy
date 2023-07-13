import './Logo.css';
import React from "react";
// import image from "../../images/page_dogs.png" 


function Logo({image}) {
  return (
    <section className="logo">
      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={image}></img>
      </div>
    </section>
  );
};
  
export default Logo;