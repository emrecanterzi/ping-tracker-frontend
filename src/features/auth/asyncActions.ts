import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ILoginActionProps {
  email: string;
  password: string;
}
interface ILoginActionResponse {
  success: boolean;
  data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userId: string;
  };
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

export { loginAction };
