import axios from "axios";
import toast from "../utils/toast";

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

        toast.custom(({ id }) => (
          <div className="max-w-md px-4 py-3">
            <div className="text-sm text-[#E4E6DE]">{short}</div>
            {typeof full === "string" && full.length > 250 && (
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(full);
                    toast.success("Full details copied to clipboard");
                  }}
                  className="text-xs bg-[#11140D] border border-[#2A3025] px-3 py-1 rounded text-[#9FE6A0]"
                >
                  Copy Details
                </button>

                <button
                  onClick={() => {
                    toast.custom(() => <div className="max-w-lg px-4 py-3 text-sm text-[#E4E6DE]">{full}</div>, { duration: 20000 });
                  }}
                  className="text-xs bg-[#11140D] border border-[#2A3025] px-3 py-1 rounded text-[#9FE6A0]"
                >
                  View Details
                </button>
              </div>
            )}
          </div>
        ));
      }
    }

    return Promise.reject(error);
  }
);

export default api;