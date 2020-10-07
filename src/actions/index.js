export const savePokemon = pokemon => ({
  type: 'SAVE_POKEMON',
  pokemon,
});

export const savePokemonsList = pokemonsList => ({
  type: 'SAVE_POKEMONS_LIST',
  pokemonsList,
});

export const saveType = typeList => ({
  type: 'SAVE_TYPE',
  typeList,
});
