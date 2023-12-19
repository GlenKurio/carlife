import { motion } from "framer-motion";

function Income() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <article className="flex items-center gap-4 md:w-1/2 md:mx-auto">
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
            delay: 0.1,
          }}
          className="w-full"
        >
          <img
            src="/public/host-graphs/Income.png"
            alt=""
            className="w-full shadow-xl"
          />
        </motion.div>
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
            delay: 0.2,
          }}
          className="w-full"
        >
          <img
            src="/public/host-graphs/Expenses.png"
            alt=""
            className="w-full shadow-xl"
          />
        </motion.div>
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
            delay: 0.2,
          }}
          className="w-full "
        >
          <img
            src="/public/host-graphs/Balance.png"
            alt=""
            className="w-full shadow-xl"
          />
        </motion.div>
      </article>
      <div className="flex flex-col gap-4 md:flex-row ">
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="w-full md:w-1/2"
        >
          <img
            src="/public/host-graphs/Recent Transaction.png"
            alt=""
            className="shadow-xl mx-auto"
          />
        </motion.article>
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="w-full md:w-1/2"
        >
          <img
            src="/public/host-graphs/Activity.png"
            alt=""
            className="shadow-xl mx-auto"
          />
        </motion.article>
      </div>
    </section>
  );
}

export default Income;
