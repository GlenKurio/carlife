import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
function useFirebaseAuth() {
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
        if (!user && pathname !== "/auth")
          toast("Need to login first", {
            icon: "☝",
          });
        navigate("/auth");
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component unmounts
    };
  }, []);

  return { user, isLoading };
}

export default useFirebaseAuth;
