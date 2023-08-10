import './Dogs.css';
import React from "react";
import Card from '../Card/Card';
import dogsData from '../Arrays/DogsArray'


function Dogs({ onCardClick }) {
  return (
    <section className="dogs" aria-label="Фотографии">
      {dogsData.map((dog) => (
        <Card
          key={dog.id}
          name={dog.name}
          link={dog.link}
          onCardClick={onCardClick}
          description={dog.description}
        />
      ))}
    </section>
  );
};


export default Dogs;