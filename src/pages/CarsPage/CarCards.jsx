import { Link } from "react-router-dom";
import CarCard from "./CarCard";

const cars = [
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

function CarCards() {
  return (
    <div className="grid grid-cols-cards gap-x-4 gap-y-4 justify-center">
      {cars.map((car, idx) => (
        <Link to={`/cars/${car.id}`}>
          <CarCard key={idx} car={car} />
        </Link>
      ))}
    </div>
  );
}

export default CarCards;
