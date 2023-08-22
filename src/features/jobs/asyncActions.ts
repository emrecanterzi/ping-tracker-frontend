import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJob } from "../../interfaces/Job";
import { IServerResponse } from "../../interfaces/ServerResponse";
import { IJobFormElements } from "../../interfaces/IJobFormElements";

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

const createJobAction = createAsyncThunk<
  IServerResponse<IJob>,
  IJobFormElements
>(
  "createJobAction",
  async ({
    title,
    url,
    expectedStatus,
    maxResponseTime,
    delay,
    method,
    isActive,
  }) => {
    const response = await axios.post(
      API_URL + "/job",
      { title, url, expectedStatus, maxResponseTime, delay, method, isActive },
      { withCredentials: true }
    );

    return response.data;
  }
);

interface IUpdateJobActionProps extends IJobFormElements {
  jobId: string;
}

const updateJobAction = createAsyncThunk<
  IServerResponse<IJob>,
  IUpdateJobActionProps
>(
  "updateJobAction",
  async ({
    jobId,
    delay,
    expectedStatus,
    isActive,
    maxResponseTime,
    method,
    title,
    url,
  }) => {
    const response = await axios.post(
      API_URL + "/job/" + jobId,
      {
        title,
        url,
        expectedStatus,
        maxResponseTime,
        delay,
        method,
        isActive,
      },
      { withCredentials: true }
    );

    return response.data;
  }
);

const deleteJobAction = createAsyncThunk<
  IServerResponse<IJob>,
  { jobId: string }
>("deleteJobAction", async ({ jobId }) => {
  const response = await axios.delete(API_URL + "/job/" + jobId, {
    withCredentials: true,
  });

  return response.data;
});

export {
  getJobsAction,
  toggleJobActiveAction,
  createJobAction,
  updateJobAction,
  deleteJobAction,
};
