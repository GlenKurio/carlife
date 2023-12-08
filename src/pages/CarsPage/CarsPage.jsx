import CarCards from "../../components/cars/CarCards";
import FilterNav from "../../components/cars/FilterNav";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import getCars from "../../services/firebase/apiCars";

export function loader() {
  const cars = getCars();
  console.log(cars);

  return cars;
}

function CarsPage() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const carsData = useLoaderData();

  const typeFilter = searchParams.get("type");
  return (
    <section className="min-h-screen pt-16 px-4">
      <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%] my-8">
        Expand Driving Experience Horizons
      </h1>
      <FilterNav typeFilter={typeFilter} />
      <Suspense fallback={<h1>Loading cars..</h1>}>
        <CarCards
          typeFilter={typeFilter}
          searchParams={searchParams.toString()}
          cars={carsData}
        />
      </Suspense>
    </section>
  );
}

export default CarsPage;
