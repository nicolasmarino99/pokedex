import React, { useEffect, useState } from 'react';
import '../assets/stlyes/Moves.scss';
import '../assets/stlyes/colors.scss';
import getData from '../api';
import { AnimatedIcon } from './Card';

const Moves = ({ pokemon, componentName }) => {
  const [types, setTypes] = useState([]);
  const [pPs, setPPs] = useState([]);
  const [acuracys, setAcuracys] = useState([]);
  const [powers, setPowers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const typeArray = [];
      const PPArray = [];
      const AcuracyArray = [];
      const powerArray = [];
      pokemon.moves.map(async move => typeArray.push((await getData(move.move.url)).type.name));
      pokemon.moves.map(async move => PPArray.push((await getData(move.move.url)).pp));
      pokemon.moves.map(async move => AcuracyArray.push((await getData(move.move.url)).accuracy));
      pokemon.moves.map(async move => powerArray.push((await getData(move.move.url)).power));

      setTypes(typeArray);
      setPPs(PPArray);
      setAcuracys(AcuracyArray);
      setPowers(powerArray);
      setLoading(false);
    }
    )();
  }, [pokemon.moves.length]);

  return (

    <div className={componentName}>
      {pokemon.moves.map((move, i) => (
        <div className={types[i]}>
          <h1>{move.move.name}</h1>
          <h4>{`Type: ${types[i]}`}</h4>
          {`PP: ${pPs[i]}   `}
          {`Accuracy: ${acuracys[i]}   `}
          {`Power: ${powers[i]}`}
        </div>
      ))}
      {loading && <AnimatedIcon />}
    </div>
  );
};

export default Moves;
