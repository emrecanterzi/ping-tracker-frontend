import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJob } from "../../interfaces/Job";
import { IServerResponse } from "../../interfaces/ServerResponse";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const getJobsAction = createAsyncThunk<IServerResponse<IJob[]>>(
  "getJobsAction",
  async () => {
    const response = await axios.get(API_URL + "/job", {
      withCredentials: true,
    });

    return response.data;
  }
);

const toggleJobActiveAction = createAsyncThunk<
  IServerResponse<IJob>,
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
