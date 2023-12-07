import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";
const carsRef = collection(firestore, "cars");

export async function setDocas() {
  await setDoc(doc(carsRef, "SF"), {
    host: "asfsdgasdg",
    createdAt: new Date(),
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    price: 1700,
    imgs: [],
    type: "sport",
  });
  await setDoc(doc(carsRef, "StssF"), {
    host: "asfasf",
    createdAt: new Date(),
    make: "Rolls Royce",
    model: "Ghost",
    year: 2023,
    price: 1900,
    imgs: [],
    type: "luxury",
  });
}
