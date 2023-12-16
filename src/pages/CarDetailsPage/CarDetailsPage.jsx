import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import useGetCarDetails from "../../hooks/useGetCarDetails";
import { useState } from "react";
import ClassBadge from "../../components/cars/ClassBadge";
import useOrderStore from "../../store/orderStore";

function CarDetailsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  const carId = params.id;
  const { isLoading, car } = useGetCarDetails(carId);
  const [range, setRange] = useState(1);
  const { order, setOrder } = useOrderStore();

  if (isLoading && !car) {
    return (
      <div className="animate-pulse min-h-[50vh] grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          # CarLife
        </span>
      </div>
    );
  }
  const total = car.price * range;

  function handleClick() {
    // pass order through parameters
    const newOrder = {
      total: total,
      carId: carId,
      range: range,
      make: car.make,
      model: car.model,
      img: car.imgs[0],
      price: car.price,
      type: car.type,
    };
    setOrder(newOrder);

    return navigate("/checkout");
  }

  return (
    <div className="min-h-screen p-8 flex flex-col ">
      <Link className="mt-12" to={`/cars/${search}`}>
        &larr; Go back to {search?.split("=")[1]} cars
      </Link>

      <article className="mt-4 w-full mx-auto flex flex-col items-center gap-4">
        <div className="w-full flex justify-center">
          <img
            className="w-full md:max-w-[80%] "
            src={car?.imgs.length > 0 ? car.imgs : "/car-placeholder.webp"}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 md:w-[80%]">
          <h1 className="text-4xl text-center font-bold text-blue-950">
            {car.make} {car.model}
          </h1>
          <div className="flex items-center justify-between w-full">
            <ClassBadge type={car.type} />

            <span className="md:font-bold">${car.price} / day</span>
          </div>
          <p className="text-lg my-4">{car.description}</p>

          <label
            htmlFor="range"
            className="flex flex-col items-center w-full relative my-4 gap-2"
          >
            <span className="font-semibold text-blue-950">
              For how long would you like to rent this car?
            </span>
            <input
              className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
              type="range"
              min="1"
              max="30"
              step="1"
              id="range"
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
            />
            <span className="text-sm text-blue-400 dark:text-gray-400 absolute start-0 bottom-2">
              Min 1 day
            </span>
            <span className="text-sm text-blue-400 dark:text-gray-400 absolute end-0 bottom-2">
              Max 30 days
            </span>
            <span className="font-semibold text-blue-950">{range} Days</span>
          </label>
          <div className="text-center font-bold text-xl text-blue-950 mt-6 mb-[-20px]">
            <span>
              Total: ${total} for {range} {range > 1 ? "Days" : "Day"}
            </span>
          </div>
          <div className="relative inline-block mt-6" onClick={handleClick}>
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-lg font-semibold w-full">
              Rent
            </button>
            <button className="w-full absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-lg font-semibold ">
              Rent
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CarDetailsPage;
