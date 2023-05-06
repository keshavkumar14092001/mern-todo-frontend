import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

const customReducer = createReducer(initialState, {
  currentValue: (state, action) => {
    state.total = action.payload;
  },
});

export default customReducer;
