import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';
import pokemonsListReducer from './pokemonList';
import itemReducer from './item';
import itemsListReducer from './itemList';
import moveReducer from './move';
import movesListReducer from './moveList';
import locationReducer from './location';
import locationsListReducer from './locationList';
import machineReducer from './machine';
import machinesListReducer from './machineList';
// import generationReducer from './generation';
// import generationsListReducer from './generationList';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonsListReducer,
  item: itemReducer,
  itemsList: itemsListReducer,
  move: moveReducer,
  movesList: movesListReducer,
  location: locationReducer,
  locationsList: locationsListReducer,
  machine: machineReducer,
  machinesList: machinesListReducer,
  // generation: generationReducer,
  // generationsList: generationsListReducer,
});

export default reducer;
