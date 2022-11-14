import { createSlice } from "@reduxjs/toolkit";
import { signin, signout, signup, current } from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null,
  firstLoading: false,
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.token = payload.token;
};

const auth = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // Signup
    [signup.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [signup.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Signin
    [signin.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [signin.fulfilled]: (store, { payload }) => accessAuth(store, payload),

    [signin.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Signout
    [signout.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [signout.fulfilled]: () => ({ ...initialState }),

    [signout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // Current
    [current.pending]: (store) => {
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
  },
});

export default auth.reducer;
