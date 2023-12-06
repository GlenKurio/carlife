import { Link } from "react-router-dom";
import HostedCarsCard from "./HostedCarsCard";
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
  return (
    <div className="flex flex-col gap-4">
      <h1>Your hosted cars</h1>
      {hostedCars.map((hCar, idx) => (
        <Link to={hCar.id} key={idx}>
          <HostedCarsCard car={hCar} />
        </Link>
      ))}
    </div>
  );
}

export default HostedCars;
