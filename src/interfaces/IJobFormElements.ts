export interface IJobFormElements {
  title: string;
  url: string;
  expectedStatus: number;
  maxResponseTime: number;
  delay: string;
  method: string;
  isActive: boolean;
  requestBody?: object;
  requestHeaders?: object;
}
