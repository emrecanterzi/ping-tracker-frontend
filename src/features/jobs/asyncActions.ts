import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

interface IGetJobsActionResponse {
  success: boolean;
  data: {
    userId: string;
    jobId: string;
    title: string;
    url: string;
    expectedStatus: number;
    maxResponseTime: number;
    delay: string;
    method: string;
    isActive: boolean;
    isDeleted: boolean;
  }[];
}

const getJobsAction = createAsyncThunk<IGetJobsActionResponse>(
  "getJobsAction",
  async () => {
    const response = await axios.get(API_URL + "/job", {
      withCredentials: true,
    });

    return response.data;
  }
);

export { getJobsAction };
