import api from "./axiosClient";

export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post("/auth/login", userData);

  if (response.data?.token) {
    localStorage.setItem("authToken", response.data.token);
  }

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  localStorage.removeItem("authToken");
  return response.data;
};

export const resendVerification = async (email) => {
  const response = await api.post("/auth/resend-verification", {
    email,
  });

  return response.data;
};
