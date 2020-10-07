import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';
import pokemonsListReducer from './pokemonList';
import itemReducer from './item';
import itemsListReducer from './itemList';
import moveReducer from './move';
import movesListReducer from './moveList';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonsListReducer,
  item: itemReducer,
  itemsList: itemsListReducer,
  move: moveReducer,
  movesList: movesListReducer,
});

export default reducer;
