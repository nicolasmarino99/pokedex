import React, { useState } from 'react';
import Auth from './Auth';
import axios from 'axios'
import UseBookSearch from './useBookSearch';
import pokemonLogo from '../../assets/imgs/pokemon.svg';


const PokeApp = (props) => { 
  
  const [query, setQuery] = useState('');
  //useBookSearch(query)
  console.log(query)
  const handleSubmit = e => setQuery(e.target.value);
 

  return (
    <>
  <div className="poke-app">
    <h1>What Pokemon are you looking for?</h1>
    <input type="text" placeholder="Search Pokemon, Move, Ability etc..." onChange={handleSubmit} />
    <div className="options">
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/pokedex")})}}>Pokedex</button>
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/moves")})}}>Moves</button>
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/abilities")})}}>Abilities</button>
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/items")})}}>Items</button>
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/locations")})}}>Locations</button>
      <button onClick={()=> {Auth.enter(()=>{props.history.push("/type-charts")})}}>Type Charts</button>
    </div>
  </div>
  <UseBookSearch query={query}/>
  </>
)};

export default PokeApp;
