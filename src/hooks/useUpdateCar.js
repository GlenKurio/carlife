import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firestore, storage } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";
import useCarDataStore from "../store/useCarDataStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
function useUpdateCar() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState();

  const car = useCarDataStore((state) => state.car);
  //   console.log(car);
  const setCar = useCarDataStore((state) => state.setCar);
  const { make, model, year, type, description, price, host, imgs, id } = car;
  //   console.log(imgs);
  async function updateCar(inputs, selectedFiles) {
    if (isUpdating) return;
    setIsUpdating(true);
    setError(null);
    const carDocRef = doc(firestore, "cars", id);
    console.log(selectedFiles);
    try {
      let newImgs = [];
      if (selectedFiles.length !== 0) {
        const storageRefs = selectedFiles.map((file, idx) => {
          const uniqueId = uuidv4();

          return ref(storage, `cars/${car.id}-${uniqueId}`);
        });
        const uploadTasks = storageRefs.map((storageRef, index) =>
          uploadString(storageRef, selectedFiles[index], "data_url")
        );

        await Promise.all(uploadTasks);

        const downloadURLs = await Promise.all(
          storageRefs.map((storageRef) => getDownloadURL(storageRef))
        );
        newImgs = [...car.imgs];
        newImgs.push(...downloadURLs);
        console.log(newImgs);
        setCar({ ...car, imgs: newImgs });
      }

      const updatedCar = {
        ...car,
        make: inputs?.make || make,
        model: inputs?.model || model,
        year: inputs?.year || year,
        type: inputs?.type || type,
        price: inputs?.price || price,
        description: inputs?.description || description,
        imgs: newImgs,
      };

      await updateDoc(carDocRef, updatedCar);
      localStorage.setItem("car-info", JSON.stringify(updatedCar));
      setCar(updatedCar);
      toast.success("Car successfully updated!");
    } catch (e) {
      toast.error(e.message);
      throw new Error(e.message);
    } finally {
      setIsUpdating(false);
    }
  }
  return { isUpdating, updateCar, error };
}

export default useUpdateCar;
