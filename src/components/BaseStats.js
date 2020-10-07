import React from 'react';
import styled, { keyframes } from 'styled-components';

const increase = width => keyframes`
  from {
    width: 0%;
  }

  to {
    transform: ${width}%;
  }
`;

const ProgressBar = styled.div`
    animation : ${props => increase(props.width)} 2s ease;
    width: ${props => props.width}%;
    height: 0.2em;
    background-color: #59c584;
    border-radius: 10px;
`;

const BaseStats = ({ pokemon, componentName }) => {
  const higuestStats = [255, 190, 250, 194, 250, 180];

  return (
    <div className={componentName}>

      {pokemon.name ? pokemon.stats.map((stat, i) => (
        <div key={stat.stat.name} className="tag">
          <p>{stat.stat.name}</p>
          <div className="points">
            <p>{stat.base_stat}</p>
            <div className="progress-cont">
              <ProgressBar width={(stat.base_stat / higuestStats[i]) * 100} />
            </div>

          </div>

        </div>
      )) : ''}
    </div>
  );
};

export default BaseStats;
