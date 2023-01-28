import axios from "axios";

// axios.defaults.baseURL = "https://goit-wallet-back.onrender.com/api";

export const axiosStatistic = async (params) => {
    const { data } = await axios.get("/transactions/statistic", {params});
    return data.data.statistic;
};