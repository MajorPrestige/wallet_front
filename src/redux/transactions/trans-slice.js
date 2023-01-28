import { createSlice } from '@reduxjs/toolkit';

import { statistic } from "./trans-operations";

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
    },
});

export default transactions.reducer;