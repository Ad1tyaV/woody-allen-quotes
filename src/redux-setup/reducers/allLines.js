const { createSlice } = require("@reduxjs/toolkit");
const initialState = require("../../data/allLines.json");

export const allLinesSlice = createSlice({
  name: "woodyAllenQuotes",
  initialState: {
    allLines: initialState,
  },
  reducers: {},
});

export const woodyAllenQuotes = (state) => state.woodyAllenQuotes.allLines;