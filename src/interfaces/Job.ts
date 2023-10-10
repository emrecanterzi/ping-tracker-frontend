export interface IJob {
  userId: string;
  jobId: string;
  title: string;
  url: string;
  expectedStatus: number;
  maxResponseTime: number;
  delay: string;
  method: string;
  isActive: boolean;
  isDeleted: boolean;
  requestBody?: object;
  requestHeaders?: object;
}
