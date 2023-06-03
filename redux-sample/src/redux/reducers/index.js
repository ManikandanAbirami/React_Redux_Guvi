import { combineReducers } from "redux";
import addUserReducer from "./addUserReducer";

const reducers = combineReducers({
  addUserReducer: addUserReducer,
});

export default reducers;
