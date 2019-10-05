import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./authorization";

export const { REACT_APP_API_URL } = process.env;

const service = (params: AxiosRequestConfig, token?: string) => {
  if (token) {
    const { headers = {} } = params;
    headers["Authorization"] = `Bearer ${token}`;
  }
  return axios(params);
}

const transport = (params: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    return service(params, token);
  } else {
    return service(params);
  }
}

export default transport;
