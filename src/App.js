import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Loader from './loaders/Loader';
import PokeApp from './pages/PokeApp';
import Pokedex from './containers/Pokedex';
import Moves from './containers/Moves';
import Generations from './containers/Generations';
import Items from './containers/Items';
import Locations from './containers/Locations';
import Machines from './containers/Machines';
import Pokemon from './containers/Pokemon';

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
    { path: '/generations', key: 'Generations', component: Generations },
    { path: '/items', key: 'Items', component: Items },
    { path: '/locations', key: 'Locations', component: Locations },
    { path: '/machines', key: 'Machines', component: Machines },
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
