import { create } from "zustand";

const useCarDataStore = create((set) => ({
  car: JSON.parse(localStorage.getItem("car-info")),
  setCar: (car) => set((state) => ({ car })),
}));

export default useCarDataStore;
