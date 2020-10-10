import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import _ from 'lodash';
import getData from '../api';

import { AnimatedIcon } from '../components/Card';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';
import GenerationCard from '../components/GenerationCard';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  @media only screen
  and (max-device-width: 812px) { 
    grid-template-columns: repeat(auto-fill, 44%);
    margin-left: 4%;
  }

  height: 29em;
  margin: 0 auto;
  overflow: auto;
  grid-gap: 19px;
  justify-content: center;
`;

const Generations = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const c = [];
      [...Array(8).keys()].map(async (x, i) => c.push(await getData(`https://pokeapi.co/api/v2/generation/${i + 1}`)));
      setItems(c);
      setLoading(false);
    })();
  }, []);
  return (

    <div className="Pokedex">
      <FilterNav />
      <h2>Generations</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      <Content>
        {(items || []).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(item => (
          <div className="foo" key={item.id} role="button" aria-hidden="true">
            <GenerationCard generationInfo={item} />
          </div>
        ))}
        {loading && <AnimatedIcon />}
      </Content>
    </div>

  );
};

export default Generations;
