const pokemonsListReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_POKEMONS_LIST':
      newState = [...Object.values(state), ...actions.pokemonsList];
      return newState;
    default:
      return state;
  }
};

export default pokemonsListReducer;
