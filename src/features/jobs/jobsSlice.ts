import { createSlice } from "@reduxjs/toolkit";
import {
  createJobAction,
  deleteJobAction,
  getJobsAction,
  toggleJobActiveAction,
  updateJobAction,
} from "./asyncActions";
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

    builder.addCase(createJobAction.fulfilled, (state, { payload }) => {
      state.jobs.push(payload.data);
    });

    builder.addCase(updateJobAction.fulfilled, (state, { payload }) => {
      state.jobs = state.jobs.map((job) =>
        job.jobId !== payload.data.jobId ? job : payload.data
      );
    });

    builder.addCase(deleteJobAction.fulfilled, (state, { payload }) => {
      state.jobs = state.jobs.filter((job) => job.jobId !== payload.data.jobId);
    });
  },
});

// export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
