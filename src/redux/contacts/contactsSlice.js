import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, apiRequestContacts, deleteContact } from "./contactsOps";
import { selectorFilter } from "../filter/filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRequestContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequestContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiRequestContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const isLoading = (state) => state.contacts.loading;
export const isError = (state) => state.contacts.error;
export const selectorContacts = (state) => state.contacts.items;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
    });
  }
);
