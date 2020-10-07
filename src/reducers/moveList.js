const movesListReducer = (state = [], actions) => {
    let newState;
    switch (actions.type) {
      case 'SAVE_MOVES_LIST':
        newState = [...Object.values(state), ...actions.movesList];
        return newState;
      default:
        return state;
    }
  };
  
  export default movesListReducer;
  