import CarCards from "../../components/cars/CarCards";
import FilterNav from "../../components/cars/FilterNav";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";

function CarsPage() {
  const [searchParams, setSearchPrams] = useSearchParams();
  const carsData = ["mikoka"];

  const typeFilter = searchParams.get("type");
  return (
    <section className="min-h-screen pt-16 px-4">
      <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%] my-8">
        Expand Driving Experience Horizons
      </h1>
      <FilterNav typeFilter={typeFilter} />

      <CarCards
        typeFilter={typeFilter}
        searchParams={searchParams.toString()}
        cars={carsData}
      />
    </section>
  );
}

export default CarsPage;
