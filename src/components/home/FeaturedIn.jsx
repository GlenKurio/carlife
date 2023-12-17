import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const logos = [
  { src: "/public/featured/business-insider.png" },
  { src: "/public/featured/forbes.png" },
  { src: "/public/featured/techcrunch.png" },
  { src: "/public/featured/the-new-york-times.png" },
  { src: "/public/featured/usa-today.png" },
];

function FeaturedIn() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const containerWidth = document.getElementById("logoContainer").offsetWidth;
    setWidth(containerWidth);
  }, []);
  return (
    <section className="overflow-hidden">
      <h2 className="text-4xl text-center font-bold text-blue-950 md:mb-[-2rem]">
        Featured in
      </h2>
      <article className="flex items-center  w-[200vw] px-1 md:px-5">
        {/* px - on article equal to gap-10 between each div with logo. Which gives us smooth animation restart */}
        <motion.div
          id="logoContainer"
          className="flex items-center justify-between gap-2 md:gap-10"
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
  );
}

function Images() {
  return logos.map((logo, idx) => (
    <div key={idx}>
      <img
        className="aspect-video w-full object-contain grayscale hover:grayscale-0 transition-all duration-200 "
        src={logo.src}
        alt="Partner logo"
      />
    </div>
  ));
}

export default FeaturedIn;
