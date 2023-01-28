import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosStatistic } from "api/transactions/statistic";

export const statistic = createAsyncThunk(
    "/transactions/statistic",
    async (params, { rejectWithValue }) => {
        try {
            const data = await axiosStatistic(params);
            return data;
        }
        catch (error) {
            const { data, status } = error.response;
            return rejectWithValue({ data, status });
        }
    },
);