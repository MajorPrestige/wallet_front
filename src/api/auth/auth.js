import axios from "axios";

axios.defaults.baseURL = "https://goit-wallet-back.onrender.com/api";

export const axiosSignUp = async (userData) => {
  const { data } = await axios.post("/users/register", userData);
  return data;
};

export const axiosSignIn = async (userData) => {
  const { data } = await axios.post("/users/login", userData);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.user.token}`;
  return data;
};

export const axiosSignOut = async () => {
  const { data } = await axios.post("/users/logout");
  axios.defaults.headers.common["Authorization"] = null;
  return data;
};

export const axiosCurrent = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get("/users/current");
  return data;
};
