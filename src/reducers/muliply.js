const initialState = 1;

const multiPlyTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "MULTINUM":
      return parseInt(action.payload) * initialState;
    default:
      return state;
  }
};

export default multiPlyTheNumber;
