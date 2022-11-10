import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosSignIn, axiosSignOut, axiosSignUp } from "api/auth/auth";

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSignUp(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSignIn(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const signout = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosSignOut();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);