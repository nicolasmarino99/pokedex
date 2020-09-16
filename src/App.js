import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Loader from './loaders/Loader';
import PokeApp from './components/PokeAppCpts/PokeApp';
import Pokedex from './components/PokeAppCpts/Pokedex';
import Moves from './components/PokeAppCpts/Moves';
import Abilities from './components/PokeAppCpts/Abilities';
import Items from './components/PokeAppCpts/Items';
import Locations from './components/PokeAppCpts/Locations';
import TypeCharts from './components/PokeAppCpts/TypeCharts';

import Pokemon from './components/PokeAppCpts/Pokemon';

const App = () => {
  const [state, setState] = useState({ loading: true });
  const sleep = time => new Promise(resolve => setTimeout(resolve, time));
  const charge = async (time = 2000) => {
    await sleep(time);
    setState({
      loading: false,
    });
  };

  useEffect(() => {
    charge();
  });

  if (state.loading) { return (<Loader />); }

  const routes = [
    { path: '/', key: 'Home', component: PokeApp },
    { path: '/pokedex', key: 'About', component: Pokedex },
    { path: '/moves', key: 'Moves', component: Moves },
    { path: '/abilities', key: 'Abilities', component: Abilities },
    { path: '/items', key: 'Items', component: Items },
    { path: '/locations', key: 'Locations', component: Locations },
    { path: '/type-charts', key: 'TypeCharts', component: TypeCharts },
    { path: '/pokemons/:name', key: 'pokemons', component: Pokemon },
    { path: '/*', key: 'notFound', component: () => '404 NOT FOUND' },
  ];

  return (
    <div className="App">
      <Switch>
        {routes.map(({ path, key, component }) => (
          <Route exact path={path} key={key} component={component} />
        ))}

      </Switch>
    </div>

  );
};

export default App;
