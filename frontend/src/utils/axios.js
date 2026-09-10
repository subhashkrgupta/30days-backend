import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api/v1"
    : import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
  withCredentials: true,
});
console.log(import.meta.env.MODE);
const MAX_RETRIES = 3;
const RETRY_DELAY = 500;

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: add auth token here
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const config = error.config;

    // No request config available
    if (!config) {
      return Promise.reject(error);
    }

    // Initialize retry counter
    config._retryCount = config._retryCount || 0;

    const status = error.response?.status;

    // Retry only transient errors
    const shouldRetry =
      !error.response || // Network error / timeout
      status === 408 ||
      status === 429 ||
      status >= 500;

    if (!shouldRetry || config._retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    }

    config._retryCount += 1;

    // Exponential backoff: 500ms, 1000ms, 2000ms
    const delay = RETRY_DELAY * 2 ** (config._retryCount - 1);

    await new Promise((resolve) => setTimeout(resolve, delay));

    return axiosInstance(config);
  },
);

export default axiosInstance;
