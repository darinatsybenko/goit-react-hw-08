import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
  },
  // Об'єкт редюсерів
  reducers: {
    addUser(state, action) {
      state.items.push(action.payload);
    },
    deleteUser(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів

export const { addUser, deleteUser } = contactsSlice.actions;
export const selectorContacts = (state) => state.contacts.items;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
