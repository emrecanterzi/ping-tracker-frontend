import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

interface IGetResponsesByIdActionProps {
  jobId: string;
}

interface IGetResponsesByIdActionResponse {
  success: boolean;
  data: {
    userId: string;
    jobId: string;
    date: string;
    expectedStatus: number;
    status: number;
    maxResponseTime: number;
    responseTime: number;
  }[];
}

export const getResponsesByIdAction = createAsyncThunk<
  IGetResponsesByIdActionResponse,
  IGetResponsesByIdActionProps
>("getResponsesByIdAction", async ({ jobId }) => {
  const response = await axios.get(API_URL + "/response/" + jobId, {
    withCredentials: true,
  });

  return response.data;
});
