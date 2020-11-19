import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getData from '../../api';
import { savePokemon } from '../../actions';
import { Card, AnimatedIcon } from '../../components/Card';

const UsePokemonSearch = ({ query, savePokemon, pokemonState }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getData(`https://pokeapi.co/api/v2/pokemon/${query}`);

      setPokemon(data);
      if (pokemon) savePokemon(data);
      setLoading(false);
    })();
  }, [query]);

  return (
    <div id="queried-card">
      <Card pokemonInfo={pokemonState} />
      {loading && <AnimatedIcon />}
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  savePokemon: pokemon => dispatch(savePokemon(pokemon)),

});

const mapStateToProps = state => ({
  pokemonState: state.pokemon,
});

UsePokemonSearch.propTypes = {
  query: PropTypes.string.isRequired,
  savePokemon: PropTypes.func.isRequired,
  pokemonState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsePokemonSearch);
