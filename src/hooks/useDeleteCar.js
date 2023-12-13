import { useState } from "react";
import useHostCarsStore from "../store/useHostCarsStore";
import { deleteObject, ref } from "firebase/storage";
import { storage, firestore } from "../services/firebase/firebase";
import useAuthStore from "../store/authStore";
import { arrayRemove, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

function useDeleteCar() {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteCar = useHostCarsStore((state) => state.deleteCar);
  const user = useAuthStore((state) => state.user);

  async function handleDeleteCar(id) {
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      const imageRef = ref(storage, `cars/${id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore, "users", user.uid);
      await deleteDoc(doc(firestore, "cars", id));

      await updateDoc(userRef, { cars: arrayRemove(id) });
      deleteCar(id);
      toast.success("Car was deleted");
    } catch (e) {
      toast.error(`Cannot delete car: ${e.message}`);
    } finally {
      setIsDeleting(false);
    }
  }

  return { isDeleting, handleDeleteCar };
}
export default useDeleteCar;
