import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

const carsRef = collection(firestore, "cars");

export default async function getCars() {
  try {
    const cars = [];

    const querySnapshot = await getDocs(carsRef);
    querySnapshot.forEach((doc) => {
      cars.push({ ...doc.data(), id: doc.id });
    });
    console.log(cars);
    return cars;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getHostCars(hostId) {
  const q = query(carsRef, where("host", "==", hostId));
  try {
    const hostCars = [];

    const hostCarsSnap = getDocs(q);
    (await hostCarsSnap).forEach((doc) => {
      hostCars.push({ ...doc.data(), id: doc.id });
    });
  } catch (e) {
    throw new Error(e.message);
  }
}
