import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';

const MoveCard = ({ moveInfo }) => (

  <Link className="link-card" key={moveInfo.name} to={`/pokemons/${moveInfo.name}`}>
    <div className={`Card ${moveInfo.name ? moveInfo.category.name : ''}`}>
      <div className="info-type">
        <p className="name">{moveInfo.name}</p>

      </div>
    </div>
  </Link>

);

export default MoveCard;
