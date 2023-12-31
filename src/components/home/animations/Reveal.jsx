import { motion } from "framer-motion";
function Reveal({ children }) {
  return (
    <div className=" w-min-content ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
