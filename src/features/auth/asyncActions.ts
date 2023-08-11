import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IServerResponse } from "../../interfaces/ServerResponse";
import { IUser } from "../../interfaces/User";

interface ILoginActionProps {
  email: string;
  password: string;
}
interface ILoginActionResponse {
  success: boolean;
  data: IUser;
  token: string;
}

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const loginAction = createAsyncThunk<ILoginActionResponse, ILoginActionProps>(
  "loginAction",
  async ({ email, password }) => {
    const response = await axios.post(
      API_URL + "/auth/login",
      { email, password },
      { withCredentials: true }
    );

    return response.data;
  }
);

const getProfileAction = createAsyncThunk<IServerResponse<IUser>>(
  "getProfileAction",
  async () => {
    const response = await axios.get(API_URL + "/auth/profile", {
      withCredentials: true,
    });

    return response.data;
  }
);

export { loginAction, getProfileAction };
