import { useParams, Outlet, Link } from "react-router-dom";
import CarDetailsNav from "./CarDetailsNav";
import useGetCarDetails from "../../../hooks/useGetCarDetails";

function HostedCarDetailsLayout() {
  const params = useParams();
  const carId = params.id;
  const { isLoading, car: carData } = useGetCarDetails(carId);

  if (isLoading)
    return (
      <div className="animate-pulse min-h-[50vh] grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          # CarLife
        </span>
      </div>
    );

  return (
    <>
      <Link
        to=".."
        relative="path"
        className="text-xl font-medium mt-4 inline-block text-blue-600  hover:text-blue-500"
      >
        &larr; <span className="hover:underline">Back to all cars</span>
      </Link>
      <div className="h-[300px] w-full mt-2 ">
        <article className="py-2  flex-col gap-2 flex">
          <figure className="relative flex items-center gap-6">
            <img
              src={carData.imgs[0]}
              alt={carData.make}
              className="max-w-[30%] rounded-md shadow-md"
            />
            <figcaption className="text-blue-950 text-xl sm:text-2xl md:text-4xl font-semibold">
              {carData.make} {carData.model}
            </figcaption>
          </figure>
          <CarDetailsNav carId={carId} />
        </article>
        <Outlet />
      </div>
    </>
  );
}

export default HostedCarDetailsLayout;
