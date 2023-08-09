import { createSlice } from "@reduxjs/toolkit";
import { getResponsesByIdAction } from "./asyncActions";

interface IResponseSliceInitialState {
  responses: {
    userId: string;
    jobId: string;
    date: string;
    expectedStatus: number;
    status: number;
    maxResponseTime: number;
    responseTime: number;
  }[];
}

const initialState: IResponseSliceInitialState = {
  responses: [],
};

const responseSlice = createSlice({
  name: "responseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResponsesByIdAction.fulfilled, (state, { payload }) => {
      state.responses = payload.data;
    });
  },
});

export const {} = responseSlice.actions;

export default responseSlice.reducer;
