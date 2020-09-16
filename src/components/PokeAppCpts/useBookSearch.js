import React, { useEffect, useState } from 'react';
import getData from '../../api';
import pokemonLogo from '../../assets/imgs/pokemon.svg';
import { Link, Route, Switch } from 'react-router-dom';
//import Pokemon from './Pokemon';

//const Pokemon = (props) => {
//    console.log(props)
//    return (
//        <div>
//          {props.match.params.pokemonsName}
//        </div>
//    );
//}



const UseBookSearch = ({query}) => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        
        (async () => {
            const data = await getData(`https://pokeapi.co/api/v2/pokemon/${query}`)
            
            setPokemons(data)
            console.log(pokemons)
        })()
    }, [query])

    

    return (
        <div>
            
         
          
           
          
         
            <Link to={`/pokemons/${pokemons.name}`}>
              <div>
                  {pokemons.name}
                   <img src={pokemons.name ? pokemons.sprites.back_default : ''}/>     
              </div>
            </Link>
        
        </div>
        
     
    );
}

export default UseBookSearch;
