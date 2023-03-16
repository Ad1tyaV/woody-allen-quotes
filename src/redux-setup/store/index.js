import { combineReducers, createStore } from "redux";
import allLines from "../reducers/allLines";

const rootReducer = combineReducers({
  allLines: allLines,
});

const store = createStore(rootReducer);

export default store;
