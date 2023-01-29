import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://goit-wallet-back.onrender.com/api',
});

const getTransactions = async (page = 1, limit = 10) => {
  const { data } = await API.get(`/transactions?page=${page}&limit=${limit}`);
  return data;
};

const postTransactions = async transaction => {
  const { data } = await API.post('/transactions', transaction);
  return data;
};

export const transactionsAPI = {
  getTransactions,
  postTransactions,
};
