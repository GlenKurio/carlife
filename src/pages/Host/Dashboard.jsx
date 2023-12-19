import { motion } from "framer-motion";
function Dashboard() {
  return (
    <section className="flex flex-col gap-8 py-8 ">
      <div className="flex flex-col gap-8 md:flex-row">
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
          className="bg-gradient-to-l from-sky-500/60 to-indigo-500/60 p-4 flex flex-col gap-8 rounded-xl shadow-xl md:w-1/2 md:mx-auto"
        >
          <h3 className="text-4xl font-bold text-blue-950">Welcome!</h3>
          <p className="text-blue-50 flex items-center justify-between">
            {" "}
            <span className="">Income last 30 days</span>
            <span className="underline">Details</span>
          </p>
          <p className="text-blue-50 font-bold text-2xl">$35,650</p>
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
          className="bg-gradient-to-l from-sky-500/60 to-indigo-500/60 p-4 flex items-center justify-between gap-8 rounded-xl shadow-xl md:w-1/2 md:mx-auto"
        >
          <span className="text-2xl font-semibold text-blue-950">
            Review Score
          </span>
          <span className="flex items-center gap-1">
            <span className="w-[24px] h-[24px] inline-block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="yellow"
                stroke="yellow"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-blue-50">
              <span className="font-semibold ">5.0</span>/8
            </span>
          </span>
          <span className="underline text-blue-50">Details</span>
        </motion.article>
      </div>
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
      >
        <img
          src="/public/host-graphs/Overview.png"
          alt=""
          className="shadow-xl"
        />
      </motion.article>
    </section>
  );
}

export default Dashboard;
