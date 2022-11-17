import axios from "axios";

axios.defaults.baseURL = "https://wallet.goit.ua/api";

export const axiosSignUp = async (userData) => {
  const { data } = await axios.post("/auth/sign-up", userData);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data;
};

export const axiosSignIn = async (userData) => {
  const { data } = await axios.post("/auth/sign-in", userData);
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  return data;
};

export const axiosSignOut = async () => {
  const { data } = await axios.delete("/auth/sign-out");
  axios.defaults.headers.common["Authorization"] = null;
  return data;
};

export const axiosCurrent = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get("/users/current");
  return data;
};
