import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

function Partners() {
  return (
    <article className="md:flex md:items-center md:gap-8">
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-lg text-center tracking-[1px]  leading-10 md:w-1/2 md:text-center md:text-2xl md:leading-[1.8]"
      >
        We've forged partnerships with renowned car manufacturers like Bentley,
        Rolls-Royce, Koenigsegg, Porsche, and Bugatti to bring you a collection
        of rare and exceptional vehicles that redefine the very essence of
        luxury.
      </motion.p>
      <div className="md:w-1/2">
        <h2 className="text-center text-xl font-semibold text-blue-950 mt-8 mb-2">
          Our Key Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 min-w-screen mb-8">
          {partners.map((icon, idx) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * idx,
                type: "spring",
                mass: 15,
                stiffness: 500,
                damping: 90,
              }}
              className="aspect-square w-[35px] md:w-[70px]  flex items-center"
              key={idx}
            >
              <img
                src={icon}
                alt="Car make partner"
                className="w-full aspect-video object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Partners;

const partners = [
  "/public/partners/AstonMartinLogo.svg",
  "/public/partners/Audi-Logo_2016.svg",
  "/public/partners/Bentley_logo 1.svg",
  "/public/partners/BMW.svg",
  "/public/partners/Bugatti_logo 1.svg",
  "/public/partners/Ferrari-Logo.svg",
  "/public/partners/Koenigsegg_(Fahrzeughersteller)_logo 1.svg",
  "/public/partners/lamborghini 1.svg",
  "/public/partners/layer1.svg",
  "/public/partners/Maserati_logo.svg",
  "/public/partners/McLaren_logo 1.svg",
  "/public/partners/Mercedes-Benz_free_logo.svg",
  "/public/partners/Nissan_2020_logo.svg",
  "/public/partners/porsche.svg",
  "/public/partners/Rolls-Royce_Motor_Cars_logo.svg",
  "/public/partners/Romeo_Logo.svg",
];
