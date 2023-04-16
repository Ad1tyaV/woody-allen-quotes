const { createSlice } = require("@reduxjs/toolkit");
const initialState = require("../../data/allLines.json");

const allLinesSlice = createSlice({
  name: "woodyAllenQuotes",
  initialState: {
    allLines: initialState,
  },
  reducers: {},
});

export const woodyAllenQuotes = (state) => state.woodyAllenQuotes.allLines;

export default allLinesSlice.reducer;
