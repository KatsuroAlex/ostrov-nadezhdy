import './Cats.css';
import React from "react";
import Card from '../Card/Card';
import catsData from '../Arrays/CatsArray'

function Cats({ onCardClick }) {
  return (
    <section className="dogs" aria-label="Фотографии">
      {catsData.map((cat) => (
        <Card
          key={cat.id}
          name={cat.name}
          link={cat.link}
          onCardClick={onCardClick}
          description={cat.description}
        />
      ))}
    </section>
  );
};
  
export default Cats;