import { Link } from "react-router-dom";
import { setDocas } from "../../services/firebase/setCars";

function HomePage() {
  function handleClick() {
    setDocas();
  }
  return (
    <section className="py-16 bg-blue-50 min-h-screen">
      <div className="flex flex-col items-center justify-start gap-[2rem] bg-blue-50 bg-opacity-50 mx-auto p-8">
        <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%]">
          Your Gateway to Exquisite Luxury Car Rentals
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-950 opacity-80 max-w-3xl leading-[1.7]">
          Experience the epitome of sophistication and performance with our
          exclusive fleet of luxury cars, meticulously curated to elevate every
          journey.
        </h2>

        <Link to="/cars" className="relative flex">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md transition-all duration-200 ease-in-out text-2xl font-semibold">
            Browse Cars
          </button>

          <button className="w-full absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-2xl font-semibold">
            Browse Cars
          </button>
        </Link>
      </div>

      <div className="bg-home-1 bg-cover bg-top relative pt-20 md:w-[500px] md:h-[300px] mx-auto rounded-lg shadow-md  hover:shadow-lg duration-200 transition-all w-[90%] h-[250px]"></div>
    </section>
  );
}

export default HomePage;
