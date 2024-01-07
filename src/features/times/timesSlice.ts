import { createSlice } from "@reduxjs/toolkit";
import { ITime } from "../../interfaces/ITimes";
import { getTimesAction } from "./asyncActions";

interface ITimesSliceInitialState {
  times: ITime[];
}

const initialState: ITimesSliceInitialState = {
  times: [],
};

const timesSlice = createSlice({
  name: "timesSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTimesAction.fulfilled, (state, { payload }) => {
      state.times = payload.data;
    });
  },
});

export const {} = timesSlice.actions;

export default timesSlice.reducer;
