import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import getData from '../api';
import { saveMovesList, saveMove } from '../actions';

import { AnimatedIcon } from '../components/Card';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';
import MoveCard from '../components/MoveCard';

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

`;

const Moves = ({ movesList, saveMovesList, saveMove }) => {
  const [moves, setMoves] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        setLoading(true);
        const movesList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/move?offset=${page + 20}&limit=20`);
        if (data) data.results.forEach(async move => movesList2.push(await getData(`${move.url}`)));
        setMoves(movesList2);

        saveMovesList(moves);
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movesList1 = [];
      const data = await getData(`https://pokeapi.co/api/v2/move?move=${page}&limit=20`);
      if (data) data.results.forEach(async move => movesList1.push(await getData(`${move.url}`)));
      setMoves(movesList1);
      saveMovesList(movesList1);
      setLoading(false);
      console.log(movesList1);
    })();
  }, []);
  console.log(moves);
  return (

    <div className="Pokedex">
      <FilterNav />
      <h2>Moves</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      <Content onScroll={handleScroll}>
        {(movesList.length > 0
          ? _.uniq(movesList, 'id') : moves).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(move => (
            <div className="foo" key={move.id} onClick={() => saveMove(move)} role="button" aria-hidden="true">
              <MoveCard moveInfo={move} />
            </div>
        ))}
        {loading && <AnimatedIcon />}
      </Content>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  saveMovesList: movesList => dispatch(saveMovesList(movesList)),
  saveMove: move => dispatch(saveMove(move)),
});

const mapStateToProps = state => ({
  movesList: state.movesList,
});

Moves.propTypes = {
  saveMovesList: PropTypes.func.isRequired,
  saveMove: PropTypes.func.isRequired,
  movesList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Moves);
