import { Navigate, useLocation } from "react-router-dom";
import useFirebaseAuth from "../../../hooks/useFirebseAuthState";

function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const { user, isLoading } = useFirebaseAuth();
  const checkingUserAuth = !user && isLoading;
  const canRender = user && pathname !== "/auth";

  if (checkingUserAuth) {
    return (
      <div className="grid place-content-center min-h-screen">Loading...</div>
    );
  }

  if (canRender) {
    return <>{children}</>;
  }
}

export default ProtectedRoute;
