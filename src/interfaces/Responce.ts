export interface IResponse {
  userId: string;
  jobId: string;
  date: string;
  expectedStatus: number;
  status: number;
  maxResponseTime: number;
  responseTime: number;
}
