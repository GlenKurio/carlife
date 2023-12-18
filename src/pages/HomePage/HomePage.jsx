import Hero from "../../components/home/hero/Hero";
import Carousel from "../../components/home/hero/Carousel";
import FeaturedIn from "../../components/home/FeaturedIn";
import About from "../../components/home/about/About";

import FeaturedCars from "../../components/home/FeaturedCars";

import Reviews from "../../components/home/reviews/Reviews";

function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <Carousel />
      <FeaturedIn />
      <About />
      <FeaturedCars />
      <Reviews />
    </main>
  );
}

export default HomePage;
