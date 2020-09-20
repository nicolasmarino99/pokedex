import React, { useState } from 'react';
import { connect } from 'react-redux';
import FilterNav from '../components/FilterNav';
import Collapse from 'react-bootstrap/Collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stlyes/Pokemon.scss';

const Pokemon = ({match, pokemon}) => {
    console.log(pokemon)
    const [open, setOpen] = useState(false);
    return (
        <>
        
        <div className="pk-info-container">
        <div className={`pokemon-info ${pokemon.name ? pokemon.types[0].type.name : ''}`}>
        <FilterNav />
            {match.params.name}
          {pokemon.name ? pokemon.name : 'No selected Pokemon'}
          <div className='info-type'>
      <p className="name">{pokemon.name}</p>
      <p>{pokemon.name ? pokemon.types.map(type => <p className="tag">{type.type.name}</p>) : ''}</p>
    </div>  
    <img style={pokemon.name ? {display: "hidden"} : {display: "none"}} alt="pokemon-img" src={pokemon.name ? pokemon.sprites.other["official-artwork"].front_default : ''} />

          <div className="stats">
          
  
          <button onClick={() => setOpen(!open)} >
                filters
            </button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                {pokemon.name ? pokemon.stats.map(stat => (
                    
                    <p className="tag">{`${stat.stat.name}: ${stat.base_stat}`}</p>
                    
                    )) 
                : ''}
                
                </div>
            </Collapse>
            
          </div>
        </div>
        </div>  
    </>);
    
};

const mapStateToProps = state => ({
    pokemon: state.pokemon,
});

export default connect(mapStateToProps)(Pokemon);
