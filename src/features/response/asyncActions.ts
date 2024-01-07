import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IServerResponse } from "../../interfaces/ServerResponse";
import { IResponse } from "../../interfaces/Response";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

interface IGetResponsesByIdActionProps {
  jobId: string;
  startDate: number;
  endDate: number;
}

export const getResponsesByIdAction = createAsyncThunk<
  IServerResponse<IResponse[]>,
  IGetResponsesByIdActionProps
>("getResponsesByIdAction", async ({ jobId, startDate, endDate }) => {
  const response = await axios.get(
    API_URL +
      "/response/" +
      jobId +
      `?startDate=${startDate}&endDate=${endDate}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
});
