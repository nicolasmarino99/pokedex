const locationsListReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_LOCATIONS_LIST':
      newState = [...Object.values(state), ...actions.locationsList];
      return newState;
    default:
      return state;
  }
};

export default locationsListReducer;
