import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import getData from '../../api';
import pokemonLogo from '../../assets/imgs/pokemon.svg';
import { savePokemon } from '../../actions';
// import Pokemon from './Pokemon';

// const Pokemon = (props) => {
//    console.log(props)
//    return (
//        <div>
//          {props.match.params.pokemonsName}
//        </div>
//    );
// }

const UseBookSearch = ({ query, savePokemon }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData(`https://pokeapi.co/api/v2/pokemon/${query}`);

      setPokemon(data);
      if (pokemon) savePokemon(pokemon);
    })();
  }, [query]);

  return (
    <div>

      <Link to={`/pokemons/${pokemon.name}`}>
        <div>
          {pokemon.name}
          <img src={pokemon.name ? pokemon.sprites.back_default : ''} />
        </div>
      </Link>
    
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  savePokemon: pokemon => dispatch(savePokemon(pokemon)),

});

export default connect(null, mapDispatchToProps)(UseBookSearch);
