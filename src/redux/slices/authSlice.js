import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accessToken: null,
  refreshToken: null,
  userInfo: {},
};
export const authSlice = createSlice({
  name: "authApp",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    logOut: () => {
      return initialState;
    },

    saveInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { login, logOut, saveInfo } = authSlice.actions;
export default authSlice.reducer;
