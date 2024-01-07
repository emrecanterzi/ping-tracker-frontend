import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITime } from "../../interfaces/ITimes";
import { IServerResponse } from "../../interfaces/ServerResponse";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const getTimesAction = createAsyncThunk<IServerResponse<ITime[]>>(
  "getTimesAction",
  async () => {
    const response = await axios.get(API_URL + "/times", {
      withCredentials: true,
    });

    return response.data;
  }
);
