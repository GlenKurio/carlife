import Hero from "../../components/home/Hero";
import Carousel from "../../components/home/Carousel";
import FeaturedIn from "../../components/home/FeaturedIn";
import About from "../../components/home/About";
import KeyFeatures from "../../components/home/KeyFeatures";
import FeaturedCars from "../../components/home/FeaturedCars";
import Partners from "../../components/home/Partners";
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
      <Partners />
      <Reviews />
    </main>
  );
}

export default HomePage;
