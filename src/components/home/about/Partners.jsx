import { motion } from "framer-motion";

function Partners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-screen">
      {partners.map((icon, idx) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1 * idx,
            type: "spring",
            mass: 15,
            stiffness: 500,
            damping: 90,
          }}
          className="aspect-square w-[35px]  flex items-center"
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
