import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { redirect } from "react-router-dom";

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
      localStorage.setItem("isLoggedin", true);
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
      localStorage.setItem("isLoggedin", true);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export function getAuth() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("isLoggedin", true);
      return redirect("/host");
    } else {
      localStorage.setItem("isLoggedin", false);
      return redirect("/auth");
    }
  });
}
