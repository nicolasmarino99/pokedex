import React from 'react';

const renderPokemonInfo = (componentName, pokemon) => {
  switch (componentName) {
    case 'about':
      return (
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
    case 'base-stats':
      return (
        <div className={componentName}>

          {pokemon.name ? pokemon.stats.map(stat => (
            <p className="tag">
              {`${stat.stat.name}: ${stat.base_stat}`}
            </p>
          )) : ''}
        </div>
      );
    case 'evolution':
      return (
        <div className={componentName}>
          hey
        </div>
      );
    case 'moves':
      return (
        <div className={componentName}>
          hey
        </div>
      );
    case '':
      return (
        <div className={componentName}>
          hey
        </div>
      );
  }
};

export default renderPokemonInfo;
