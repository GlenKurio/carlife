import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../services/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const loginWithEmailAndPassword = async ({ email, password }) => {
    try {
      setIsLoading(true);
      setError(null);

      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userData));

        setIsLoading(false);
        toast("Welcome back!", {
          icon: "🤗",
        });
        return navigate("/host");
      }
    } catch (e) {
      setError("No user found with provided credentials");
      setIsLoading(false);
      return toast.error(error);
    }
  };

  return { loginWithEmailAndPassword, isLoading, error };
}

export default useLogin;
