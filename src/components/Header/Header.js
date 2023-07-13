import './Header.css';
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo_header.svg';



function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" alt="Логотип" src={logo}></img>
        </Link>
      </div>

      <div className="header__container">
        <ul className="header__list-links">
          
          <li className="header__item">
            <Link className="header__list-link" to="/">
              Главная
            </Link>
          </li>

          <li className="header__item">
              <Link className="header__list-link" to="/dogs">
                Собаки
              </Link>
          </li>

          <li className="header__item">
            <Link className="header__list-link" to="/cats">
              Кошки
            </Link>
          </li>

          <li className="header__item">
            <Link className="header__list-link" to="/volunteers">
              Волонтерство
            </Link>
          </li>

          <li className="header__item">
            <Link className="header__list-link" to="/help">
              Как помочь
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};
  
export default Header;