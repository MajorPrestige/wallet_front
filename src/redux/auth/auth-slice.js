import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
} from 'redux/transactions/trans-operations';
import {
  signin,
  signout,
  signup,
  current,
  signinWithToken,
} from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
  firstLoading: false,
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.token = payload.user.token;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: store => {
      store.error = null;
    },
  },
  extraReducers: {
    // Signup
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = false;
      store.user = payload.user;
      store.token = null;
    },

    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Signin
    [signin.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [signin.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [signin.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // SigninWithToken
    [signinWithToken.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [signinWithToken.fulfilled]: (store, { payload }) =>
      accessAuth(store, payload),

    [signinWithToken.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Signout
    [signout.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [signout.fulfilled]: () => ({ ...initialState }),

    [signout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Current
    [current.pending]: store => {
      store.firstLoading = true;
      store.loading = true;
      store.error = null;
    },

    [current.fulfilled]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.isLogin = true;
      store.user = payload;
    },

    [current.rejected]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.error = payload;
    },
    [deleteTransaction.fulfilled]: (store, { payload }) => {
      store.user = payload.data;
      store.loading = false;
      store.error = null;
    },
    [addTransaction.fulfilled]: (store, { payload }) => {
      store.user = payload.data;
      store.loading = false;
      store.error = null;
    },
  },
});

export const { clearAuthError } = auth.actions;
export default auth.reducer;
