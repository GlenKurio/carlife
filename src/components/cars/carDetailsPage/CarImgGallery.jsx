import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import useCarDataStore from "../../../store/useCarDataStore";

// const car = JSON.parse(localStorage.getItem("car-info"));
// const imgs = car.imgs;

// const imgs = [
//   "/carimgs/bentley.webp",
//   "/carimgs/gt-3.webp",
//   "/carimgs/g-amg.webp",
//   "/carimgs/challenger.webp",
//   "/carimgs/cullinan.webp",
//   "/carimgs/Ferrari-SF90.webp",
//   "/carimgs/ghost.webp",
//   "/carimgs/m5-cs.webp",
//   "/carimgs/lambo.webp",
// ];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 80,
};

export default function CarDetailsCarousel() {
  const car = useCarDataStore((state) => state.car);
  const imgs = car.imgs;

  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
      console.log("effect running");
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [imgs]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden bg-transparent "
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing md:w-[75vw] md:mx-auto "
      >
        <Images imgIndex={imgIndex} imgs={imgs} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
    </motion.div>
  );
}

const Images = ({ imgIndex, imgs }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full  shrink-0 rounded-xl bg-neutral-800 object-cover "
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs }) => {
  return (
    <div className="mt-4 flex w-full justify-between gap-2">
      {imgs.map((img, idx) => {
        return (
          <button
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-10 w-10 rounded-md transition-colors md:h-[100px] md:w-[150px] ${
              idx === imgIndex
                ? "border-[2px] border-solid border-blue-400"
                : ""
            }`}
          />
        );
      })}
    </div>
  );
};
