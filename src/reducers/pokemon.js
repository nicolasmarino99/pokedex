const pokemonReducer = (state = {}, actions) => {
    let newState;
    switch (actions.type) {
        case 'SAVE_POKEMON':
          newState = actions.pokemon;
          console.log(newState, 'newsatte')
          return newState;
        default:
            return state;
    }
}

export default pokemonReducer;
