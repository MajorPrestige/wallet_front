import axios from 'axios';

// axios.defaults.baseURL = "https://goit-wallet-back.onrender.com/api";

export const getAllCategories = async params => {
  const { data } = await axios.get('/categories', params);
  return data;
};
