import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAllContacts } from "../components/App/api";

export const apiRequestContacts = createAsyncThunk(
  "contacs/getContacs",
  async (contactsId, thunkApi) => {
    try {
      const data = await requestAllContacts(contactsId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
