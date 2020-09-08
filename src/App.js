import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './loaders/Loader';
import Pokedex from './components/Pokedex';

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

  return (
    <Pokedex />
  );
};

export default App;
