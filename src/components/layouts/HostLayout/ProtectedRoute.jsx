import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  if (!isAuth) return navigate("/auth");

  if (isAuth) return children;
}

export default ProtectedRoute;
