const itemReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_ITEM':
      newState = actions.item;

      return newState;
    default:
      return state;
  }
};

export default itemReducer;
