import { useLocation } from "react-router-dom";
import useFirebaseAuth from "../../../hooks/useFirebseAuthState";

function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const { user, isLoading } = useFirebaseAuth();
  const checkingUserAuth = !user && isLoading;
  const canRender = user && pathname !== "/auth";

  if (checkingUserAuth) {
    return (
      <div className="animate-pulse min-h-screen grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          # CarLife
        </span>
      </div>
    );
  }

  if (canRender) {
    return children;
  }
}

export default ProtectedRoute;
