import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Dedication() {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg mb-4 leading-8 md:text-2xl md:leading-[1.8] md:text-center md:max-w-[54ch] md:mx-auto">
        Our dedication to providing you with access to these legendary vehicles
        goes beyond mere transportation; it's about creating unforgettable
        moments and fulfilling dreams. We invite you to explore our collection,
        and let us elevate your drive to an unparalleled level of luxury and
        exclusivity.
      </p>
      <Link to="/cars" className="relative flex w-full justify-center md:mt-8">
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md transition-all duration-200 ease-in-out text-2xl font-semibold w-full md:w-1/2 lg:w-1/4">
          Browse Cars
        </button>

        <button className="w-full md:w-1/2 lg:w-1/4 absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-8 py-4 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-2xl font-semibold">
          Browse Cars
        </button>
      </Link>
    </motion.article>
  );
}

export default Dedication;
