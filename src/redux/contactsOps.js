import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../components/App/api";

export const apiRequestContacts = createAsyncThunk(
  "contacs/fetchAll",
  async (contactsId, thunkApi) => {
    try {
      const data = await getContacts(contactsId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
