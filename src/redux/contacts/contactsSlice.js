import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiRequestContacts } from "../contactsOps";
import { selectorFilter } from "../filter/filtersSlice";


const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => builder
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

export const selectFilteredContacts = createSelector(
[selectorContacts,selectorFilter ], (contacts, filter) => {
contacts.filter((contact) => {
  return(
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  )
})  


}
)

export const { addUser, deleteUser } = contactsSlice.actions;
export const isLoading = (state) => state.contacts.loading;
export const isError = (state) => state.contacts.error;
export const selectorContacts = (state) => state.contacts.items.items;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
