import Reveal from "./animations/Reveal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const logos = [
  { src: "/featured/business-insider.png" },
  { src: "/featured/forbes.png" },
  { src: "/featured/techcrunch.png" },
  { src: "/featured/the-new-york-times.png" },
  { src: "/featured/usa-today.png" },
];

function FeaturedIn() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const containerWidth = document.getElementById("logoContainer").offsetWidth;
    setWidth(containerWidth);
  }, []);
  return (
    <Reveal>
      <section className="overflow-hidden mt-8">
        <article className="flex items-center  w-[200vw] px-2 md:px-5">
          {/* px - on article equal to gap-10 between each div with logo. Which gives us smooth animation restart */}
          <motion.div
            id="logoContainer"
            className="flex items-center justify-between gap-4 md:gap-10"
            intital={{ translateX: 0 }}
            animate={{ translateX: "-100vw" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Images />
            <Images />
          </motion.div>
        </article>
      </section>
    </Reveal>
  );
}

function Images() {
  return logos.map((logo, idx) => (
    <div key={idx} className=" flex items-center">
      <img
        className="aspect-video w-full object-contain grayscale hover:grayscale-0 transition-all duration-200 "
        src={logo.src}
        alt="Partner logo"
      />
    </div>
  ));
}

export default FeaturedIn;
