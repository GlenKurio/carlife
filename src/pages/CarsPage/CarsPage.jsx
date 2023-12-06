import CarCards from "./CarCards";
import FilterNav from "./FilterNav";

function CarsPage() {
  return (
    <section className="min-h-screen pt-16 px-4">
      <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%] my-8">
        Expand Driving Experience Horizons
      </h1>
      <FilterNav />
      <CarCards />
    </section>
  );
}

export default CarsPage;
