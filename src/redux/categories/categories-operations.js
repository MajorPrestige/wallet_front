import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllCategories } from '../../api/categories/category.js';

export const fetchCategories = createAsyncThunk(
  'categories/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllCategories();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);
