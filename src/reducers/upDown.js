const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return parseInt(state) + action.payload;
    case "DECREMENT":
      return state - 1;
    case "EDITNUM":
      return action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
