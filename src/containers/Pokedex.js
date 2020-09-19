import React, { useState, useEffect } from 'react';
//import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { connect } from 'react-redux';
//import { onEnter, onExit } from '../../animations/gsapAnimations';
import getData from '../api';
import { savePokemonsList, savePokemon } from '../actions';
import { Card, AnimatedIcon } from '../components/Card';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';



const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,16%);
    height: 33em;
    margin: 0 auto;
    overflow: auto;
    grid-gap: 12px;
    justify-content: center;
}
`;

const Pokedex = ({ pokemonsList, savePokemonsList, savePokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        setLoading(true);
        const pokemonsList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page + 20}&limit=20`);
        if (data) data.results.forEach(async pokemon => pokemonsList2.push(await getData(`${pokemon.url}`)));
        setPokemons(pokemonsList2);

        savePokemonsList(pokemons);
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pokemonsList = [];
      const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
      if (data) data.results.forEach(async pokemon => pokemonsList.push(await getData(`${pokemon.url}`)));
      setPokemons(pokemonsList);

      savePokemonsList(pokemons);
      setLoading(false);
    })();
  }, [10]);

  return (
    <div className="Pokedex">
      
      <FilterNav />
      
      <h2>Pokedex</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      
      
      <Content onScroll={handleScroll}>
        {(pokemonsList.length > 1 ? pokemonsList : pokemons).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(pokemon => (
          <div key={pokemon.name} onClick={() => savePokemon(pokemon)}>
            <Card pokemonInfo={pokemon}/>
          </div>
        ))}
        {loading && <AnimatedIcon />}
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
