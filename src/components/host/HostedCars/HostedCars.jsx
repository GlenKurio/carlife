import { Link } from "react-router-dom";
import HostedCarsCard from "./HostedCarsCard";

import { useState } from "react";
import AddHostedCarForm from "./AddHostedCarForm";
import useHostCarsStore from "../../../store/useHostCarsStore";
import useGetHostCars from "../../../hooks/useGetHostCars";
import { toast } from "react-hot-toast";
function HostedCars() {
  const { isLoading, error, cars } = useGetHostCars();

  if (isLoading)
    return (
      <div className="h-screen grid place-content-center">Loading cars...</div>
    );
  console.log(cars);
  if (error) toast.error(error.message);
  return (
    <>
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex flex-col gap-2 md:flex-row md:gap-8 pt-8 pb-4">
          <h1 className="text-xl md:text-3xl font-semibold text-blue-950 text-center">
            {cars.length > 0
              ? `You have ${cars.length} hosted cars`
              : "You don`t have hosted cars yet."}
          </h1>
          <Link
            to="/host/add-car"
            className="text-xs text-blue-950 font-semibold border-solid py-1 px-2 bg-transparent border-[1px] border-blue-700 rounded-md hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-transparent hover:text-blue-50 active:scale-95 flex items-center justify-center "
          >
            + Add new car
          </Link>
        </div>
        <div className="grid grid-cols-cards gap-4">
          {cars.map((hCar) => (
            <HostedCarsCard car={hCar} key={hCar.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HostedCars;
