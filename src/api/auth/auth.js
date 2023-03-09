import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-back-onrender.onrender.com/api';

// axios.defaults.baseURL = 'https://walletback-production.up.railway.app/api';

// axios.defaults.baseURL = 'https://goit-wallet-back.onrender.com/api';

// axios.defaults.baseURL = "http://localhost:4000/api/";

export const axiosSignUp = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  return data;
};

export const axiosSignIn = async userData => {
  const { data } = await axios.post('/users/signin', userData);
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.user.token}`;
  return data;
};

export const axiosSignInWithToken = async token => {
  const { data } = await axios.post('/users/signin-with-token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.user.token}`;
  return data;
};

export const axiosSignOut = async () => {
  const { data } = await axios.post('/users/signout');
  axios.defaults.headers.common['Authorization'] = null;
  return data;
};

export const axiosCurrent = async token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const { data } = await axios.get('/users/current');
  return data;
};
