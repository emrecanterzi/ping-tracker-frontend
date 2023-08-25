import { createSlice } from "@reduxjs/toolkit";
import { getProfileAction, loginAction, signUpAction } from "./asyncActions";
import { IUser } from "../../interfaces/User";

interface IInitialState {
  user: IUser;
  token: string;
  loginned: boolean;
}

const initialState: IInitialState = {
  user: {
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  token: "",
  loginned: false,
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
      state.loginned = true;
      localStorage.setItem("token", payload.token);
    });

    builder.addCase(signUpAction.fulfilled, (state, { type, payload }) => {
      state.user.userId = payload.data.userId;
      state.user.email = payload.data.email;
      state.user.firstName = payload.data.firstName;
      state.user.lastName = payload.data.lastName;
      state.token = payload.token;
      state.loginned = true;
      localStorage.setItem("token", payload.token);
    });

    builder.addCase(getProfileAction.fulfilled, (state, { type, payload }) => {
      state.user.email = payload.data.email;
      state.user.firstName = payload.data.firstName;
      state.user.lastName = payload.data.lastName;
      state.user.userId = payload.data.userId;
      state.loginned = true;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
