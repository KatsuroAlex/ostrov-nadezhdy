import './Help.css';
import React from "react";
import imageHelp from '../../images/dogs222 1.png'
import headerImage from '../../images/main_header.png';





function Help() {
  return (
    <section className="help" >
      <div className="logo__logo-container">
        <img className="logo__picture" alt="Логотип" src={imageHelp}></img>
        <div className="logo__header logo_help">
          <img className="main__header-image " src={headerImage} alt="логотип"></img>
        </div>
      </div>
      <h2 className="help__title-main">Как вы можете нам помочь?</h2>
      <p className="help__title">
        Благотворительный счёт приюта<br />
        Сбербанк: 4817 7602 0635 7471,<br />
        срок действия карты до 04.24 г.<br />
        Карта привязана к номеру +79036066307 - оператор Билайн "УКАЗАТЬ ФИО<br />
        ВЛАДЕЛЬЦА КАРТЫ"<br />
        Убедительная просьба! Перед совершением оплаты, пожалуйста, сверьте<br />
        платежные реквизиты с информацией, приведенной в официальной группе приюта Вконтакте!!!<br />
      </p>
      <p className="help__title">
        АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ПРИЮТ ДЛЯ<br /> 
        ЖИВОТНЫХ ОСТРОВ НАДЕЖДЫ<br />
        ИНН организации: 5248044370<br />
        Номер счёта: 40703810342000004100<br />
        Дата открытия счёта: 19.01.2022<br />
        Наименование банка: Волго-Вятский Банк ПАО Сбербанк<br />
        Корреспондентский счёт: 30101810900000000603<br />
        БИК: 042202603<br />
        Пакет услуг: Лёгкий старт<br />
      </p>
      <p className="help__title">
        При переводе средств просим обязательно указать "Пожертвование для приюта" 
        - пожертвования, по закону, не облагаются налогом 
      </p>
      <p className="help__title">
        Наши спонсоры:
        "Комиссионка в Городце" http://m.vk.com/113773434 
      </p>
      <p className="help__title">
        Сборы помощи для приюта, не подтверждённые на стене группы Вконтакте, к 
        приюту "Остров надежды" отношения не имеют.
      </p>
      <p className="help__title">
        Помочь с оплатой медикаментов, товаров для питомцев,стройматериалов можно
        через копилки,установленные по адресам:
      </p>
      <ol className="help__list">
          <li className="help__list-item">ветеринарная аптека “ZooDoc” &#40;ул.Фигнер, 8&#41;;</li> 
          <li className="help__list-item">база стройматериалов "ПИРАМИДА"&#40;перед поворотом к приюту&#41;;</li> 
          <li className="help__list-item">магазин "НОВОСЁЛ " &#40;Н.СЛОБОДА, УЛ.КОМИНТЕРНА&#41;;</li> 
          <li className="help__list-item">магазин "Электрик" &#40;пер.Лазо,6&#41;;</li> 
          <li className="help__list-item">магазины ИП СИЛАК;</li> 
          <li className="help__list-item">ООО Дружаева А. В. аптека "Виталина" &#40;ул. Кирова, рядом с "Евроспар"&#41;.</li> 
      </ol>
      <h3 className="help__title-bottom">Мы бесконечно признательны за любую поддержку!</h3>

      
    </section>
  );
};
  
export default Help;