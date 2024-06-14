import { createSelector } from "@reduxjs/toolkit";
import { selectorFilter } from "../filter/selectors";

export const isLoading = (state) => state.contacts.loading;
export const isError = (state) => state.contacts.error;
export const selectorContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
    });
  }
);
