import axios from 'axios';

const getTransactions = async params => {
  const { data } = await axios.get(`/transactions`, { params });
  return data.transactions;
};

const getPaginationTransactions = async () => {
  const { data } = await axios.get(`/transactions/pagination`);
  return data.transactions;
};

const postTransactions = async transaction => {
  const { data } = await axios.post('/transactions',  transaction );
  return data.result;
};

const delTransaction= async id => {
  const { data } = await axios.delete(`/transactions/${id}`);
  return data;
};

export const transactionsAPI = {
  getTransactions,
  getPaginationTransactions,
  postTransactions,
  delTransaction,
};
