import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../services/firebase/firebase";
import useHostCarsStore from "../store/useHostCarsStore";
import { toast } from "react-hot-toast";

function useGetHostCars() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useAuthStore((state) => state.user);
  const { cars, setCars } = useHostCarsStore();

  useEffect(() => {
    async function getCars() {
      if (!user) return;
      setIsLoading(true);
      setCars([]);

      try {
        const q = query(
          collection(firestore, "cars"),
          where("host", "==", user.uid)
        );
        const querySnap = await getDocs(q);

        const cars = [];
        querySnap.forEach((doc) => {
          cars.push({ ...doc.data(), id: doc.id });
        });

        cars.sort((a, b) => b.createdAt - a.createdAt);

        setCars(cars);
      } catch (e) {
        setCars([]);
        toast.error(e.message);
        throw new Error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCars();
  }, [setCars, user, toast]);

  return { isLoading, cars };
}

export default useGetHostCars;
