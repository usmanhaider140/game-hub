import axios, { AxiosError, AxiosResponse, CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {},
});

export { AxiosError, CanceledError };
export type { AxiosResponse };
