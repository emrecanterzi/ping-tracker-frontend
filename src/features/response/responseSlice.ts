import { createSlice } from "@reduxjs/toolkit";
import { getResponsesByIdAction } from "./asyncActions";
import { IResponse } from "../../interfaces/Responce";

interface IResponseSliceInitialState {
  responses: IResponse[];
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
