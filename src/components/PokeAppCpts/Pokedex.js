import React, { useState, useEffect } from 'react';
//import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
//import { onEnter, onExit } from '../../animations/gsapAnimations';
import getData from '../../api';
import { savePokemonsList, savePokemon } from '../../actions';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
`;

const Pokedex = ({ pokemonsList, savePokemonsList, savePokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        const pokemonsList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page + 20}&limit=20`);
        if (data) data.results.forEach(async pokemon => pokemonsList2.push(await getData(`${pokemon.url}`)));
        setPokemons(pokemonsList2);

        savePokemonsList(pokemons);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      const pokemonsList = [];
      const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
      if (data) data.results.forEach(async pokemon => pokemonsList.push(await getData(`${pokemon.url}`)));
      setPokemons(pokemonsList);

      savePokemonsList(pokemons);
    })();
  }, [10]);

  return (
    <div className="Pokedex">
      <Link to="/"><button className="back-btn" type="button">Logout</button></Link>
      <Content onScroll={handleScroll}>
        {(pokemonsList.length > 1 ? pokemonsList : pokemons).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(pokemon => (
          <div key={pokemon.name} onClick={() => savePokemon(pokemon)}>
            <Link key={pokemon.name} to={`/pokemons/${pokemon.name}`}>
              <div>
                {pokemon.name}

                <p>{pokemon.types.map(type => <p>{type.type.name}</p>)}</p>
                <img alt="pokemon-img" src={pokemon.name ? pokemon.sprites.back_default : ''} />
              </div>
            </Link>
          </div>
        ))}
      </Content>
    </div>
  );
};

/*
 <Header />
    <div className="Pokedex">
      { routes.map(({ path, name, Component }) => (
        <Route key={name} path={path} exact>
          { ({ match }) => (
            <CSSTransition in={match != null} timeout={1200} classNames="page" onEnter={onEnter} onExit={onExit} unmountOnExit>
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div> */

const mapDispatchToProps = dispatch => ({
  savePokemonsList: pokemonsList => dispatch(savePokemonsList(pokemonsList)),
  savePokemon: pokemon => dispatch(savePokemon(pokemon)),
});

const mapStateToProps = state => ({
  pokemonsList: state.pokemonsList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
