import { createSlice } from "@reduxjs/toolkit";
import { signin, signout, signup } from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null,
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
  },
});

export default auth.reducer;
