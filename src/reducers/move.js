const moveReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_MOVE':
      newState = actions.move;

      return newState;
    default:
      return state;
  }
};

export default moveReducer;
