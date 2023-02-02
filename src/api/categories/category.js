import axios from 'axios';

// axios.defaults.baseURL = "https://goit-wallet-back.onrender.com/api";

export const getAllCategories = async ()=> {
  const { data } = await axios.get('/categories');
  return data.data.result;
};
