export interface IResponse {
  _id: string;
  userId: string;
  jobId: string;
  date: string;
  expectedStatus: number;
  status: number;
  maxResponseTime: number;
  responseTime: number;
  requestBody?: object;
  requestHeaders?: object;
  responseBody?: object;
  responseHeaders?: object;
}
