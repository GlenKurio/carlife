import CarCards from "../../components/cars/CarCards";
import FilterNav from "../../components/cars/FilterNav";
import { useSearchParams } from "react-router-dom";
import useGetCars from "../../hooks/useGetCars";
function CarsPage() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const { cars, isLoading } = useGetCars();

  const typeFilter = searchParams.get("type");

  if (isLoading && !cars) {
    return (
      <div className="animate-pulse min-h-[50vh] grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          # CarLife
        </span>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-16 px-4">
      <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%] mt-8">
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
