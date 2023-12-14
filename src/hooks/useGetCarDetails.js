import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState, useMemo } from "react";
import { firestore } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";
import useCarDataStore from "../store/useCarDataStore";

function useGetCarDetails(id) {
  const [isLoading, setIsLoading] = useState(true);
  const car = useCarDataStore((state) => state.car);
  const setCar = useCarDataStore((state) => state.setCar);
  const carId = id;

  useEffect(() => {
    async function getCarDetails() {
      setIsLoading(true);

      const docRef = doc(firestore, "cars", carId);

      try {
        const docSnap = await getDoc(docRef);

        let carDetails = {};
        if (docSnap.exists()) {
          carDetails = { ...docSnap.data(), id: docSnap.id };
          localStorage.setItem("car-info", JSON.stringify(carDetails));
        }

        setCar(carDetails);
      } catch (e) {
        toast.error(e.message);
        setCar({});
      } finally {
        setIsLoading(false);
      }
    }

    getCarDetails();
  }, []);

  return { isLoading, car };
}

export default useGetCarDetails;
