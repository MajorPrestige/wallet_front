import { createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosCurrent } from 'api/auth/auth';

import { axiosStatistic } from 'api/transactions/statistic';

import { transactionsAPI } from 'api/transactions/transactionsApi';
// import { getTransactions } from './trans-selectors.js';
import { current } from '../auth/auth-operations.js';

export const fetchStatistic = createAsyncThunk(
  'transactions/statistic',
  async (params, { rejectWithValue }) => {
    try {
      const data = await axiosStatistic(params);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);

export const fetchTransactions = createAsyncThunk(
  'transactions',
  async (_, { rejectWithValue }) => {
    try {
      const data = await transactionsAPI.getTransactions();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);

export const fetchPaginationTransactions = createAsyncThunk(
  'transactions/pagination',
  async (params, { rejectWithValue }) => {
    try {
      const data = await transactionsAPI.getPaginationTransactions(params);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transaction',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const addedTransaction = await transactionsAPI.postTransactions(
        transaction,
      );
      dispatch(fetchTransactions());
      dispatch(current());

      return {
        addedTransaction,
      };
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);


export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async(id, {rejectWithValue, getState, dispatch}) => {
    try {
      await transactionsAPI.delTransaction(id);
      dispatch(fetchTransactions());
      dispatch(current());
      // const transactions = await transactionsAPI.getTransactions();
      // const { auth } = getState();
      // const data = await axiosCurrent(auth.token);

      // return {transactions, data};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
