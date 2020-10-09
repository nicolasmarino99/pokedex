import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';
import '../assets/stlyes/MoveCard.scss';
import '../assets/stlyes/colors.scss';

const MoveCard = ({ moveInfo }) => (

  <Link className="link-card" key={moveInfo.name} to={`/pokemons/${moveInfo.name}`}>
    <div className={`MoveCard ${moveInfo.type.name}`}>
      <p className="name">{moveInfo.name}</p>
      <div className="info-type">

        <p>
          <p className="tag">{`pp ${moveInfo.pp}`}</p>
          <p className="tag">{`Accuracy ${moveInfo.accuracy}`}</p>
          <p className="tag">{`Power ${moveInfo.power}`}</p>
        </p>

        <p>
          <p className="tag">{`Effect Chance ${moveInfo.effect_chance}`}</p>
          <p className="tag">{`Type ${moveInfo.type.name}`}</p>
          <p className="tag">{`Target ${moveInfo.target.name}`}</p>
        </p>
      </div>
    </div>
  </Link>

);

export default MoveCard;
