import { useEffect, useState } from "react";
import { firestore } from "../services/firebase/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";

function useGetCars() {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      setIsLoading(true);

      const q = query(collection(firestore, "cars"));
      try {
        const querySnap = await getDocs(q);
        const carsData = [];
        querySnap.forEach((doc) => {
          carsData.push({ ...doc.data(), id: doc.id });
        });
        setCars(carsData);
      } catch (e) {
        toast.error(e.message);
        setCars([]);
      } finally {
        setIsLoading(false);
      }
    }
    getCars();
  }, []);

  return { isLoading, cars };
}

export default useGetCars;
