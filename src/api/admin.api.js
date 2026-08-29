import api from "./axiosClient";

export const getAdminOverview = async () => {
  const response = await api.get("/admin/overview");
  return response.data;
};

export const getAdminUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

export const getAdminArticles = async () => {
  const response = await api.get("/admin/articles");
  return response.data;
};

export const banUser = async (userId, reason = "Admin action") => {
  const response = await api.patch(`/admin/users/${userId}/ban`, { ban: true, reason });
  return response.data;
};

export const unbanUser = async (userId) => {
  const response = await api.patch(`/admin/users/${userId}/unban`, { ban: false });
  return response.data;
};
