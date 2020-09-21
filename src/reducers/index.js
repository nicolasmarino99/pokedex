import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';
import pokemonsListReducer from './pokemonList';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonsListReducer,
});

export default reducer;
