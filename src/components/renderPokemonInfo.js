import React from 'react';
import Evolution from './Evolution';
import Moves from './Moves';
import About from './About';
import BaseStats from './BaseStats';

const renderPokemonInfo = (componentName, pokemon) => {
  switch (componentName) {
    case 'About':
      return (
        <About pokemon={pokemon} componentName={componentName} />
      );
    case 'Base-Stats':
      return (
        <BaseStats pokemon={pokemon} componentName={componentName} />
      );
    case 'Evolution':
      return (
        <Evolution id={pokemon.id} componentName={componentName} />
      );
    case 'Moves':
      return (
        <Moves pokemon={pokemon} componentName={componentName} />
      );
    default:
      return (
        ''
      );
  }
};

export default renderPokemonInfo;
