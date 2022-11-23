import changeTheNumber from "./upDown";
import multiPlyTheNumber from "./muliply";

import { combineReducers } from "redux";

const reducer = combineReducers({
  multiPlyTheNumber: multiPlyTheNumber,
  changeTheNumber: changeTheNumber,
});

export default reducer;
