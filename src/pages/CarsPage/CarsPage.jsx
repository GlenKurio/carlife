import CarCards from "../../components/cars/CarCards";
import FilterNav from "../../components/cars/FilterNav";
import { useSearchParams } from "react-router-dom";
import useGetCars from "../../hooks/useGetCars";
function CarsPage() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const { cars, isLoading } = useGetCars();
  console.log(cars);
  const typeFilter = searchParams.get("type");

  if (isLoading && !cars) {
    return (
      <div className="grid place-content-center min-h-screen">Loading...</div>
    );
  }

  return (
    <section className="min-h-screen pt-16 px-4">
      <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%] my-8">
        Expand Driving Experience Horizons
      </h1>
      <FilterNav typeFilter={typeFilter} />

      <CarCards
        typeFilter={typeFilter}
        searchParams={searchParams.toString()}
        cars={cars}
        isLoading={isLoading}
      />
    </section>
  );
}

export default CarsPage;
