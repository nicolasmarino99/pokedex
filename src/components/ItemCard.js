import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';

const ItemCard = ({ itemInfo }) => (

  <Link className="link-card" key={itemInfo.name} to={`/pokemons/${itemInfo.name}`}>
    <div className="Card ItemsCard">
      <div className="info-type">
        <p className="name">{itemInfo.name}</p>
        <p className="tag">{itemInfo.name ? itemInfo.category.name : ''}</p>
      </div>
      <img style={itemInfo.name ? { display: 'hidden' } : { display: 'none' }} alt="pokemon-img" src={itemInfo.name ? itemInfo.sprites.default : ''} />
    </div>
  </Link>

);

export default ItemCard;
