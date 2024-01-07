import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import jobsSlice from "../features/jobs/jobsSlice";
import responseSlice from "../features/response/responseSlice";
import timesSlice from "../features/times/timesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    job: jobsSlice,
    response: responseSlice,
    times: timesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
