const machinesListReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_MACHINES_LIST':
      newState = [...Object.values(state), ...actions.machinesList];
      return newState;
    default:
      return state;
  }
};

export default machinesListReducer;
