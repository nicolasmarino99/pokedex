import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import _ from 'lodash';
import getData from '../api';
import { saveLocationsList, saveLocation } from '../actions';

import { AnimatedIcon } from '../components/Card';
import pokemonLogo from '../assets/imgs/pokemon.svg';
import '../assets/stlyes/Pokedex.scss';
import FilterNav from '../components/FilterNav';
import LocationCard from '../components/LocationCard';

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 16%);
    @media only screen and (max-device-width: 812px) { 
      grid-template-columns: repeat(auto-fill, 44%);
      margin-left: 4%;
    }
    height: 29em;
    margin: 0 auto;
    overflow: auto;
    grid-gap: 12px;
    justify-content: center;

`;

const Locations = ({ locationsList, saveLocationsList, saveLocation }) => {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => (prev + 20));

      (async () => {
        setLoading(true);
        const LocationsList2 = [];
        const data = await getData(`https://pokeapi.co/api/v2/location?offset=${page + 100}&limit=100`);
        if (data) data.results.forEach(async Location => LocationsList2.push(await getData(`${Location.url}`)));
        setLocations(LocationsList2);

        saveLocationsList(locations);
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const LocationsList = [];
      const data = await getData(`https://pokeapi.co/api/v2/location?Location=${page}&limit=100`);
      if (data) data.results.forEach(async Location => LocationsList.push(await getData(`${Location.url}`)));
      setLocations(LocationsList);
      saveLocationsList(LocationsList);
      setLoading(false);
    })();
  }, []);
  return (

    <div className="Pokedex">
      <FilterNav />
      <h2>Locations</h2>
      <img alt="poke-logo" className="pokedex-logo" src={pokemonLogo} />
      <Content onScroll={handleScroll}>
        {(locationsList.length > 1
          ? _.uniq(locationsList, 'id') : locations).sort((a, b) => ((a.id > b.id) ? 1 : -1)).map(Location => (
            <div className="foo" key={Location.id} onClick={() => saveLocation(Location)} role="button" aria-hidden="true">
              <LocationCard locationInfo={Location} />
            </div>
        ))}
        {loading && <AnimatedIcon />}
      </Content>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  saveLocationsList: locationsList => dispatch(saveLocationsList(locationsList)),
  saveLocation: location => dispatch(saveLocation(location)),
});

const mapStateToProps = state => ({
  locationsList: state.locationsList,
});

Locations.propTypes = {
  saveLocationsList: PropTypes.func.isRequired,
  saveLocation: PropTypes.func.isRequired,
  locationsList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
