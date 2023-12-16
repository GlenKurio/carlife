import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore, storage } from "../services/firebase/firebase";
import useAuthStore from "../store/authStore";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  addDoc,
  arrayUnion,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-hot-toast";

function useAddCar() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  async function addCar(carInfo, selectedFile) {
    setIsLoading(true);
    setError(null);
    if (!selectedFile) throw new Error("Please select an image");
    const newCar = {
      make: carInfo.make,
      model: carInfo.model,
      year: carInfo.year,
      price: carInfo.price,
      imgs: [],
      type: carInfo.type,
      description: carInfo.description,
      host: user.uid,
    };

    try {
      const carDocRef = await addDoc(collection(firestore, "cars"), newCar);
      const userDocRef = doc(firestore, "users", user.uid);
      const uniqueId = uuidv4();
      const imageRef = ref(storage, `cars/${carDocRef.id}-${uniqueId}`);

      await updateDoc(userDocRef, { cars: arrayUnion(carDocRef.id) });
      await uploadString(imageRef, selectedFile, "data_url");
      const URL = await getDownloadURL(imageRef);

      await updateDoc(carDocRef, { imgs: arrayUnion(URL) });

      setIsLoading(false);
      toast.success("New Car Added!");
      return navigate("/host/cars");
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      toast.error("There was an error");
      throw new Error(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  return { addCar, isLoading, error };
}

export default useAddCar;
