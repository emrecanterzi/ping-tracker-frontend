import { createSlice } from "@reduxjs/toolkit";
import { getResponsesByIdAction } from "./asyncActions";
import { IResponse } from "../../interfaces/Response";

interface IResponseSliceInitialState {
  responses: IResponse[];
  startDate: number;
  endDate: number;
}
const initialState: IResponseSliceInitialState = {
  responses: [],
  startDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
  endDate: Date.now(),
};

const responseSlice = createSlice({
  name: "responseSlice",
  initialState,
  reducers: {
    addResponse: (
      state,
      { type, payload }: { type: string; payload: IResponse }
    ) => {
      state.responses.push(payload);
    },
    setDateFilters: (
      state,
      {
        type,
        payload,
      }: { type: string; payload: { startDate: number; endDate: number } }
    ) => {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getResponsesByIdAction.fulfilled, (state, { payload }) => {
      state.responses = payload.data;
    });
  },
});

export const { addResponse, setDateFilters } = responseSlice.actions;

export default responseSlice.reducer;
