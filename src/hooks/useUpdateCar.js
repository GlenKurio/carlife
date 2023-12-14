import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";
import useCarDataStore from "../store/useCarDataStore";
function useUpdateCar() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState();

  const car = useCarDataStore((state) => state.car);
  //   console.log(car);
  const setCar = useCarDataStore((state) => state.setCar);
  const { make, model, year, type, description, price, host, imgs, id } = car;

  async function updateCar(inputs) {
    if (isUpdating) return;
    setIsUpdating(true);
    setError(null);
    const carDocRef = doc(firestore, "cars", id);

    const upImgs = [];
    const updatedCar = {
      ...car,
      make: inputs.make || make,
      model: inputs.model || model,
      year: inputs.year || year,
      type: inputs.type || type,
      price: inputs.price || price,
      description: inputs.description || description,
      imgs: imgs,
    };

    try {
      await updateDoc(carDocRef, updatedCar);
      localStorage.setItem("car-info", JSON.stringify(updatedCar));
      setCar(updatedCar);
      toast.success("Car successfully updated!");
    } catch (e) {
      toast.error(e.message);
      throw new Error(e);
    } finally {
      setIsUpdating(false);
    }
  }
  return { isUpdating, updateCar, error };
}

export default useUpdateCar;
