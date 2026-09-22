import api from "./axiosClient";

export const diagnoseCode = async (code, language, apiKey) => {
  const response = await api.post("/code-debug/diagnose", { code, language, apiKey });
  return response.data;
};
