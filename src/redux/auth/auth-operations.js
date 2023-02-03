import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosSignIn, axiosSignOut, axiosSignUp, axiosCurrent, axiosSignInWithToken } from "api/auth/auth";

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosSignUp(userData);
      const {email, password} = userData;
      dispatch(signin(({email, password})));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
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
  },
);

export const signinWithToken = createAsyncThunk(
  'auth/signin-with-token',
  async (token, { rejectWithValue }) => {
    try {
      const data = await axiosSignInWithToken(token);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
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
  },
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await axiosCurrent(auth.token);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  },
);