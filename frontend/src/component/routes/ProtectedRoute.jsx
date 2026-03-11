import { Navigate } from "react-router-dom";
import { getValidAccessToken } from "../../utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getValidAccessToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;