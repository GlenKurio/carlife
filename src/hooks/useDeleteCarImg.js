import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { firestore, storage } from "../services/firebase/firebase";
import useCarDataStore from "../store/useCarDataStore";
import { arrayRemove, doc, updateDoc, getDoc } from "firebase/firestore";

function useDeleteCarImg() {
  const [isDeleting, setIsDeleting] = useState(false);
  const car = useCarDataStore((state) => state.car);
  const setCar = useCarDataStore((state) => state.setCar);
  async function handleDeleteCarImg(uid, url) {
    console.log(uid);
    if (isDeleting) return;
    try {
      setIsDeleting(true);
      const imageRef = ref(storage, `cars/${uid}`);
      const carDocRef = doc(firestore, "cars", car.id);
      await deleteObject(imageRef);
      await updateDoc(carDocRef, { imgs: arrayRemove(url) });

      const newCarDocRef = doc(firestore, "cars", car.id);
      const newCarSnap = await getDoc(newCarDocRef);
      let carInfo = {};
      if (newCarSnap.exists()) {
        carInfo = { ...newCarSnap.data(), id: newCarSnap.id };
        localStorage.setItem("car-info", JSON.stringify(newCarSnap.data()));
      }
      setCar(carInfo);
      toast.success("Image Successfully deleted!");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsDeleting(false);
    }
  }

  return { isDeleting, handleDeleteCarImg };
}

export default useDeleteCarImg;
