import rawToast from "react-hot-toast";

const baseStyle = {
  background: "#0F130F",
  color: "#E4E6DE",
  border: "1px solid #232820",
  padding: "12px 14px",
  borderRadius: "10px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
};

const toast = {
  success: (msg, opts = {}) => rawToast.success(msg, { style: baseStyle, ...opts }),
  error: (msg, opts = {}) => rawToast.error(msg, { style: baseStyle, ...opts }),
  loading: (msg, opts = {}) => rawToast.loading(msg, { style: baseStyle, ...opts }),
  dismiss: (id) => rawToast.dismiss(id),
  custom: (cb, opts = {}) => rawToast.custom(cb, { duration: 8000, ...opts }),
  raw: rawToast,
};

export default toast;
