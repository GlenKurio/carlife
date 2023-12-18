import { motion } from "framer-motion";
function Fleet() {
  return (
    <div className="md:flex md:items-start md:gap-8 md:flex-row-reverse md:my-16 overflow-hidden">
      <motion.p
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="text-lg leading-10 text-center tracking-[1px]  md:w-1/2  md:text-2xl md:leading-[1.8] md:text-center overflow-hidden"
      >
        By teaming up with these iconic brands, we've curated a selection of
        automobiles that encapsulate innovation, prestige, and unparalleled
        performance. Whether you desire the timeless sophistication of a
        Bentley, the unrivaled luxury of a Rolls-Royce, the adrenaline-pumping
        speed of a Koenigsegg, or the sheer magnificence of a Bugatti, we have
        meticulously assembled a fleet that caters to your most discerning
        tastes.
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-8 grid grid-cols-3 grid-rows-3 gap-1 md:w-1/2 md:my-2 "
      >
        {imgs.map((img, idx) => (
          <div key={idx} className="group  rounded-md">
            <div
              className=" bg-cover bg-center w-full h-[150px] group-hover:scale-110 transition-all duration-1000 "
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Fleet;

const imgs = [
  "/about-grid/911-turbos.webp",
  "/about-grid/porsche-brakes.webp",
  "/about-grid/porsche-interior.webp",
  "/about-grid/rr-starlights.webp",
  "/about-grid/bugatti.webp",
  "/about-grid/Ferrari-Engines.webp",
  "/about-grid/koenigsegg-gemera.webp",
  "/about-grid/am-f1.webp",
  "/about-grid/bentley-int.webp",
];
