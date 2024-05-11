import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  filters: {
    name: "",
  },
};
const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
