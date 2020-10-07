import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import getData from '../api';
import { saveItemsList, saveItem } from '../actions';

import { AnimatedIcon } from '../components/Card';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';
import ItemCard from '../components/ItemCard';

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,16%);
    @media only screen 
        
        and (max-device-width: 812px) 
        { 
          grid-template-columns: repeat(auto-fill,44%);
          margin-left: 4%;
        }
    height: 29em;
    margin: 0 auto;
    overflow: auto;
    grid-gap: 12px;
    justify-content: center;
}
`;

const Items = ({ itemsList, saveItemsList, saveItem }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        setLoading(true);
        const itemsList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/item?offset=${page + 20}&limit=20`);
        if (data) data.results.forEach(async item => itemsList2.push(await getData(`${item.url}`)));
        setItems(itemsList2);

        saveItemsList(items);
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const itemsList = [];
      const data = await getData(`https://pokeapi.co/api/v2/item?item=${page}&limit=20`);
      if (data) data.results.forEach(async item => itemsList.push(await getData(`${item.url}`)));
      setItems(itemsList);
      saveItemsList(itemsList);
      setLoading(false);
    })();
  }, []);
  return (

    <div className="Pokedex">
      <FilterNav />
      <h2>Pokedex</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      <Content onScroll={handleScroll}>
        {(itemsList.length > 1
          ? _.uniq(itemsList, 'id') : items).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(item => (
            <div className="foo" key={item.id} onClick={() => saveItem(item)} role="button" aria-hidden="true">
              <ItemCard itemInfo={item} />
            </div>
        ))}
        {loading && <AnimatedIcon />}
      </Content>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  saveItemsList: itemsList => dispatch(saveItemsList(itemsList)),
  saveItem: item => dispatch(saveItem(item)),
});

const mapStateToProps = state => ({
  itemsList: state.itemsList,
});

Items.propTypes = {
  saveItemsList: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  itemsList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
