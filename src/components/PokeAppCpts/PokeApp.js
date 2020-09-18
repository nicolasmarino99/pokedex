import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
        <img alt="poke-logo" className="corner-logo" src={pokemonLogo} />
        <h1>Which Pokemon are you looking for?</h1>
        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} size="sm" />
          <input type="text" placeholder="Search Pokemon, Move, Ability etc..." onChange={handleSubmit} />
        </div>

        <UsePokemonSearch query={query} />

        <div className="options">
          {links.map(name => (
            <Link key={name} to={`/${name}`}>
              <button type="button" className={name}>
                {name}
                <img alt="poke-logo" src={pokemonLogo} />
              </button>
            </Link>
          )) }
        </div>
      </div>

    </>
  );
};

export default PokeApp;
