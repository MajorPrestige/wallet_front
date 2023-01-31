import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  statistic,
  addTransaction,
} from './trans-operations';

const initialState = {
  statistic: [],
  isLogin: false,
  loading: false,
  error: null,
  firstLoading: false,
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [statistic.pending]: store => {
      store.firstLoading = true;
      store.loading = true;
      store.error = null;
    },

    [statistic.fulfilled]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.isLogin = true;
      store.statistic = payload;
    },

    [statistic.rejected]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.error = payload;
    },

    [fetchTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactions.fulfilled]: (store, { payload }) => {
      store.statistic = payload;
      store.loading = false;
      store.error = null;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },

    [addTransaction.pending]: store => {
      store.loading = true;
    },
    [addTransaction.fulfilled]: (store, { payload }) => {
      store.statistic.transactions = [
        ...store.statistic.transactions,
        payload.transaction,
      ];
      store.loading = false;
      store.error = null;
    },
    [addTransaction.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
  },
});

export default transactions.reducer;
