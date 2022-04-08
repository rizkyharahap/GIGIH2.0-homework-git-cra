import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
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
  },
});

export const { setAccessToken, clearAccessToken } = globalSlice.actions;

export default globalSlice;
