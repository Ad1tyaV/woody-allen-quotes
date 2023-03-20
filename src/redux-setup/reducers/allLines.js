const initialState = require('../../data/allLines.json')

const allLines = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LINES":
      return state;
    default:
      return state;
  }
};

export default allLines;
