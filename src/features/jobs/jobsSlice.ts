import { createSlice } from "@reduxjs/toolkit";
import { getJobsAction } from "./asyncActions";

export interface IJOB {
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

interface IJobsSliceInitialState {
  jobs: IJOB[];
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
  },
});

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
