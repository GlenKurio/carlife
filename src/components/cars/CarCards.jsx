import { Link } from "react-router-dom";
import CarCard from "./CarCard";

// const cars = [
//   {
//     id: 1, // gonns be user id, as well as document id
//     createdAt: "",
//     make: "Rolls Royce",
//     model: "Ghost",
//     year: 2023,
//     price: 1200,
//     img: "/carimgs/ghost.webp",
//     type: "luxury",
//   },
//   {
//     id: 2,
//     createdAt: "",
//     make: "Lamborghini",
//     model: "Huracan",
//     year: 2022,
//     price: 1700,
//     img: "/carimgs/lambo.webp",
//     type: "supercar",
//   },
//   {
//     id: 3, // gonns be user id, as well as document id
//     createdAt: "",
//     make: "Rolls Royce",
//     model: "Ghost",
//     year: 2023,
//     price: 1200,
//     img: "/carimgs/ghost.webp",
//     type: "luxury",
//   },
//   {
//     id: 4,
//     createdAt: "",
//     make: "Lamborghini",
//     model: "Huracan",
//     year: 2022,
//     price: 1700,
//     img: "/carimgs/lambo.webp",
//     type: "supercar",
//   },
//   {
//     id: 5, // gonns be user id, as well as document id
//     createdAt: "",
//     make: "Rolls Royce",
//     model: "Ghost",
//     year: 2023,
//     price: 1200,
//     img: "/carimgs/ghost.webp",
//     type: "luxury",
//   },
//   {
//     id: 6,
//     createdAt: "",
//     make: "Lamborghini",
//     model: "Huracan",
//     year: 2022,
//     price: 1700,
//     img: "/carimgs/lambo.webp",
//     type: "sport",
//   },
// ];

function CarCards({ typeFilter, searchParams, cars, isLoading }) {
  const displayCars = typeFilter
    ? cars.filter((car) => car.type.toLowerCase() === typeFilter)
    : cars;
  return (
    <div className="grid grid-cols-cards gap-x-4 gap-y-4 justify-center">
      {displayCars.length !== 0 ? (
        displayCars.map((car, idx) => (
          <Link
            key={idx}
            to={`/cars/${car.id}`}
            state={{ search: `?${searchParams}` }}
          >
            <CarCard car={car} />
          </Link>
        ))
      ) : isLoading ? (
        <div>Loading cars...</div>
      ) : (
        <div>No cars matching this filter</div>
      )}
    </div>
  );
}

export default CarCards;
