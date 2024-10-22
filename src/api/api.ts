import axios from "axios";

const api = axios.create({
  //   baseURL: import.meta.env.BASE_URL,
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    Authorization: "Bearer yourToken",
    "Content-Type": "application/json",
  },
});

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      // Ignore cancelled requests (due to AbortController)
      console.log("Request was cancelled");
    } else {
      // Handle other errors globally
      console.error("API error:", error);
    }
    return Promise.reject(error); // Always reject to let caller handle it
  }
);

export default api;
