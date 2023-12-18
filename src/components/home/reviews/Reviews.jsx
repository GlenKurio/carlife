import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="my-8 flex flex-col gap-4 p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-8">
        See what our clients say
      </h2>

      {reviews.map((review, idx) => (
        <ReviewCard review={review} key={idx} idx={idx} />
      ))}
    </section>
  );
}

export default Reviews;
const reviews = [
  {
    name: "Sophia Johnson",
    avatar: "/avatars/avatar-2.png",
    review:
      "The experience with CARLIFE was outstanding! Driving the Rolls-Royce Phantom felt like a dream. The service was impeccable, making it a 5-star rental!",
    rating: 5,
  },

  {
    name: "David Smith",
    avatar: "/avatars/avatar-1.png",
    review:
      "Renting the Bentley Continental GT from CARLIFE was a fantastic choice. The car was pristine, the process was seamless, and the staff was incredibly professional. Definitely a 5-star experience!",
    rating: 5,
  },

  {
    name: "Emma Thompson",
    avatar: "/avatars/avatar-4.png",
    review:
      "My exhilarating experience with CARLIFE was driving the Koenigsegg Jesko. The speed and performance were mind-blowing. Top-notch service, deserving of 5 stars!",
    rating: 5,
  },

  {
    name: "Michael Adams",
    avatar: "/avatars/avatar-3.png",
    review:
      "I rented a Bugatti Chiron from CARLIFE for a special occasion, and it was spectacular! The attention to detail, both in the car and service, was outstanding. A definite 5-star rental!",
    rating: 5,
  },

  {
    name: "Olivia Martinez",
    avatar: "/avatars/avatar-6.png",
    review:
      "The Rolls-Royce Cullinan from CARLIFE was an unforgettable experience! The car was stunning, and the customer service was superb. Definitely deserving of 5 stars!",
    rating: 5,
  },

  {
    name: "James Wilson",
    avatar: "/avatars/avatar-5.png",
    review:
      "I had an amazing time driving the Bentley Mulsanne from CARLIFE. The elegance and comfort of the car were exceptional, making it a 5-star experience!",
    rating: 5,
  },

  {
    name: "Sophie Brown",
    avatar: "/avatars/avatar-8.png",
    review:
      "The Koenigsegg Gemera from CARLIFE was a dream come true! The power and handling of the car were incredible. The service provided was top-notch, a definite 5-star experience!",
    rating: 5,
  },

  {
    name: "Daniel Miller",
    avatar: "/avatars/avatar-7.png",
    review:
      "Renting the Bugatti Veyron from CARLIFE for a weekend getaway was phenomenal! The car was a masterpiece, and the service was exceptional. Definitely a 5-star rental experience!",
    rating: 5,
  },
];
