import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';
import renderPokemonInfo from './renderPokemonInfo';
import '../assets/stlyes/PokemonStats.scss';

const PokemonStats = ({ pokemon }) => {
  const [open, setOpen] = useState(false);
  const [buttonName, setButtonName] = useState('');

  const handleClick = e => {
    setOpen(!open);
    setButtonName(e.target.innerText);
  };
  console.log(buttonName)

  const buttonNames = ['about', 'base-stats', 'evolution', 'moves'];
  return (
    <div className="stats">
      <div className="buttons">
        {buttonNames.map(btnName => (<button key={btnName} type="button" onClick={handleClick}>{btnName}</button>))}
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          {renderPokemonInfo(buttonName, pokemon)}
        </div>
      </Collapse>

    </div>
  );
};

PokemonStats.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
};

export default PokemonStats;
