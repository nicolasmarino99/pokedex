import React, { useEffect, useState } from 'react';
import getData from '../api';
import { AnimatedIcon } from './Card';

const Evolution = ({id, componentName}) => {
    const [specieInfo, setSpecieInfo] = useState('');
    const [evolutionChain, setEvolutionChain] = useState('');
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    (async () => {
      const data = await getData(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      const urlChain = data.evolution_chain.url;
      
      setSpecieInfo(data);
      const chainData = await getData(`${urlChain}`);
      
      setEvolutionChain(chainData)
      setLoading(false);
    })()
  }, [])
  
   //const firstEvo = evolutionChain.chain.evolves_to[0].species.name 
   // <img style={pokemon.name ? { display: 'hidden' } : { display: 'none' }} alt="pokemon-img" src={pokemon.name ? pokemon.sprites.other['official-artwork'].front_default : ''} />
    return (
        <div className={componentName}>
            <p>
           {evolutionChain ? evolutionChain.chain.evolves_to[0].species.name : ''}
           
           </p>
           <p>
           {evolutionChain ? evolutionChain.chain.evolves_to[0].evolves_to[0].species.name : ''}
           </p>
           {loading && <AnimatedIcon/>}
        </div>
      );
}

export default Evolution;
