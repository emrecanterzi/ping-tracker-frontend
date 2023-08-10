import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

interface IJob {
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
}

interface IGetJobsActionResponse {
  success: boolean;
  data: IJob[];
}

interface IToggleJobActiveActionResponse {
  success: boolean;
  data: IJob;
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

const toggleJobActiveAction = createAsyncThunk<
  IToggleJobActiveActionResponse,
  { jobId: string; isActive: boolean }
>("toggleJobActiveAction", async ({ jobId, isActive }) => {
  const response = await axios.post(
    API_URL + "/job/" + jobId,
    { isActive },
    { withCredentials: true }
  );

  return response.data;
});

export { getJobsAction, toggleJobActiveAction };
