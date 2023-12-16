import HeroSection from "../../components/home/HeroSection";
import Carousel from "../../components/home/Carousel";
import Featured from "../../components/home/Featured";
function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <HeroSection />
      <Carousel />
      <Featured />
    </main>
  );
}

export default HomePage;
