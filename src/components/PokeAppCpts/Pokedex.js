import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Auth from './Auth';

import { onEnter, onExit } from '../../animations/gsapAnimations';
import getData from '../../api';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
];

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
`;

const Pokedex = props => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const pokemonsList = [];
  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      

      setPage(prev => (prev * 1) + 20);
      //console.log(e, page)
      (async () => {
        const pokemonsList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
        if (data) data.results.forEach(async pokemon => pokemonsList2.push(await getData(`${pokemon.url}`)));
  
        const newList = [pokemonsList, pokemonsList2] 
        setPokemons(pokemonsList2);
        console.log(newList)
      })();
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getData(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
      if (data) data.results.forEach(async pokemon => pokemonsList.push(await getData(`${pokemon.url}`)));

      
      setPokemons(pokemonsList);
    })();
  }, [10]);

  

  return (
    <>
      <button className="back-btn" type="button" onClick={() => { Auth.back(() => { props.history.push('/'); }); }}>Logout</button>
      <Content onScroll={handleScroll}>
        {pokemons.sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(pokemon => (
          <Link key={pokemon.name} to={`/pokemons/${pokemon.name}`}>
            <div>
              {pokemon.name}
              <img src={pokemon.name ? pokemon.sprites.back_default : ''} />
            </div>
          </Link>
        ))}
       </Content>
    </>
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

export default Pokedex;
