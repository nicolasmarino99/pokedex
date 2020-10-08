import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';
import '../assets/stlyes/MoveCard.scss';
import '../assets/stlyes/colors.scss';

const MachinesCard = ({ machineInfo }) => (

  <Link className="link-card" key={machineInfo.item.name} to={`/pokemons/${machineInfo.item.name}`}>
    <div className={`MoveCard ${machineInfo.item.name}`}>
    <p className="name">{machineInfo.item.name}</p>
      <div className="info-type">
        
        <p>
          <p className="tag">{`Name ${machineInfo.move.name}`}</p>
         
        </p>
      
      <p>
          <p className="tag">{`Version group ${machineInfo.version_group.name}`}</p>
         
        </p>
        </div>
    </div>
  </Link>

);

export default MachinesCard;
