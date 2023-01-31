import axios from 'axios';

const getTransactions = async (page = 1, limit = 10) => {
  const { data } = await axios.get(`/transactions?page=${page}&limit=${limit}`);
  return data;
};

const postTransactions = async transaction => {
  const { data } = await axios.post('/transactions', transaction);
  return data;
};

export const transactionsAPI = {
  getTransactions,
  postTransactions,
};
