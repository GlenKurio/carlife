import Hero from "../../components/home/hero/Hero";
import Carousel from "../../components/home/hero/Carousel";
import FeaturedIn from "../../components/home/FeaturedIn";
import About from "../../components/home/about/About";
import KeyFeatures from "../../components/home/KeyFeatures";
import FeaturedCars from "../../components/home/FeaturedCars";
import Partners from "../../components/home/about/Partners";
import Reviews from "../../components/home/Reviews";

function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <Carousel />
      <FeaturedIn />
      <About />
      <KeyFeatures />
      <FeaturedCars />
      <Reviews />
    </main>
  );
}

export default HomePage;
