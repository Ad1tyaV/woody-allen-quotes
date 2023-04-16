import { configureStore } from "@reduxjs/toolkit";
import allLinesReducer from "../reducers/allLines";

const store = configureStore({
  reducer: {
    woodyAllenQuotes: allLinesReducer,
  },
});

export default store;
