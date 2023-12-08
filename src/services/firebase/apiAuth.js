import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function signupWithEmailAndPassword(inputs) {
  try {
    const newUser = await createUserWithEmailAndPassword(
      auth,
      inputs.email,
      inputs.password
    );

    if (!newUser && error) {
      throw new Error(error.message);
    }

    if (newUser) {
      const userDoc = {
        uid: newUser.user.uid,
        email: inputs.email,
        fullName: inputs.fullname,
        profilePicURL: "",
        cars: [],
        createdAt: Date.now(),
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
    }
  } catch (e) {
    throw new Error(e.message);
  }
}
