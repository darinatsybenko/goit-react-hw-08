import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  getDeleteContact,
  postContact,
} from "../components/App/api";

export const apiRequestContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (finalContact, thunkApi) => {
    try {
      const response = await postContact(finalContact);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await getDeleteContact(contactId);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
