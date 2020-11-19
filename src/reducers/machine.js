const machineReducer = (state = {}, actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_MACHINE':
      newState = actions.machine;

      return newState;
    default:
      return state;
  }
};

export default machineReducer;
