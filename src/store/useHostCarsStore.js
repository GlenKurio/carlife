import { create } from "zustand";

const useHostCarsStore = create((set) => ({
  cars: [],
  addCar: (car) => set((state) => ({ cars: [car, ...state.cars] })),
  deleteCar: (id) =>
    set((state) => ({ cars: state.cars.filter((car) => car.id !== id) })),
  setCars: (cars) => set({ cars }),
}));

export default useHostCarsStore;
