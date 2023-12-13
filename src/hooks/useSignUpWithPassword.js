import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../services/firebase/firebase";
import useAuthStore from "../store/authStore";
function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const loggedInUser = useAuthStore((state) => state.login);
  const signupWithEmailAndPassword = async ({ fullName, email, password }) => {
    try {
      setIsLoading(true);
      setError(null);

      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!newUser) {
        throw new Error("Failed to create user");
      }

      const userDoc = {
        uid: newUser.user.uid,
        email: email,
        fullName: fullName,
        profilePicURL: "",
        cars: [],
        createdAt: Date.now(),
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loggedInUser(userDoc);
      setIsLoading(false);
      toast("Welcome", {
        icon: "🤗",
      });
      return navigate("/host");
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      return toast.error(error);
    }
  };

  return { signupWithEmailAndPassword, isLoading, error };
}

export default useSignup;
