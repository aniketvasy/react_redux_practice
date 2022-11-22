const initialState = 0;

const multiPlyTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "MULTINUM":
      return parseInt(action.payload);
  }
};
