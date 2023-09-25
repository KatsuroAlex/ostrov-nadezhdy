import './Footer.css';
import React from "react";
import LogoOdnokl from '../../images/odnoglazniki_icon.png';
import LogoVk from '../../images/vk_icon.png';
import LogoPhone from '../../images/telephone_icon.png';
import LogoMail from '../../images/email_icon.png';
import LogoFooter from '../../images/Logo_footer.jpg';



function Header() {
  return (
    <footer className="footer">

      <h2 className="footer__title">Приют для бездомных животных - бессрочный проект, без права на усталость.</h2>
      <div className="footer__container">
        
        <img className="footer__logo" alt="Логотип" src={LogoFooter}></img>

        <div className="footer__contacts">
          <h2 className="footer__contacts-title">Как с нами связаться</h2>    
          <div className="footer__contacts-block">
            <img className="footer__contacts-icon" alt="Логотип телефон" src={LogoPhone}></img>
            <p className="footer__contacts-phone">+7 903 606-63-07</p>
          </div>
          <div className="footer__contacts-block">
            <img className="footer__contacts-icon" alt="Логотип почта" src={LogoMail}></img>
            <p className="footer__contacts-mail">kokuninalena@gmail.ru</p>
          </div>
        </div>

        <div className="footer__social">
          <h2 className="footer__social-title">Наши соцсети:</h2>
          <ul className="footer__social-icons">
            <li className="footer__icons-item">
              <a
                className="footer__social-icon"
                href="https://vk.com/ostrovnadezhdj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="footer__social-icon" alt="Логотип VK" src={LogoVk}></img>
              </a>
            </li>
            <li className="footer__icons-item">
              <a
                className="footer__social-icon"
                href="https://ok.ru/group/54488147492980"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="footer__social-icon" alt="Логотип Одноклассники" src={LogoOdnokl}></img>

              </a>
            </li>
            {/* <li className="footer__icons-item">
              <a
                className="footer__social-icon"
                href="https://www.facebook.com/groups/1127108644041954/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="footer__social-icon" alt="Логотип Facebook" src={LogoFb}></img>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>

  );
};
  
export default Header;


