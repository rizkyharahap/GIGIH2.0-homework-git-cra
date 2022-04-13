import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTracks: [],
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    addSelectedTrack: (state, action) => {
      state.selectedTracks.push(action.payload);
    },
    removeSelectedTrack: (state, action) => {
      state.selectedTracks.splice(action.payload, 1);
    },
  },
});

export const { addSelectedTrack, removeSelectedTrack } = trackSlice.actions;
