import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState, useMemo } from "react";
import { firestore } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";

function useGetCarDetails(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [carData, setCarData] = useState({});
  const carId = id;

  const cachedCarData = useMemo(() => new Map(), []);

  useEffect(() => {
    async function getCarDetails() {
      setIsLoading(true);

      if (cachedCarData.has(carId)) {
        setCarData(cachedCarData.get(carId));
        setIsLoading(false);
        return;
      }

      const docRef = doc(firestore, "cars", carId);

      try {
        const docSnap = await getDoc(docRef);

        let carDetails = {};
        if (docSnap.exists()) {
          carDetails = { ...docSnap.data() };
          cachedCarData.set(carId, carDetails);
        }

        setCarData(carDetails);
      } catch (e) {
        toast.error(e.message);
        setCarData({});
      } finally {
        setIsLoading(false);
      }
    }

    getCarDetails();
  }, [carId, cachedCarData]);

  return { isLoading, carData };
}

export default useGetCarDetails;
