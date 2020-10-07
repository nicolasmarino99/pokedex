const movesTypesReducer = (state = [], actions) => {
    let newState;
    switch (actions.type) {
      case 'SAVE_TYPE':
        newState = actions.typeList;
        console.log(state,newState)
        return newState;
      default:
        return state;
    }
  };
  
export default movesTypesReducer;