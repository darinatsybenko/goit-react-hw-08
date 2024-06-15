import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { addContact, apiRequestContacts, deleteContact } from "./operations";
import { logoutn } from "../auth/operations";

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
      .addCase(logoutn.fulfilled, (state) => {
        (state.items = []), (state.loading = false);
        state.error = null;
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
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
