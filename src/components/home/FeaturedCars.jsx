import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import useGetCars from "../../hooks/useGetCars";
import { Link } from "react-router-dom";
import ClassBadge from "../cars/ClassBadge";
import Reveal from "./animations/Reveal";

function FeaturedCars() {
  const { isLoading, cars } = useGetCars();

  if (isLoading)
    return (
      <div className="animate-pulse min-h-[50vh] grid place-content-center uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all ">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          # CarLife
        </span>
      </div>
    );
  return (
    <div className="bg-blue-50">
      <HorizontalScrollCarousel cars={cars} />
    </div>
  );
}

export default FeaturedCars;

const HorizontalScrollCarousel = ({ cars }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  const carsToDisplay = cars.slice(0, 5);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-br from-sky-500/60 to-indigo-500/60 pt-8"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex  gap-4">
          {carsToDisplay.map((car, idx) => {
            return <Card car={car} key={idx} />;
          })}
          <Link
            to="/cars"
            className="grid items-center justify-center font-bold text-blue-50 min-w-[300px] p-8 bg-gradient-to-br from-sky-500/40 to-indigo-500/40 backdrop-blur-sm hover:underline hover:scale-105 transition-all duration-200 rounded-lg"
          >
            Checkout All Cars &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ car }) => {
  return (
    <div className="group relative h-[80vh] w-[450px] md:w-[850px] overflow-hidden bg-blue-50 rounded-lg">
      <Link to={`/cars/${car.id}`}>
        <div
          style={{
            backgroundImage: `url(${car.imgs[0]})`,
          }}
          className="bg-cover bg-center md:bg-center absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 ">
          <p className="bg-gradient-to-br from-sky-500/20 to-indigo-500/20 p-2 text-2xl font-black uppercase text-white backdrop-blur-sm text-center">
            {car.make}
          </p>
          <span className="absolute bottom-5 left-6">
            <ClassBadge type={car.type} />
          </span>
          <span className="absolute bottom-4 right-4 font-bold text-blue-50 py-1 px-2 bg-gradient-to-br from-sky-500/90 to-indigo-500/90 rounded-full">
            ${car.price} / day
          </span>
        </div>
      </Link>
    </div>
  );
};
