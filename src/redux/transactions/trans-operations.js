import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosStatistic } from 'api/transactions/statistic';

import { transactionsAPI } from 'api/transactions/transactionsApi';

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
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await transactionsAPI.postTransactions(transaction);

      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);
