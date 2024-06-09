import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logoutn, refreshUser, register } from "./operation";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    userData: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(logoutn.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = null;
        state.token = null;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(
          logoutn.pending,
          register.pending,
          login.pending,
          refreshUser.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          logoutn.rejected,
          register.rejected,
          login.rejected,
          refreshUser.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const authReduser = authSlice.reducer;
