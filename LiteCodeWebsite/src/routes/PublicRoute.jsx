import { Navigate } from "react-router-dom";
import { isNavigationAllowed, clearNavigation } from "../utils/navigationGuard";

const PublicRouteGuard = ({ children }) => {
  if (!isNavigationAllowed()) {
    return <Navigate to="/" replace />;
  }

  clearNavigation(); // block refresh & direct access
  return children;
};

export default PublicRouteGuard;
