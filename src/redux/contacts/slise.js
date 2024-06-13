import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { selectorFilter } from "../filter/slise";
import { addContact, apiRequestContacts, deleteContact } from "./operation";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRequestContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          deleteContact.rejected,
          apiRequestContacts.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteContact.pending,
          addContact.pending,
          apiRequestContacts.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      ),
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
