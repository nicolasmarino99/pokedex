import React from 'react';

const About = ({ pokemon, componentName }) => (
  <div className={componentName}>
    <div className="element">
      <p className="title">Height</p>
      <p>
        {pokemon.name ? `${pokemon.height} cm` : ''}
      </p>
    </div>
    <div className="element">
      <p className="title">Weight</p>
      <p>
        {pokemon.name ? `${pokemon.weight / 10} kg` : ''}
      </p>
    </div>
    <div className="element">
      <p className="title">Abilities</p>
      <p>
        {pokemon.name ? pokemon.abilities.map(hab => (hab.ability.name)) : ''}
      </p>
    </div>

  </div>
);

export default About;
