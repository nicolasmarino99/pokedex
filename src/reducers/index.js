import { combineReducers } from 'redux';
import movesTypesReducer from './movesTypes';
import pokemonReducer from './pokemon';
import pokemonsListReducer from './pokemonList';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonsListReducer,
  movesTypes: movesTypesReducer,
});

export default reducer;
