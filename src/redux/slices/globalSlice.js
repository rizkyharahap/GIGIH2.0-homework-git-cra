import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = "";
    },
  },
});

export const { setAccessToken, clearAccessToken } = globalSlice.actions;

export default globalSlice;
