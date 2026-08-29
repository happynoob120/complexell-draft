import axios from "axios";
import React from "react";
import toast from "../utils/toast";
import ValidationToast from "../components/toasts/ValidationToast";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "https://complexell-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

// Response interceptor to surface backend validation errors with a styled toast
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const resp = error.response;
    if (resp) {
      // Show a styled toast for 400 validation errors with a details/copy action
      if (resp.status === 400) {
        // Prefer structured validation errors when present
        let full = resp.data?.message || JSON.stringify(resp.data) || resp.statusText;
        let short = full;

        if (Array.isArray(resp.data?.errors) && resp.data.errors.length > 0) {
          const messages = resp.data.errors.map((e) => {
            const label = e.path === "article_title" ? "Title" : e.path === "article_context" ? "Context" : e.path || e.location || "Field";
            return `${label}: ${e.msg}`;
          });

          short = messages.join(" · ");

          full = resp.data.errors
            .map((e) => {
              const label = e.path === "article_title" ? "Title" : e.path === "article_context" ? "Context" : e.path || e.location || "Field";
              const value = e.value ? `\nValue: ${e.value}` : "";
              return `${label}: ${e.msg}${value}`;
            })
            .join("\n\n");
        } else if (typeof full === "object") {
          full = JSON.stringify(full, null, 2);
          short = full.length > 250 ? full.slice(0, 250) + "..." : full;
        }

        // Use React.createElement to avoid JSX in this non-JSX file
        toast.custom(() => React.createElement(ValidationToast, { full, short }));
      }
    }

    return Promise.reject(error);
  }
);

export default api;
