import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
};
const contactsSlice = createSlice({
  name: "contacts",

  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addUser(state, action) {
      state.contacts.push(action.payload);
    },
    deleteUser(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів

export const { addUser, deleteUser } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
