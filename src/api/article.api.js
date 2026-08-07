import api from "./axios";

export const createArticle = async (articleData) => {
  const response = await api.post("/articles", articleData);
  return response.data;
};

export const getArticles = async (page = 1, limit = 6, q = "") => {
  const query = `?page=${page}&limit=${limit}${q ? `&q=${encodeURIComponent(q)}` : ""}`;
  const response = await api.get(`/articles${query}`);
  return response.data;
};

export const getArticleBySlug = async (slug) => {
  const response = await api.get(`/articles/${slug}`);
  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await api.delete(`/articles/${id}`);
  return response.data;
};

export const getMyArticles = async () => {
  const response = await api.get("/articles/mine");

  return response.data;
};

export const getArticleForEdit = async (id) => {
  const response = await api.get(`/articles/edit/${id}`);
  return response.data;
};

export const updateArticle = async (id, data) => {
  const response = await api.patch(`/articles/${id}`, data);
  return response.data;
};

export const getFeaturedArticle = async () => {
  const response = await api.get("/articles/featured");
  return response.data;
};
