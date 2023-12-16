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
        <div className="animate-pulse min-h-[50vh] grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            # CarLife
          </span>
        </div>
      ) : (
        <>
          <div className="min-h-[20vh] grid grid-cols-1 items-center justify-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
            <p className="text-center font-semibold text-blue-950">
              Looks like there are no cars matching this filter. Try Another one
            </p>
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-center">
              # CarLife
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default CarCards;
