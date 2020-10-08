const locationReducer = (state = {}, actions) => {
    let newState;
    switch (actions.type) {
      case 'SAVE_lOCATION':
        newState = actions.location;
  
        return newState;
      default:
        return state;
    }
  };
  
export default locationReducer;
  