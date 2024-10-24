export interface ResultInterface<T> {
  status: "success" | "fail" | "error";
  statusCode: number;
  message: string;
  data?: T;
}
