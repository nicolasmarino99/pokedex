const itemsListReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case 'SAVE_ITEMS_LIST':
      newState = [...Object.values(state), ...actions.itemsList];
      return newState;
    default:
      return state;
  }
};

export default itemsListReducer;
