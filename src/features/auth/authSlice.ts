import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "./asyncActions";

const initialState = {
  user: {
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { type, payload }) => {
      state.user.userId = payload.data.userId;
      state.user.email = payload.data.email;
      state.user.firstName = payload.data.firstName;
      state.user.lastName = payload.data.lastName;
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
