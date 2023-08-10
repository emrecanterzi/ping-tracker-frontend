import { createSlice } from "@reduxjs/toolkit";
import { getJobsAction, toggleJobActiveAction } from "./asyncActions";
import { IJob } from "../../interfaces/Job";

interface IJobsSliceInitialState {
  jobs: IJob[];
}

const initialState: IJobsSliceInitialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobsAction.fulfilled, (state, { payload }) => {
      state.jobs = payload.data;
    });

    builder.addCase(toggleJobActiveAction.fulfilled, (state, { payload }) => {
      const job = state.jobs.find((job) => job.jobId === payload.data.jobId);

      if (job) {
        job.isActive = payload.data.isActive;
      }
    });
  },
});

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
