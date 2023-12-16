import Reveal from "./animations/Reveal";
function Carousel() {
  return (
    <Reveal>
      <div className="bg-home-1 bg-cover bg-top relative pt-20 md:w-[500px] md:h-[300px] mx-auto rounded-lg shadow-md  hover:shadow-lg duration-200 transition-all w-[90%] h-[250px]"></div>
    </Reveal>
  );
}

export default Carousel;
