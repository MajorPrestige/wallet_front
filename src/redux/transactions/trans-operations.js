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
      const addedTransaction = await transactionsAPI.postTransactions(
        transaction,
      );
      const transactions = await transactionsAPI.getTransactions();

      return {
        addedTransaction,
        transactions,
      };
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
);


export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async(id, {rejectWithValue}) => {
    console.log(id);
    try {
       await transactionsAPI.delTransaction(id);
      const transactions = await transactionsAPI.getTransactions();
      console.log(transactions);
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);