import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isNavbarOpen: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      // Redux default immer can assing mutable state
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = '';
    },
    setNavbarOpen: (state, action) => {
      state.isNavbarOpen = action.payload;
    },
  },
});

export const { setAccessToken, clearAccessToken, setNavbarOpen } = globalSlice.actions;
