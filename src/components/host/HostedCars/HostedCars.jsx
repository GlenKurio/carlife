import { Link } from "react-router-dom";
import HostedCarsCard from "./HostedCarsCard";
import Modal from "../../Modal";
import { useState } from "react";
import AddHostedCarForm from "./AddHostedCarForm";
const hostedCars = [
  {
    id: 1, // gonns be user id, as well as document id
    createdAt: "",
    make: "Rolls Royce",
    model: "Ghost",
    year: 2023,
    price: 1200,
    img: "/carimgs/ghost.webp",
    classen: "luxury",
  },
  {
    id: 2,
    createdAt: "",
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    price: 1700,
    img: "/carimgs/lambo.webp",
    classen: "supercar",
  },
  {
    id: 3, // gonns be user id, as well as document id
    createdAt: "",
    make: "Rolls Royce",
    model: "Ghost",
    year: 2023,
    price: 1200,
    img: "/carimgs/ghost.webp",
    classen: "luxury",
  },
  {
    id: 4,
    createdAt: "",
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    price: 1700,
    img: "/carimgs/lambo.webp",
    classen: "supercar",
  },
  {
    id: 5, // gonns be user id, as well as document id
    createdAt: "",
    make: "Rolls Royce",
    model: "Ghost",
    year: 2023,
    price: 1200,
    img: "/carimgs/ghost.webp",
    classen: "luxury",
  },
  {
    id: 6,
    createdAt: "",
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    price: 1700,
    img: "/carimgs/lambo.webp",
    classen: "supercar",
  },
];
function HostedCars() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8 pt-8 pb-4">
        <h1 className="text-3xl font-semibold text-blue-950">
          You have NUMBER hosted cars
        </h1>
        <button
          className="text-xs text-blue-950 font-semibold border-solid py-1 px-2 bg-transparent border-[1px] border-blue-700 rounded-sm hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-transparent hover:text-blue-50 active:scale-95 "
          onClick={() => setIsOpenModal((prev) => !prev)}
        >
          + Add new car
        </button>
        {isOpenModal && (
          <Modal setIsOpenModal={setIsOpenModal}>
            <h1 className="text-3xl font-bold text-blue-950">Add a new car</h1>
            <AddHostedCarForm />
          </Modal>
        )}
      </div>
      {hostedCars.map((hCar) => (
        <HostedCarsCard car={hCar} key={hCar.id} />
      ))}
    </div>
  );
}

export default HostedCars;
