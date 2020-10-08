import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import getData from '../api';
import { saveMachinesList, saveMachine } from '../actions';
import { AnimatedIcon } from '../components/Card';
import MachinesCard from '../components/MachinesCard';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';

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

const UseInfiniteScroll = ({ machinesList, saveMachinesList, saveMachine, thema }) => {
  const [machines, setMachines] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        setLoading(true);
        const machinesList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/machine?offset=${page + 20}&limit=20`);
        if (data) data.results.forEach(async machine => machinesList2.push(await getData(`${machine.url}`)));
        setMachines(machinesList2);

        saveMachinesList(machines);
        setLoading(false); 
      })();
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const machinesList = [];
      const data = await getData(`https://pokeapi.co/api/v2/machine?offset=${page}&limit=20`);
      if (data) data.results.forEach(async machine => machinesList.push(await getData(`${machine.url}`)));
      setMachines(machinesList);
        
      saveMachinesList(machines);
      setLoading(false);
    })();
  }, []);
  return (

    <div className="Pokedex">
      <FilterNav />
      <h2>Pokedex</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      <Content onScroll={handleScroll}>
        {(machinesList.length > 1
          ? _.uniq(machinesList, 'id') : machines).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(machine => (
            <div className="foo" key={machine.name} onClick={() => saveMachine(machine)} role="button" aria-hidden="true">
              <MachinesCard machineInfo={machine} />
            </div>
        ))}
        {loading && <AnimatedIcon />}
      </Content>
    </div>

    
  );
};

const mapDispatchToProps = dispatch => ({
  saveMachinesList: machinesList => dispatch(saveMachinesList(machinesList)),
  saveMachine: machine => dispatch(saveMachine(machine)),
});

const mapStateToProps = state => ({
  machinesList: state.machinesList,
});

UseInfiniteScroll.propTypes = {
  saveMachinesList: PropTypes.func.isRequired,
  saveMachine: PropTypes.func.isRequired,
  machinesList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UseInfiniteScroll);