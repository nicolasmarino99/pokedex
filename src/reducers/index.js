import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';

const reducer = combineReducers({
  pokemon: pokemonReducer,
});

export default reducer;