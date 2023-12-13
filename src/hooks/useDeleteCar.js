import { useState } from "react";
import useHostCarsStore from "../store/useHostCarsStore";
import { ref } from "firebase/storage";
import { storage } from "../services/firebase/firebase";

function useDeleteCar() {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteCar = useHostCarsStore((state) => state.deleteCar);

  async function handleDeleteCar(allowDelete) {
    if (!allowDelete) return;
    if (isDeleting) return;

    try {
      const imageRef = ref(storage);
    } catch (e) {
      throw new Error(e.message);
    } finally {
      setIsDeleting(false);
    }
  }
}
