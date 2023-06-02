import { createStore } from "redux";
import addUserReducer from "./reducers/addUserReducer";

const store = createStore(
  addUserReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();
export default store;
