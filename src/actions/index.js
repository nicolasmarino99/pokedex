export const savePokemon = pokemon => ({
  type: 'SAVE_POKEMON',
  pokemon,
});

export const savePokemonsList = pokemonsList => ({
  type: 'SAVE_POKEMONS_LIST',
  pokemonsList,
});

export const saveItem = item => ({
  type: 'SAVE_ITEM',
  item,
});

export const saveItemsList = itemsList => ({
  type: 'SAVE_ITEMS_LIST',
  itemsList,
});

export const saveMove = move => ({
  type: 'SAVE_MOVE',
  move,
});

export const saveMovesList = movesList => ({
  type: 'SAVE_MOVES_LIST',
  movesList,
});

export const saveMachine = machine => ({
  type: 'SAVE_MACHINE',
  machine,
});

export const saveMachinesList = machinesList => ({
  type: 'SAVE_MACHINES_LIST',
  machinesList,
});

export const saveLocation = location => ({
  type: 'SAVE_LOCATION',
  location,
});

export const saveLocationsList = locationsList => ({
  type: 'SAVE_LOCATIONS_LIST',
  locationsList,
});
