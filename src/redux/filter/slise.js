import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filtersSlice.actions;
export const selectorFilter = (state) => state.filters.name;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
