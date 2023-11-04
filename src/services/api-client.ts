import axios, { AxiosError, AxiosResponse, CanceledError } from "axios";
// Used for Testing Purpose
// export default axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   headers: {},
// });

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "39925ad97c484d6bbb2427cc9600f0bd",
  },
});

export { AxiosError, CanceledError };
export type { AxiosResponse };
