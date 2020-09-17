import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UsePokemonSearch from './UsePokemonSearch';
import pokemonLogo from '../../assets/imgs/pokemon.svg';

import '../../assets/stlyes/pokeApp.scss';


const PokeApp = () => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => setQuery(e.target.value);
  const links = ['pokedex', 'moves', 'abilities', 'items', 'locations', 'type-charts'];

  return (
    <>
      <div className="poke-app">
        <h1>What Pokemon are you looking for?</h1>
        <input type="text" placeholder="Search Pokemon, Move, Ability etc..." onChange={handleSubmit}  />
        <FontAwesomeIcon icon={["fal", "coffee"]} />

<FontAwesomeIcon icon={["far", "coffee"]} />

<FontAwesomeIcon icon={["fas", "coffee"]} />

<FontAwesomeIcon icon="coffee" />

<FontAwesomeIcon icon={["fab", "github"]} />
        <div className="options">
          {links.map(name => (
            <Link key={name} to={`/${name}`}>
              <button type="button">
                {name}
                <img alt="poke-logo" src={pokemonLogo} />
              </button>
            </Link>
          )) }
        </div>
      </div>
      <UsePokemonSearch query={query} />
    </>
  );
};

export default PokeApp;
