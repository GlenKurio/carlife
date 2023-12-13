import { useState } from "react";
import useAuthStore from "../store/authStore";
import { toast } from "react-hot-toast";
import { firestore } from "../services/firebase/firebase";

import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { auth, storage } from "../services/firebase/firebase";
import { updateEmail, updatePassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
function useEditProfile() {
  const [isUpdating, setIsUpdating] = useState(false);

  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);

  async function editProfile(inputs, selectedFile) {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }

      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        email: inputs.email || authUser.email,
        profilePicURL: URL || authUser.profilePicURL,
      };

      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      toast.success("Profile successfully updated!");
    } catch (e) {
      toast.error(e.message);
      setIsUpdating(false);
    } finally {
      setIsUpdating(false);
    }
  }

  return { editProfile, isUpdating };
}

export default useEditProfile;
