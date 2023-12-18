import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-16 bg-blue-50 min-h-min">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-start gap-[2rem] bg-blue-50 bg-opacity-50 mx-auto p-8"
      >
        <h1 className="md:text-5xl text-3xl text-center drop-shadow-3xl font-bold text-blue-950 max-w-[100%]">
          Your Gateway to Luxury Car Rentals
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-semibold text-blue-950 opacity-80 max-w-3xl leading-[1.7]">
          Experience the sophistication and performance with our exclusive fleet
          of luxury cars.
        </h2>

        <Link to="/cars" className="relative flex w-full justify-center">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md transition-all duration-200 ease-in-out text-2xl font-semibold w-full md:w-1/2 lg:w-1/4">
            Browse Cars
          </button>

          <button className="w-full md:w-1/2 lg:w-1/4 absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-2xl font-semibold">
            Browse Cars
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;