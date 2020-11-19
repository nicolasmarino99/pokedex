const pokemonReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_POKEMON':
      newState = actions.pokemon;

      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
