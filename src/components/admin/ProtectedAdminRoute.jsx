import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getCurrentUser } from "../../api/auth.api";

const ProtectedAdminRoute = ({ children }) => {
  const { secret } = useParams();
  const expectedSecret = import.meta.env.VITE_ADMIN_ROUTE_SECRET || "dfljjlfajd";
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (secret !== expectedSecret) {
      setStatus("denied");
      return;
    }

    getCurrentUser()
      .then((response) => {
        if (response?.user?.role === "admin") {
          setStatus("allowed");
          return;
        }

        setStatus("denied");
      })
      .catch(() => {
        setStatus("denied");
      });
  }, [expectedSecret, secret]);

  if (status === "loading") {
    return <div className="p-8 text-[#E4E6DE]">Checking admin access...</div>;
  }

  if (status === "denied" || secret !== expectedSecret) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
