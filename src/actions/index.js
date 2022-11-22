export const incNum = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNum = () => {
  return {
    type: "DECREMENT",
  };
};

export const editNum = (num) => {
  return {
    type: "EDITNUM",
    payload: num,
  };
};

export const multiNum = (num) => {
  return {
    type: "MULTINUM",
    payload: num,
  };
};
