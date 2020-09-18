import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export const AnimatedIcon = () => (
  <section>
    <div className="fa-3x">
      <FontAwesomeIcon icon={faCog} spin />
    </div>
    <h2>Loding...</h2>
  </section>
);

export const Card = ({ pokemonInfo }) => (

  <Link key={pokemonInfo.name} to={`/pokemons/${pokemonInfo.name}`}>
    <div>
      {pokemonInfo.name}
      <p>{pokemonInfo.name ? pokemonInfo.types.map(type => <p>{type.type.name}</p>) : ''}</p>
      <img alt="pokemon-img" src={pokemonInfo.name ? pokemonInfo.sprites.back_default : ''} />
    </div>
  </Link>

);
