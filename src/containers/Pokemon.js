import React, { useState } from 'react';
import { connect } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stlyes/Pokemon.scss';

import LoveNav from '../components/LoveNav';
import PokemonStats from '../components/PokemonStats';

const Pokemon = ({ match, pokemon }) => {
  const convertFormat = number => {
    const num = `${number}`;
    switch (num.length) {
      case 1:
        return `#00${num}`;
      case 2:
        return `#0${num}`;
      case 3:
        return `#${num}`;
    }
  };

  return (
    <>

      <div className="pk-info-container">
        <div className={`pokemon-info ${pokemon.name ? pokemon.types[0].type.name : ''}-background`}>
          <LoveNav />
          <div className={`pokemon-info-card ${pokemon.name ? pokemon.types[0].type.name : ''}`}>
            <div className="info-type">

              <div className="name-tags-cont">
                <p className="name">
                  {pokemon.name}
                </p>
                <div className="tags">
                  {pokemon.name ? pokemon.types.map(type => <p className="tag">{type.type.name}</p>) : ''}
                </div>
              </div>
              <div className="numbers">{convertFormat(pokemon.id)}</div>
            </div>
            <img style={pokemon.name ? { display: 'hidden' } : { display: 'none' }} alt="pokemon-img" src={pokemon.name ? pokemon.sprites.other['official-artwork'].front_default : ''} />

          </div>
          <PokemonStats pokemon={pokemon} />

        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps)(Pokemon);
