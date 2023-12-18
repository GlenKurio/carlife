import StarRating from "../../StarRating";
import { motion } from "framer-motion";
function ReviewCard({ review, idx }) {
  console.log(review);
  return (
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
        delay: 0.1 * idx,
        type: "spring",
        mass: 15,
        stiffness: 500,
        damping: 90,
      }}
      className="w-full rounded-xl p-2 flex flex-col gap-4 bg-gradient-to-r from-sky-500 to-indigo-500 md:w-1/2 md:mx-auto"
    >
      <figure className="flex items-center gap-8">
        <img
          src={review.avatar}
          alt={`Image of ${review.name}`}
          className="rounded-full"
        />
        <figcaption className="text-2xl font-bold text-blue-950">
          {review.name}
        </figcaption>
      </figure>
      <div>
        <p className="text-xl text-blue-50 font-medium text-center">
          {review.review}
        </p>
      </div>
      <div className="justify-self-end flex justify-end">
        <StarRating defaultRating={review.rating} size={26} />
      </div>
    </motion.article>
  );
}

export default ReviewCard;
