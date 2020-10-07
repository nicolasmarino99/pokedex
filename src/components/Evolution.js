import React, { useEffect, useState } from 'react';
import getData from '../api';
import { AnimatedIcon } from './Card';
import '../assets/stlyes/Evolution.scss';

const Evolution = ({id, componentName}) => {
    const [evolutionChain, setEvolutionChain] = useState('');
    const [evolution1, setEvolution1] = useState('');
    const [evolution2, setEvolution2] = useState('');
    const [evolution3, setEvolution3] = useState('');
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    (async () => {
      try {
        const data = await getData(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const urlChain = data.evolution_chain.url;
  
        const chainData = await getData(`${urlChain}`);
        setEvolutionChain(chainData)
  
        const evol1 = await getData(`https://pokeapi.co/api/v2/pokemon/${chainData.chain.species.name}/`)
        setEvolution1(evol1)
    
        const evol2 = await getData(`https://pokeapi.co/api/v2/pokemon/${chainData.chain.evolves_to[0].species.name}/`)
        setEvolution2(evol2)
  
        const evol3 = await getData(`https://pokeapi.co/api/v2/pokemon/${chainData.chain.evolves_to[0].evolves_to[0].species.name}/`)
        setEvolution3(evol3)
        
        setLoading(false);
      } catch {
        
        setEvolution3(false)
        setLoading(false);
      }
      
    })()
  }, [1])
  
    const NextLevel = () => (
      <>
      <h2>{`Lvl ${evolutionChain ? evolutionChain.chain.evolves_to[0].evolution_details[0].min_level : ''}`}</h2>
      <p>
        {evolutionChain ? evolutionChain.chain.evolves_to[0].species.name : ''}
        <img alt="pokemon-img" src={evolution2.name ? evolution2.sprites.other['official-artwork'].front_default : ''} />
      </p>
      </>
    )

    const NextNextLevel = () => (
      <section>
            
        <p>
        {evolutionChain ? evolutionChain.chain.evolves_to[0].species.name : ''}
        <img alt="pokemon-img" src={evolution2.name ? evolution2.sprites.other['official-artwork'].front_default : ''} />
        </p>
        <h2>{`Lvl ${evolutionChain ? evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level : ''}`}</h2>
        <p>
        {evolutionChain ? evolutionChain.chain.evolves_to[0].evolves_to[0].species.name : ''}
        <img alt="pokemon-img" src={evolution3.name ? evolution3.sprites.other['official-artwork'].front_default : ''} />
        </p>

        </section>
    )
    return (
        <div className={componentName}>
          <h1>Evolution Chain</h1>
          <section>
           <p>
            {evolutionChain ? evolutionChain.chain.species.name : ''}
            
            <img alt="pokemon-img" src={evolution1.name ? evolution1.sprites.other['official-artwork'].front_default : ''} />
            </p>
           { evolution2 ? <NextLevel /> : ''}
          
          </section>

          { evolution3 ? <NextNextLevel /> : ''}

          
           
           {loading && <AnimatedIcon/>}
        </div>
      );
}

export default Evolution;
