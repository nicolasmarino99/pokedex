import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stlyes/Card.scss';
import getData from '../api';
import { AnimatedIcon } from './Card';

const GenerationCard = ({ generationInfo }) => {

    const [imgs, setImgs] = useState([])
    const [loading, setLoading] = useState(true);

    const adjutRightimgs = i => {
        if (generationInfo.id === 5) {
            return i+1
        } else if (generationInfo.id === 8) {
            return (i+1)*3 - 3
        } else {
            return i
        }
    }

    useEffect(() => {
        (async () => {
          setLoading(true);
           const images = []; 
          const data = [...Array(3).keys()].map(async (x,i) => { 
            const index = adjutRightimgs(i);
            console.log(index, generationInfo.id)    
            return (images.push(
              (await getData(`https://pokeapi.co/api/v2/pokemon/${generationInfo.pokemon_species[index].name}`))
              .sprites.front_default
              
              ))});
          setImgs(images)
          setLoading(false);
          console.log(images)
        })();
      }, []);
    return (

  <Link className="link-card" key={generationInfo.name} to={`/pokemons/${generationInfo.name}`}>
    <div className="Card ItemsCard">
      {generationInfo.name}
      {imgs.map(img => <img style={img ? { display: 'hidden' } : { display: 'none' }} alt="pokemon-img" src={img} />)}
      {loading && <AnimatedIcon />}
    </div>
  </Link>

)};

export default GenerationCard;
