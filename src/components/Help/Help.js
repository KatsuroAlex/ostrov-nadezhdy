import './Help.css';
import React from "react";
import imageHelp from '../../images/dogs222 1-2.png'
// import headerImage from '../../images/main_header.png';
import headerImage from '../../images/Logo_header-title.png';


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
      {/* <p className="help__title">
        Благотворительный счёт приюта<br />
        Сбербанк: 4817 7602 0635 7471,<br />
        срок действия карты до 04.24 г.<br />
        Карта привязана к номеру +79036066307 (Елена Владимировна К.)<br /> */}
        {/* Убедительная просьба! Перед совершением оплаты, пожалуйста, сверьте<br />
        платежные реквизиты с информацией, приведенной в официальной группе приюта Вконтакте!!!<br /> */}
      {/* </p> */}
      <p className="help__title">
        1. Перевод на банковскую карту:
      </p>
      <ol className="help__list">
          <li className="help__list-item">Благотворительный счёт приюта</li> 
          <li className="help__list-item">Сбербанк: 4817 7602 0635 7471,</li> 
          <li className="help__list-item">срок действия карты до 04.24 г.;</li> 
          <li className="help__list-item">Карта привязана к номеру +79036066307 &#40;Елена Владимировна К.&#41;;</li> 
      </ol>

      <p className="help__title">
        2. Перечисление на расчетный счет:
      </p>
      <ol className="help__list">
          <li className="help__list-item">АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ПРИЮТ ДЛЯ</li> 
          <li className="help__list-item">ЖИВОТНЫХ ОСТРОВ НАДЕЖДЫ</li> 
          <li className="help__list-item">ИНН организации: 5248044370</li> 
          <li className="help__list-item">Номер счёта: 40703810342000004100</li> 
          <li className="help__list-item">Наименование банка: Волго-Вятский Банк ПАО Сбербанк</li> 
          <li className="help__list-item">Корреспондентский счёт: 30101810900000000603</li> 
          <li className="help__list-item">БИК: 042202603</li> 
      </ol>

      <p className="help__title-middle">
        При переводе средств просим <strong style={{ textDecoration: 'underline' }}>обязательно указать "Пожертвование для приюта"</strong> 
        - пожертвования, по закону, не облагаются налогом. 
      </p>

      <p className="help__title">
        3. Помочь с оплатой медикаментов, товаров и корма для питомцев, можно
        через КОПИЛКИ,установленные по адресам:
      </p>
      <ol className="help__list">
      <li className="help__list-item">ветеринарная аптека “ZooDoc” &#40;ул.Фигнер, 8&#41;;</li> 
          <li className="help__list-item">база стройматериалов "ПИРАМИДА"&#40;перед поворотом к приюту&#41;;</li> 
          <li className="help__list-item">магазин "НОВОСЁЛ " &#40;Н.Слобода, ул.Коминтерна&#41;;</li> 
          <li className="help__list-item">Пекарня №1" &#40;пл. Пролетарская, д.2&#41;;</li> 
          <li className="help__list-item">магазины ИП СИЛАК;</li> 
          <li className="help__list-item">ООО Дружаева А. В. аптека "Виталина" &#40;ул. Кирова, рядом с "Евроспар"&#41;.</li> 
      </ol>
      <p className="help__title">
        4. Физическая помощь:
      </p>
      <ol className="help__list">
          <li className="help__list-item">Мы будем рады любой посильной физической помощи</li> 
          <li className="help__list-item">Для хозяйственных мужчин в приюте всегда есть работа, связанная с мелким ремонтом или подготовкой дров.</li> 
          <li className="help__list-item">Заботливые женщины могут помочь в приготовлении еды для Островитяшек, уборке помещений и территории, с помывкой посуды.</li> 
      </ol>
      <h3 className="help__title-bottom">Мы бесконечно признательны за любую поддержку!</h3>
    </section>
  );
};
  
export default Help;