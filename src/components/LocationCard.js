import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';
import '../assets/stlyes/MoveCard.scss';
import '../assets/stlyes/colors.scss';

const LocationsCard = ({ locationInfo }) => (

  <Link className="link-card" key={locationInfo.name} to={`/pokemons/${locationInfo.name}`}>
    <div className="Card LocationsCard">
      <p className="name">{locationInfo.name}</p>
    </div>
  </Link>

);

export default LocationsCard;
