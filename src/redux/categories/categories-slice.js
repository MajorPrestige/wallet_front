import { createSlice } from '@reduxjs/toolkit';

import {fetchCategories} from './categories-operations.js';

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchCategories.pending]: store => {
      store.firstLoading = true;
      store.loading = true;
      store.error = null;
    },
    [fetchCategories.fulfilled]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.isLogin = true;
      store.categories = payload;
    },
    [fetchCategories.rejected]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.error = payload;
    },
  },
});

export default categories.reducer;
