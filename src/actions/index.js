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
