import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getSessionApi = async () => {
  const response = await axiosInstance.get("/auth/session");
  return response.data;
};

export const refreshSessionApi = async () => {
  const response = await axiosInstance.get("/auth/refresh");
  return response.data;
};

export const loginApi = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

export const registerVerificationApi = async (data) => {
  const response = await axiosInstance.post("/auth/register/verify", data);
  return response.data;
};

export const registerCompletionApi = async (data) => {
  const response = await axiosInstance.post("/auth/register/completion", data);
  return response.data;
};
