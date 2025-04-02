import axios from "axios";
import { LoginRequest, LoginResponse } from "./types";

const baseURL = import.meta.env.VITE_API_URL;

const axiosApi = axios.create({
  baseURL: baseURL,
});

export const axiosAuthorizedApi = axios.create({
  baseURL: baseURL,
});

axiosAuthorizedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const login = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  const response = await axiosApi.post("/api/login/", credentials);
  return response.data;
};
