import rawToast from "react-hot-toast";

const baseStyle = {
  background: "#0F130F",
  color: "#E4E6DE",
  border: "1px solid #232820",
  padding: "12px 14px",
  borderRadius: "10px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
};

export const toastOptions = {
  duration: 4000,
  style: baseStyle,
};

const toast = {
  success: (msg, opts = {}) => rawToast.success(msg, { ...toastOptions, ...opts }),
  error: (msg, opts = {}) => rawToast.error(msg, { ...toastOptions, ...opts }),
  loading: (msg, opts = {}) => rawToast.loading(msg, { ...toastOptions, ...opts }),
  dismiss: (id) => rawToast.dismiss(id),
  custom: (cb, opts = {}) => rawToast.custom(cb, { duration: 8000, ...toastOptions, ...opts }),
  raw: rawToast,
};

export default toast;
