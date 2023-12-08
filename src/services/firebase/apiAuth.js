import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function loginWithEmailAndPassword(inputs) {
  try {
    const userCred = await signInWithEmailAndPassword(
      auth,
      inputs.email,
      inputs.password
    );
    if (!userCred && error) {
      throw new Error("User with provided credentals not found");
    }
    if (userCred) {
      const docRef = doc(firestore, "users", userCred.user.uid);
      const docSnap = await getDoc(docRef);
      const userData = docSnap.data();
      localStorage.setItem("user-info", JSON.stringify(userData));
      return userData;
    }
  } catch (error) {
    return { error: error.message };
  }
}

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
