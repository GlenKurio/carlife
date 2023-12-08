import { Link } from "react-router-dom";

function HostedCarsCard({ car }) {
  return (
    <Link to={`/host/cars/${car.id}`}>
      <article className="flex gap-4 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 bg-blue-100">
        <img
          src={car.img}
          alt={`${car.make} ${car.model}`}
          className="aspect-video object-cover w-1/3"
        />
        <p className="flex flex-col justify-center gap-4 font-semibold w-full py-2 text-md md:text-2xl md:gap-8">
          <span>
            {car.make} {car.model}
          </span>
          <span>${car.price} / day</span>
        </p>
      </article>
    </Link>
  );
}

export default HostedCarsCard;
