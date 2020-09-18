import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../assets/stlyes/Card.scss';

export const AnimatedIcon = () => (
  <section>
    <div className="fa-3x">
      <FontAwesomeIcon icon={faCog} spin />
    </div>
    <h2>Loding...</h2>
  </section>
);

export const Card = ({ pokemonInfo }) => (

  <Link key={pokemonInfo.name} to={`/pokemons/${pokemonInfo.name}`} >
    <div className={`Card ${pokemonInfo.name ? pokemonInfo.types[0].type.name : ''}`}>
    <div className='info-type'>
      <p className="name">{pokemonInfo.name}</p>
      <p>{pokemonInfo.name ? pokemonInfo.types.map(type => <p className="tag">{type.type.name}</p>) : ''}</p>
    </div>  
    <img style={pokemonInfo.name ? {display: "hidden"} : {display: "none"}} alt="pokemon-img" src={pokemonInfo.name ? pokemonInfo.sprites.back_default : ''} />
    </div>
  </Link>

);
