import React, { useEffect, useState } from 'react';
import getData from '../api';
import '../assets/stlyes/About.scss';

const About = ({ pokemon, componentName }) =>{ 
  const [eggGroup, setEggGroup] = useState('');
  useEffect(() => {
    (async () => {
      const data = await getData(`https://pokeapi.co/api/v2/egg-group/${pokemon.id}/`);
      setEggGroup(data.name);
    })();
  }, [1]);
  return (
  <div className={componentName}>
    <div className="element">
      <p className="title">Height</p>
      <p>
        {`${pokemon.height} cm` }
      </p>
    </div>
    <div className="element">
      <p className="title">Weight</p>
      <p>
        {`${pokemon.weight / 10} kg`}
      </p>
    </div>
    <div className="element">
      <p className="title">Abilities</p>
      <div>
      <p>
        {pokemon.abilities.map(hab => `${hab.ability.name} `)}
      </p>
      </div>
    </div>
    <h1>
      Breeding
    </h1>
    <div className="element">
      <p className="title">Egg Groups</p>
      <p>
        {eggGroup}
      </p>
    </div>
    <div className="element">
      <p className="title">Egg Cycle</p>
      <p>
        {pokemon.types[0].type.name}
      </p>
    </div>

  </div>
)};

export default About;
