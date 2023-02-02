import axios from "axios";

export const axiosStatistic = async (params) => {
    const { data } = await axios.get("/transactions/statistic", {params});
    return data.data;
};
