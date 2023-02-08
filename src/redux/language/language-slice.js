import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: "en",
      },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;