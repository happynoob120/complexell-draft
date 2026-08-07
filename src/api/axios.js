import axios from "axios";
import React from "react";
import toast from "../utils/toast";
import ValidationToast from "../components/toasts/ValidationToast";

const api = axios.create({
  baseURL: "https://complexell-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Response interceptor to surface backend validation errors with a styled toast
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const resp = error.response;
    if (resp) {
      // Show a styled toast for 400 validation errors with a details/copy action
      if (resp.status === 400) {
        const full = resp.data?.message || JSON.stringify(resp.data) || resp.statusText;
        const short = typeof full === "string" && full.length > 250 ? full.slice(0, 250) + "..." : full;

        // Use React.createElement to avoid JSX in this non-JSX file
        toast.custom(() => React.createElement(ValidationToast, { full, short }));
      }
    }

    return Promise.reject(error);
  }
);

export default api;