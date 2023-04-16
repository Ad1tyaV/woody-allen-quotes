import { configureStore } from "@reduxjs/toolkit";
import { allLinesSlice } from "../reducers/allLines";

const store = configureStore({
  reducer: {
    woodyAllenQuotes: allLinesSlice.reducer
  },
});

export default store;
