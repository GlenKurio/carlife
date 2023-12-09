import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/firebase/firebase";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("isLoggedin", true);
        return navigate("/host");
      } else {
        localStorage.setItem("isLoggedin", false);
        return navigate("/auth");
      }
    });
  }, []);
  const canRender = localStorage.getItem("isLoggedin");
  console.log(canRender);
  return <>{canRender ? children : <Navigate to="/auth" replace={true} />}</>;
}

export default ProtectedRoute;
