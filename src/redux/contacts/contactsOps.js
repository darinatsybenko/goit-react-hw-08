import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operation";

export const apiRequestContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await instance.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formDada, thunkApi) => {
    try {
      const response = await instance.post("/contacts", formDada);
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
      const response = await instance.delete("/contacts/{contactId}");

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
